<template>
  <div class="w-12 h-[47px]" :style="component1Style">
    <div
      class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray-100"
    />
    <div
      class="absolute h-[6.38%] w-[56.25%] top-[36.17%] right-[18.75%] bottom-[57.45%] left-[25%] bg-white"
      :style="lineDivStyle"
    />
    <div
      class="absolute h-[6.38%] w-[31.25%] top-[57.45%] right-[43.75%] bottom-[36.17%] left-[25%] bg-white"
      :style="lineDiv1Style"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Component",
    props: {
      component1Width: { type: [Object, Array, String, Number, Boolean] },
      component1Height: { type: [Object, Array, String, Number, Boolean] },
      component1Position: { type: String },
      component1Top: { type: [Object, Array, String, Number, Boolean] },
      component1Left: { type: [Object, Array, String, Number, Boolean] },
      lineDivHeight: { type: [Object, Array, String, Number, Boolean] },
      lineDivWidth: { type: [Object, Array, String, Number, Boolean] },
      lineDivTop: { type: [Object, Array, String, Number, Boolean] },
      lineDivRight: { type: [Object, Array, String, Number, Boolean] },
      lineDivBottom: { type: [Object, Array, String, Number, Boolean] },
      lineDivLeft: { type: [Object, Array, String, Number, Boolean] },
      lineDivHeight1: { type: [Object, Array, String, Number, Boolean] },
      lineDivWidth1: { type: [Object, Array, String, Number, Boolean] },
      lineDivTop1: { type: [Object, Array, String, Number, Boolean] },
      lineDivRight1: { type: [Object, Array, String, Number, Boolean] },
      lineDivBottom1: { type: [Object, Array, String, Number, Boolean] },
      lineDivLeft1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      component1Style() {
        return {
          width: this.component1Width,
          height: this.component1Height,
          position: this.component1Position,
          top: this.component1Top,
          left: this.component1Left,
        };
      },
      lineDivStyle() {
        return {
          height: this.lineDivHeight,
          width: this.lineDivWidth,
          top: this.lineDivTop,
          right: this.lineDivRight,
          bottom: this.lineDivBottom,
          left: this.lineDivLeft,
        };
      },
      lineDiv1Style() {
        return {
          height: this.lineDivHeight1,
          width: this.lineDivWidth1,
          top: this.lineDivTop1,
          right: this.lineDivRight1,
          bottom: this.lineDivBottom1,
          left: this.lineDivLeft1,
        };
      },
    },
  });
</script>
