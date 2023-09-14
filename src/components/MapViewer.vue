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
          :style="{ left: `${airport.x}px`, top: `${airport.y}px`, 'background-color': airportColors[airport.id]}"
          class="airport"
          :key="key"
          @mousedown="draggingAirport = airport"
        >
          {{ airport.id }}
        </div>
        <div
          class="connection-line"
          v-for="(line, key) in conectionLines"
          :key="key"
          :style="{left: `${line.x}px`, top: `${line.y}px`, width: `${line.width}px`, transform: `rotate(${line.angle}deg)`}"
        >

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
import { Airport , Conection, ConnectionLine, RegionColor, StateColor } from "@/types/types";
import { directive } from 'vue-tippy'
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
    connections: {
      required: true,
      type: Array as PropType<Conection[]>,
    },
    regionColors: {
      required: true,
      type: Array as PropType<RegionColor[]>,
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
      navigator.clipboard.writeText(JSON.stringify({airports: this.airports, connections: this.connections, regionColors: this.regionColors}));
    }
  },
  computed: {
    conectionLines(): ConnectionLine[] {
      let conectionLines = [] as ConnectionLine[];

      this.connections.forEach((con, index) => {
        const airport1 = this.airports.find((airport) => (airport.id == con.ids[0]));
        const airport2 = this.airports.find((airport) => (airport.id == con.ids[1]));
        if (!airport1 || !airport2) return;

        const x1 = airport1.x;
        const y1 = airport1.y;
        const x2 = airport2.x;
        const y2 = airport2.y;

        const distance = Math.sqrt(((x1-x2) * (x1-x2)) + ((y1-y2) * (y1-y2)));
        const xMid = (x1+x2)/2;
        const yMid = (y1+y2)/2;

        const salopeInRadian = Math.atan2((y1-y2), (x1-x2));
        const salodeInDegrees = (salopeInRadian * 180) / Math.PI;

        conectionLines.push({
          x: xMid - (distance/2),
          y: yMid,
          width: distance,
          angle: salodeInDegrees
        });
      });

      return conectionLines;
    },
    airportColors() {
      let stateColors = {} as {[key: string]: string};
      this.regionColors.forEach((region) => {
        region.ids.forEach((state) => {
          stateColors[state] = region.color;
        } )
      });

      let airportColors = {} as {[key: string]: string};
      this.airports.forEach(airport => {
        let uf = airport.id.substring(0, 2);
        airportColors[airport.id] = stateColors[uf];
      });

      return airportColors;
    }
  },
  directives: {
    tippy: directive
  }
});
</script>

<style lang="scss" scoped>
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
  z-index: 10;
}

.connection-line {
  height: 2px;
  background-color: rgba(114, 114, 114, 0.603);
  position: absolute;
  z-index: 9;

  &.active {
    background-color: rgb(61 255 12);
    box-shadow: 0px 0px 7px 1px #ffeb01;
  }
}
</style>