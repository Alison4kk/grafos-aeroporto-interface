<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-lg-7 d-flex align-items-center justify-content-center"
      >
        <map-viewer
          class=""
          :airports="airports"
          :connections="connections"
          :regionColors="regionColors"
          :activeRoute="activeRoute"
          :selected-option-start="selectedOptionStart"
          :selected-option-end="selectedOptionEnd"
          @set-start-airport="setOptionStartAirport"
          @set-end-airport="setOptionEndAirport"
          @remove-connection="removeConnection"
          @add-connection="addConnection"
        />
      </div>
      <div class="col-12 col-lg-5">
        <div class="right-menu-container shadow-lg p-4">
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

          <div class="form-group mt-3">
            <label for="input-qtd-rotas" class="form-label"
              >Método de Pesquisa:</label
            >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="input-radio-pesquisa-rapida"
                value="rapida"
                v-model="searchType"
                checked
              />
              <label class="form-check-label" for="input-radio-pesquisa-rapida">
                Pesquisa Rapida
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="total"
                id="input-radio-pesquisa-total"
                v-model="searchType"
              />
              <label class="form-check-label" for="input-radio-pesquisa-total">
                Pesquisa Total (Lento)
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="server-melhor"
                id="input-radio-pesquisa-server-melhor"
                v-model="searchType"
              />
              <label class="form-check-label" for="input-radio-pesquisa-server-melhor">
                Calcular no Servidor (Melhor rota)
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="server-todas"
                id="input-radio-pesquisa-server-todas"
                v-model="searchType"
              />
              <label class="form-check-label" for="input-radio-pesquisa-server-todas">
                Calcular no Servidor (Todas)
              </label>
            </div>
          </div>
          <div class="form-group mt-3" v-if="['rapida', 'server-todas'].includes(searchType)">
            <label for="input-qtd-rotas" class="form-label"
              >Quantidade de Rotas: {{ Number(pathsLimit).toLocaleString() }}</label
            >
            <input
              type="range"
              class="form-range"
              min="10"
              :max="searchType == 'rapida' ? 10000 : 200000"
              step="10"
              id="input-qtd-rotas"
              v-model="pathsLimit"
            />
          </div>

          <button
            :disabled="!canpickRoutes"
            @click="pickRoutes"
            class="btn btn-primary w-100 mt-3"
          >
            Montar Rota
          </button>

          <div v-if="airportRoutes.length && !isLoadingRoutes">
            <p class="mt-3">
              Rotas Calculadas: {{ calculatedPathsCount }}<br />
              Tempo de Cálculo: {{ calculatedTime }}
            </p>
          </div>

          <loading-state
            class="mt-5 animate__animated animate__zoomIn animate__faster"
            v-if="isLoadingRoutes"
          />
          <empty-state
            class="mt-4"
            v-if="!airportRoutes.length && !isLoadingRoutes"
          />
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
import LoadingState from "@/components/LoadingState.vue";
import axios from "axios";
import swal from "sweetalert2"

import {
  Airport,
  AirportOption,
  AirportRoute,
  AirportRoutes,
  APIAirport,
  Conection,
  RegionColor,
} from "@/types/types";
import RouteTable from "./components/RouteTable.vue";
import MapViewer from "./components/MapViewer.vue";
import EmptyState from "./components/EmptyState.vue";
import "animate.css";
import { Path, Point, Traverser } from "./libraries/TraversalAlgorithm";
import { distanceBetween2Points } from "@/libraries/Utils";


