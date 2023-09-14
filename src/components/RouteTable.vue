<template>
  <div class="py-5">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="inputSearch"
        placeholder="Buscar..."
        v-model="searchValue"
      />
      <label for="inputSearch">Buscar...</label>
    </div>

    <EasyDataTable
      :headers="headers"
      :items="routes"
      :search-field="'path'"
      :search-value="searchValueDebouced"
      :rows-per-page="10"
      buttons-pagination
      alternating
    >
      <template #item-path="{ path }">
        <div class="text-nowrap">{{path}}</div>
      </template>

    </EasyDataTable>

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
    <!-- <DataTable v-if="routes.length" :data="routes" class="display">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
            </tr>
        </thead>
    </DataTable> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { AirportRoutes } from "@/types/types";
import { directive } from 'vue-tippy'
import type { Header, Item } from "vue3-easy-data-table";
import debounce from 'lodash.debounce'

const headers: Header[] = [
  { text: "Pos.", value: "pos", sortable: true },
  { text: "Distancia", value: "distance" },
  { text: "Caminho", value: "path" },
];

export default defineComponent({
  props: {
    airportRoutes: {
      required: true,
      type: Array as PropType<AirportRoutes>,
    },
  },
  data() {
    return {
      headers: headers,
      searchValue: '' as string,
      searchValueDebouced: '' as string,
      updateSearchValue: null as CallableFunction | null,
    };
  },
  computed: {
    routes(): Item[] {
      return this.airportRoutes.map((airportRoute) => {
        return airportRoute;
      });
    },
  },
  mounted() {
    this.updateSearchValue = debounce(() => {
      this.searchValueDebouced = this.searchValue
    }, 200);
  },
  directives: {
    tippy: directive
  },
  watch: {
    searchValue() {
      if (typeof this.updateSearchValue == 'function')
        this.updateSearchValue();
    }
  }
});
</script>

<style lang="scss">
.pagination__rows-per-page {
  display: none !important;
}
</style>
