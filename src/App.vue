<template>

  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">

      </div>
      <div class="col-12 col-md-6">
        <div class="d-flex justify-content-between gap-2">
          <div class="mb-3 w-100">
            <label for="inputPartida" class="form-label">Partida</label>
            <ModelSelect :options="aeroportoOptionsPartida" class="w-100" v-model="selectedOptionPartida"/>
          </div>
          <div class="mb-3 w-100">
            <label for="inputPartida" class="form-label">Destino</label>
            <ModelSelect :options="aeroportoOptionsDestino" class="w-100" v-model="selectedOptionDestino"/>
          </div>
        </div>

        <button :disabled="!podeMontarRota" class="btn btn-primary w-100">Montar Rota</button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ModelSelect} from 'vue-search-select';
import "vue-search-select/dist/VueSearchSelect.css"
import aeroportos from './assets/aeroportos.json';
import {AeroportoOption} from './assets/types'


export default defineComponent({
  name: 'App',
  components: {
    ModelSelect
  },
  data() {
    return {
      aeroportoOptionsPartida: [] as AeroportoOption[],
      aeroportos,
      selectedOptionPartida: {value: '', text: '', disabled: false} as AeroportoOption,
      selectedOptionDestino: {value: '', text: '', disabled: false} as AeroportoOption,
    }
  },
  mounted() {
    this.loadAeroportoOptions()
  },
  methods: {
    loadAeroportoOptions() {
      const aeroportoOptions : AeroportoOption[] = [];
      for (const id in this.aeroportos) {
        if (Object.prototype.hasOwnProperty.call(aeroportos, id)) {
          aeroportoOptions.push({value: id, text: id, disabled: false})
        }
      }
      this.aeroportoOptionsPartida = aeroportoOptions;
    }
  },
  computed: {
    aeroportoOptionsDestino(): AeroportoOption[] {
      return this.aeroportoOptionsPartida.filter((option: AeroportoOption ) => this.selectedOptionPartida.value != option.value)
    },
    podeMontarRota(): boolean {
      return (this.selectedOptionDestino.value != '' && this.selectedOptionPartida.value != '')
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
  .item.selected {
    background-color: #411091;
    color: #fff;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: rgb(201, 201, 201);
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
