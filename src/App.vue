<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-7 d-flex align-items-center justify-content-center">
        <map-viewer
          class="animate__animated animate__fadeIn animate__delay-1s"
          :airports="airports"
          :connections="connections"
          :regionColors="regionColors"
          :activeRoute="activeRoute"
          :selected-option-start="selectedOptionStart"
          :selected-option-end="selectedOptionEnd"
          @set-start-airport="setOptionStartAirport"
          @set-end-airport="setOptionEndAirport"
        />
      </div>
      <div class="col-12 col-lg-5">
        <div class="h-100 shadow-lg p-4 animate__animated animate__zoomInDown">
          <div class="">
            <div class="mb-3 w-100">
              <label for="inputStart" class="form-label">Partida</label>
              <ModelSelect
                :options="airportOptionsStart"
                class="w-100"
                v-model="selectedOptionStart"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="inputStart" class="form-label">Destino</label>
              <ModelSelect
                :options="airportOptionsEnd"
                class="w-100"
                v-model="selectedOptionEnd"
              />
            </div>
          </div>
          <button
            :disabled="!canpickRoutes"
            @click="pickRoutes"
            class="btn btn-primary w-100"
          >
            Montar Rota
          </button>
          
          <div v-if="airportRoutes.length && !isLoadingRoutes">
            <p>Qtd de Rotas: {{ calculatedPathsCount }}<br>
              Tempo de Calculo: {{ calculatedTime }}
            </p>
          </div>

          <loading-state class="mt-5 animate__animated animate__zoomIn animate__faster" v-if="isLoadingRoutes"/>
          <empty-state class="mt-4" v-if="!airportRoutes.length && !isLoadingRoutes"/>
          <RouteTable
            :airportRoutes="airportRoutes"
            @active-route-select="setActiveRoute"
            v-if="airportRoutes.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import data from "@/assets/data.json";
import LoadingState from '@/components/LoadingState.vue';

import {
  Airport,
  AirportOption,
  AirportRoutes,
  Conection,
  RegionColor,
} from "@/types/types";
import RouteTable from "./components/RouteTable.vue";
import MapViewer from "./components/MapViewer.vue";
import EmptyState from "./components/EmptyState.vue";
import "animate.css";
import { Path, Point, Traverser } from "./libraries/TraversalAlgorithm";

export default defineComponent({
  name: "App",
  components: {
    ModelSelect,
    RouteTable,
    MapViewer,
    LoadingState,
    EmptyState
  },
  data() {
    return {
      airportOptionsStart: [] as AirportOption[],
      airports: data.airports as Airport[],
      connections: data.connections as Conection[],
      regionColors: data.regionColors as RegionColor[],
      selectedOptionStart: { value: ""} as AirportOption,
      selectedOptionEnd: { value: ""} as AirportOption,
      airportRoutes: [] as AirportRoutes,
      isLoadingRoutes: false,
      activeRoute: [] as string[],
      calculatedPathsCount: 0,
      calculatedTime: 0
    };
  },
  mounted() {
    this.loadAirportOptions();
  },
  methods: {
    loadAirportOptions() {
      this.airportOptionsStart = this.airports.map((airport) => {
        return { value: airport.id, text: `${airport.id} - ${airport.description}` };
      });
    },
    pickRoutes() {
      this.isLoadingRoutes = true;
      this.airportRoutes = [];
      let points: Point[] = [];

      this.airports.forEach((airport) => {
        points.push({id: airport.id, conections: []});
      });


      const initialPoint = points.find((point) => point.id == this.selectedOptionStart.value);
      const finalPoint = points.find((point) => point.id == this.selectedOptionEnd.value);

      this.connections.forEach((con) => {
        const id1 = con.ids[0];
        const id2 = con.ids[1];
        const airport1:Airport | undefined =  this.airports.find((airport) => airport.id == id1);
        const airport2:Airport | undefined =  this.airports.find((airport) => airport.id == id2);
        if (!airport1 || !airport2) return;

        const point1 = points.find((point) => point.id == id1);
        const point2 = points.find((point) => point.id == id2);
        if (!point1 || !point2) return;

        const x1 = airport1.x;
        const y1 = airport1.y;
        const x2 = airport2.x;
        const y2 = airport2.y;

        const distance = Math.sqrt(
          (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
        );

        point1.conections.push({point: point2, cost: distance});
        point2.conections.push({point: point1, cost: distance});
      });

      if (!initialPoint || !finalPoint) return;
      const traverser = new Traverser();
      traverser.setPoints(points);
      traverser.setInitialPoint(initialPoint);
      traverser.setFinalPoint(finalPoint);

      setTimeout(() => {
      const startDate = new Date(); 
       const startTimeStamp = startDate.getTime();
        traverser.traverse();
        let validPaths: Path[] = [];

        validPaths = traverser.getValidPaths();
        this.calculatedPathsCount = validPaths.length;

        const stoptDate = new Date(); 
        const stopTimeStamp = stoptDate.getTime();

        validPaths = validPaths.sort((a: Path, b: Path) => a.distance - b.distance);
        validPaths = validPaths.slice(0, 10000);
        this.isLoadingRoutes = false;
        this.airportRoutes = [];

        validPaths.forEach((path, index) => {
          this.airportRoutes.push({pos: index.toString(), distance: Math.round(path.distance), path: path.sequence})
        })

        this.calculatedTime = (stopTimeStamp - startTimeStamp) / 1000;
      }, 30);


      // setTimeout(() => {
      //   fetch("api/routes.json")
      //     .then((response) => response.json())
      //     .then((routes: AirportRoutes) => {
      //       this.airportRoutes = routes;
      //       this.isLoadingRoutes = false;
      //     });
      // }, 20);




    },
    setActiveRoute(incomingRoute: string | string[]) {
      this.activeRoute = (incomingRoute instanceof Array) ? incomingRoute : incomingRoute.split('-');
    },
    setOptionStartAirport(id: string) {
      if (this.selectedOptionEnd.value == id) {
        this.selectedOptionEnd = {value: ""}
      }
      this.selectedOptionStart = {value: id};
    },
    setOptionEndAirport(id: string) {
      if (this.selectedOptionStart.value == id) {
        this.selectedOptionStart = {value: ""}
      }
      this.selectedOptionEnd = {value: id};
    }
  },
  computed: {
    airportOptionsEnd(): AirportOption[] {
      return this.airportOptionsStart.filter(
        (option: AirportOption) =>
          this.selectedOptionStart.value != option.value
      );
    },
    canpickRoutes(): boolean {
      return (
        this.selectedOptionEnd.value != "" &&
        this.selectedOptionStart.value != ""
      );
    },
  },
  watch: {
    selectedOptionStart() {
      if (this.selectedOptionStart.value == this.selectedOptionEnd.value) {
        this.selectedOptionEnd = { value: ""};
      }
    },
  },
});
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";

html,
body {
  margin: 0;
}

.ui.selection.dropdown {
  :hover {
    cursor: pointer !important;
  }
  .item.selected {
    background-color: #0d6efd;
    color: #fff;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: rgb(201, 201, 201);
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