export default defineComponent({
  name: "App",
  components: {
    ModelSelect,
    RouteTable,
    MapViewer,
    LoadingState,
    EmptyState,
  },
  data() {
    return {
      airportOptionsStart: [] as AirportOption[],
      airports: data.airports as Airport[],
      connections: data.connections as Conection[],
      regionColors: data.regionColors as RegionColor[],
      selectedOptionStart: { value: "" } as AirportOption,
      selectedOptionEnd: { value: "" } as AirportOption,
      airportRoutes: [] as AirportRoutes,
      isLoadingRoutes: false,
      activeRoute: [] as string[],
      pathsLimit: 100,
      searchType: "rapida" as "rapida" | "total" | "server-melhor"| "server-todas",
      calculatedPathsCount: 0,
      calculatedTime: 0,
    };
  },
  mounted() {
    this.loadAirportOptions();
  },
  methods: {
    loadAirportOptions() {
      this.airportOptionsStart = this.airports.map((airport) => {
        return {
          value: airport.id,
          text: `${airport.id} - ${airport.description}`,
        };
      });
    },
    pickRoutes() {
      this.isLoadingRoutes = true;
      this.airportRoutes = [];

      if (['server-todas', 'server-melhor'].includes(this.searchType)) {
        this.serverComputeRoutes();
      } else {
        this.localComputeRoutes();
      }
    },
    localComputeRoutes() {
      let points: Point[] = [];

      this.airports.forEach((airport) => {
        points.push({
          id: airport.id,
          connections: [],
          x: airport.x,
          y: airport.y,
        });
      });

      const initialPoint = points.find(
        (point) => point.id == this.selectedOptionStart.value
      );
      const finalPoint = points.find(
        (point) => point.id == this.selectedOptionEnd.value
      );

      this.connections.forEach((con) => {
        const id1 = con.ids[0];
        const id2 = con.ids[1];
        const airport1: Airport | undefined = this.airports.find(
          (airport) => airport.id == id1
        );
        const airport2: Airport | undefined = this.airports.find(
          (airport) => airport.id == id2
        );
        if (!airport1 || !airport2) return;

        const point1 = points.find((point) => point.id == id1);
        const point2 = points.find((point) => point.id == id2);
        if (!point1 || !point2) return;

        const cost = distanceBetween2Points(
          airport1.x,
          airport1.y,
          airport2.x,
          airport2.y
        );

        point1.connections.push({ point: point2, cost: cost });
        point2.connections.push({ point: point1, cost: cost });
      });

      if (!initialPoint || !finalPoint) return;
      const traverser = new Traverser(points, initialPoint, finalPoint);
      if (this.searchType == "rapida") {
        traverser.setPathsLimit(this.pathsLimit);
      }

      setTimeout(() => {
        const startDate = new Date();
        const startTimeStamp = startDate.getTime();
        traverser.traverse();
        let validPaths: Path[] = [];

        validPaths = traverser.getValidPaths();
        this.calculatedPathsCount = validPaths.length;

        const stoptDate = new Date();
        const stopTimeStamp = stoptDate.getTime();

        validPaths = validPaths.sort(
          (a: Path, b: Path) => a.distance - b.distance
        );
        validPaths = validPaths.slice(0, 100000);
        this.isLoadingRoutes = false;
        this.airportRoutes = [];

        validPaths.forEach((path, index) => {
          this.airportRoutes.push({
            pos: index.toString(),
            distance: Math.round(path.distance),
            path: path.sequence,
          });
        });

        this.calculatedTime = (stopTimeStamp - startTimeStamp) / 1000;
      }, 30);
    },
    serverComputeRoutes() {
      let APIgrafoID = '';

      const buscarMelhorRota = () => {
        console.log('Buscando melhor rota');

        axios({
          method: "get",
          url: `http://localhost:8080/api/v/1.0/dijkstra/get-best-route?grafoID=${APIgrafoID}&origem=${this.selectedOptionEnd.value}&destino=${this.selectedOptionStart.value}`,
        })
        .then((response) => {
          const data = response.data?.data;
          if (!data) return;
          this.airportRoutes.push({
            pos: '0',
            distance: Math.round(data.distance),
            path: data.path,
          });
          this.isLoadingRoutes = false;
        })
        .catch((reason) => {
          swal.fire({
            title: 'Erro',
            icon: 'error',
            text: 'Não foi possivel estabelecer uma conexão com o servidor'
          });
        });
      }

      const buscarTodasRotas = () => {
        axios({
          method: "get",
          url: `http://localhost:8080/api/v/1.0/dijkstra/list-all-routes?grafoID=${APIgrafoID}&origem=${this.selectedOptionEnd.value}&destino=${this.selectedOptionStart.value}&qtd=${this.pathsLimit}`,
        })
        .then((response) => {
          const routes = response.data?.data as {distance: number, path: string}[];
          this.isLoadingRoutes = false;
          let newAirportRoutes = [] as AirportRoutes
          routes.forEach((route, index) => {
            newAirportRoutes.push({
              pos: index.toString(),
              path: route.path,
              distance: Math.round(route.distance)
            });
          });
          this.airportRoutes = newAirportRoutes;
        })
        .catch((reason) => {
          swal.fire({
            title: 'Erro',
            icon: 'error',
            text: 'Não foi possivel estabelecer uma conexão com o servidor'
          });
        });
      }

      axios({
        method: "post",
        url: "http://localhost:8080/api/v/1.0/dijkstra/grafo/addgrafo",
        data: this.getAPIAirports()
      })
      .then((response) => {
        if ((response.status == 200) && (typeof response.data?.data?.grafoID == 'string')) {
          APIgrafoID = response.data.data.grafoID;
          if (this.searchType == 'server-melhor')
            buscarMelhorRota();
          else
            buscarTodasRotas();
        }
      })
      .catch((reason) => {
        swal.fire({
          title: 'Erro',
          icon: 'error',
          text: 'Não foi possivel estabelecer uma conexão com o servidor'
        });
      });
    },
    getAPIAirports(): APIAirport[]  {
      const APIAirports = [] as APIAirport[];
      this.airports.forEach((airport) => {
        APIAirports.push({
          id: airport.id,
          connections: [],
        });
      });

      this.connections.forEach((con) => {
        const id1 = con.ids[0];
        const id2 = con.ids[1];
        const airport1: Airport | undefined = this.airports.find(
          (airport) => airport.id == id1
        );
        const airport2: Airport | undefined = this.airports.find(
          (airport) => airport.id == id2
        );
        if (!airport1 || !airport2) return;

        const APIAirport1 = APIAirports.find((airport) => airport.id == id1);
        const APIAirport2 = APIAirports.find((airport) => airport.id == id2);
        if (!APIAirport1 || !APIAirport2) return;

        const cost = distanceBetween2Points(
          airport1.x,
          airport1.y,
          airport2.x,
          airport2.y
        );

        APIAirport1.connections.push({ id: APIAirport2.id, cost: cost });
        APIAirport2.connections.push({ id: APIAirport1.id, cost: cost });
      });
      return APIAirports;
    },
    setActiveRoute(incomingRoute: string | string[]) {
      this.activeRoute =
        incomingRoute instanceof Array
          ? incomingRoute
          : incomingRoute.split("-");
    },
    setOptionStartAirport(id: string) {
      if (this.selectedOptionEnd.value == id) {
        this.selectedOptionEnd = { value: "" };
      }
      this.selectedOptionStart = { value: id };
    },
    setOptionEndAirport(id: string) {
      if (this.selectedOptionStart.value == id) {
        this.selectedOptionStart = { value: "" };
      }
      this.selectedOptionEnd = { value: id };
    },
    removeConnection(removedConnection: Conection) {
      this.connections = this.connections.filter(
        (con) => con.ids !== removedConnection.ids
      );
    },
    addConnection(newConnection: Conection) {
      this.connections.push(newConnection);
    },
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
        this.selectedOptionEnd = { value: "" };
      }
    },
    searchType() {
      if (this.searchType == 'rapida' && this.pathsLimit > 10000) {
        this.pathsLimit = 10000;
      }
    }
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

.right-menu-container {
  max-height: 90vh;
  overflow: auto;
}
</style>
