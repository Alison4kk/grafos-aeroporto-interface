<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-7">
        <map-viewer
          class="animate__animated animate__fadeIn animate__delay-1s"
          :airports="airports"
          :connections="connections"
          :regionColors="regionColors"
        />
      </div>
      <div class="col-12 col-lg-5">
        <div class="h-100 shadow-lg p-4 animate__animated animate__zoomInDown">
          <div class="d-flex justify-content-between gap-2">
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

          <loading-state class="mt-5 animate__animated animate__zoomIn animate__faster" v-if="isLoadingRoutes"/>
          <empty-state class="mt-4" v-if="!airportRoutes.length && !isLoadingRoutes"/>
          <RouteTable
            :airportRoutes="airportRoutes"
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
      selectedOptionStart: { value: "", text: "" } as AirportOption,
      selectedOptionEnd: { value: "", text: "" } as AirportOption,
      airportRoutes: [] as AirportRoutes,
      isLoadingRoutes: false,
    };
  },
  mounted() {
    this.loadAirportOptions();
  },
  methods: {
    loadAirportOptions() {
      this.airportOptionsStart = this.airports.map((airport) => {
        return { value: airport.id, text: airport.id };
      });
    },
    pickRoutes() {
      this.isLoadingRoutes = true;
      this.airportRoutes = [];
      setTimeout(() => {
        fetch("api/routes.json")
          .then((response) => response.json())
          .then((routes: AirportRoutes) => {
            this.airportRoutes = routes;
            this.isLoadingRoutes = false;
          });
      }, 20);
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
        this.selectedOptionEnd = { value: "", text: "" };
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
