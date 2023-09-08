<template>
  <div>
    <div class="d-flex align-items-center justify-content-center">
      <div
        ref="map-container"
        id="map-container"
        @mouseup="draggingAirport = null"
        @mousemove="moveDraggingAirport"
      >
        <img
          ref="map-image"
          id="map-image"
          src="@/assets/img/mapa-brasil.svg"
          width="600"
          height="600"
          alt=""
        />
        <div
          v-for="(airport, key) in airports"
          :style="{ left: `${airport.x}px`, top: `${airport.y}px` }"
          class="airport"
          :key="key"
          v-tippy="airport.id"
          @mousedown="draggingAirport = airport"
        >
          {{ airport.id }}
        </div>
      </div>
    </div>
    <button class="btn btn-outline-dark" @click="copyAirportsJSON">
      Copy JSON
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Airport, AirportOption, AirportRoutes } from "@/types/types";
import { Tippy, directive } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

export default defineComponent({
  data() {
    return {
      draggingAirport: null as Airport | null,
    };
  },
  props: {
    airports: {
      required: true,
      type: Array as PropType<Airport[]>,
    },
  },
  methods: {
    moveDraggingAirport(event: MouseEvent) {
      if (
        !this.draggingAirport ||
        !(this.$refs["map-container"] instanceof HTMLElement)
      )
        return;
      this.draggingAirport.x =
        event.clientX - this.$refs["map-container"].offsetLeft;
      this.draggingAirport.y =
        event.clientY - this.$refs["map-container"].offsetTop;
    },
    copyAirportsJSON() {
      navigator.clipboard.writeText(JSON.stringify(this.airports));
      alert("Copied!");
    },
  },
  directives: {
    tippy: directive
  }
});
</script>

<style scoped>
#map-container {
  position: relative;
}

#map-image {
  user-select: none;
  pointer-events: none;
}

.airport {
  position: absolute;
  background-color: rgb(253, 158, 158);
  border-radius: 3px;
  transform: translate(-50%, -50%);
  font-size: 10px;
  line-height: 14px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 0px 3px;
  cursor: pointer;
  user-select: none;
}
</style>