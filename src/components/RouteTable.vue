<template>
  <div class="py-5">
    <!-- <DataTable class="display">
      <thead class="thead-dark">
        <tr>
          <th scope="col" style="width: 5%">Nº</th>
          <th scope="col">Rota</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(route, key) in routes" :key="key">
          <td>{{key + 1}}º</td>
          <td>
            <span v-for="(airport, key2) in route" :key="key2">
              {{airport}}
              <span v-if="key2 != route.length - 1">
                &nbsp;
                <i class="fa fa-arrow-right"></i>
                &nbsp;
              </span>
              <span v-if="key2 == route.length - 1">
                &nbsp;
                <i class="fa fa-flag-checkered"></i>
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </DataTable> -->
    <DataTable v-if="routes.length" :data="routes" class="display">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
            </tr>
        </thead>
    </DataTable>
    <empty-state v-if="!routes.length && !isLoading"/>
    <loading-state class="animate__animated animate__zoomIn" v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {AirportRoutes} from '@/types/types'
import LoadingState from './LoadingState.vue'
import EmptyState from './EmptyState.vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

export default defineComponent({
  props: ['airportRoutes', 'isLoading'],
  components: {
    LoadingState,
    EmptyState,
    DataTable
  },
  data() {
    return {
    }
  },
  computed: {
    routes(): any {
      return this.airportRoutes ?? [] as AirportRoutes
    }
  }
})
</script>

<style scoped>
@import 'datatables.net-dt';
</style>
