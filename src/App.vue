<template>

  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <map-viewer :airports="airports" />
      </div>
      <div class="col-12 col-md-6">
        <div class="shadow-lg p-4">
          <div class="d-flex justify-content-between gap-2">
            <div class="mb-3 w-100">
              <label for="inputStart" class="form-label">Partida</label>
              <ModelSelect :options="airportOptionsStart" class="w-100" v-model="selectedOptionStart"/>
            </div>
            <div class="mb-3 w-100">
              <label for="inputStart" class="form-label">Destino</label>
              <ModelSelect :options="airportOptionsEnd" class="w-100" v-model="selectedOptionEnd"/>
            </div>
          </div>
          <button :disabled="!canpickRoutes" @click="pickRoutes" class="btn btn-primary w-100">Montar Rota</button>

          <RouteTable :airportRoutes="airportRoutes" :isLoading="isLoadingRoutes" />
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ModelSelect} from 'vue-search-select';
import "vue-search-select/dist/VueSearchSelect.css"
import airports from '@/assets/airports.json';
import {Airport, AirportOption, AirportRoutes} from '@/types/types'
import RouteTable from './components/RouteTable.vue';
import MapViewer from './components/MapViewer.vue';



export default defineComponent({
  name: 'App',
  components: {
    ModelSelect, RouteTable,
    MapViewer
  },
  data() {
    return {
      airportOptionsStart: [] as AirportOption[],
      airports: airports as Airport[],
      selectedOptionStart: {value: '', text: ''} as AirportOption,
      selectedOptionEnd: {value: '', text: ''} as AirportOption,
      airportRoutes: [] as AirportRoutes,
      isLoadingRoutes: false
    }
  },
  mounted() {
    this.loadAirportOptions()
  },
  methods: {
    loadAirportOptions() {
      this.airportOptionsStart = airports.map((airport) => {
        return {value: airport.id, text: airport.id}
      });
    },
    pickRoutes() {
      this.isLoadingRoutes = true;
      this.airportRoutes = [];
      setTimeout(() => {
        fetch('/api/routes.json')
          .then((response) => response.json())
          .then((routes: AirportRoutes) => {
            this.airportRoutes = routes;
            this.isLoadingRoutes = false;
          });
      }, 2000)

    }
  },
  computed: {
    airportOptionsEnd(): AirportOption[] {
      return this.airportOptionsStart.filter((option: AirportOption ) => this.selectedOptionStart.value != option.value)
    },
    canpickRoutes(): boolean {
      return (this.selectedOptionEnd.value != '' && this.selectedOptionStart.value != '')
    }
  },
  watch: {
    selectedOptionStart() {
      if (this.selectedOptionStart.value == this.selectedOptionEnd.value) {
        this.selectedOptionEnd = {value: '', text: ''}
      }
    }
  }
});
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.min.css';


html, body {
  margin: 0;
}

.ui.selection.dropdown {
  :hover {
    cursor: pointer !important;;
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
