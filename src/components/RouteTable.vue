<template>
  <div class="py-2">
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
        <div @mouseover="$emit('activeRouteSelect', path)" @mouseleave="$emit('activeRouteSelect', [])" class="route-item">{{path}}</div>
      </template>

    </EasyDataTable>
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
    }
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

.route-item {
  white-space: nowrap;
  padding: 4px 10px;
  border-radius: 10px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  background-color: rgb(187, 219, 255);

  &:hover {
    background-color: rgb(142, 187, 238);
  }
}
</style>
