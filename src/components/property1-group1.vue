<template>
  <div
    class="absolute top-[20px] left-[265px] w-[353px] h-[285px] text-left text-base text-white font-nunito-sans"
    :style="property1Group7Style"
  >
    <img
      class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      :src="imageDimensions"
    />
    <div
      class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(70,_70,_70,_0))]"
      :style="rectangleDivStyle"
    />
    <div
      class="absolute w-[24.36%] top-[6.67%] left-[5.95%] text-13xl font-extrabold inline-block"
      :style="uSAStyle"
    >
      USA
    </div>
    <div
      class="absolute top-[99px] left-[26px] inline-block w-[275px]"
      :style="dallas4100MidwayContainerStyle"
    >
      <p class="m-0 font-extrabold">Dallas</p>
      <p class="m-0 font-semibold text-gray-1400">
        4100 Midway Road, #1130 Carrollton TX 75007
      </p>
    </div>
    <div
      class="absolute top-[187px] left-[26px] inline-block w-[275px]"
      :style="portland8800SEContainerStyle"
    >
      <p class="m-0 font-black">Portland</p>
      <p class="m-0 font-semibold text-gray-1500">
        8800 SE Sunnyside Rd. Suite 101N Clackamas, OR. 97015
      </p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Group1",
    props: {
      imageDimensions: { type: String },
      propLeft: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propPosition: { type: String },
      propTop: { type: [Object, Array, String, Number, Boolean] },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propBackground: { type: String },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      propTop1: { type: [Object, Array, String, Number, Boolean] },
      propLeft1: { type: [Object, Array, String, Number, Boolean] },
      propFontSize: { type: String },
      propTop2: { type: [Object, Array, String, Number, Boolean] },
      propOpacity: { type: String },
      propLeft2: { type: [Object, Array, String, Number, Boolean] },
      propFontSize1: { type: String },
      propWidth2: { type: [Object, Array, String, Number, Boolean] },
      propTop3: { type: [Object, Array, String, Number, Boolean] },
      propOpacity1: { type: String },
      propLeft3: { type: [Object, Array, String, Number, Boolean] },
      propFontSize2: { type: String },
      propWidth3: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      property1Group7Style() {
        return {
          left: this.propLeft,
          width: this.propWidth,
          position: this.propPosition,
          top: this.propTop,
          height: this.propHeight,
        };
      },
      rectangleDivStyle() {
        return {
          background: this.propBackground,
        };
      },
      uSAStyle() {
        return {
          width: this.propWidth1,
          top: this.propTop1,
          left: this.propLeft1,
          fontSize: this.propFontSize,
        };
      },
      dallas4100MidwayContainerStyle() {
        return {
          top: this.propTop2,
          opacity: this.propOpacity,
          left: this.propLeft2,
          fontSize: this.propFontSize1,
          width: this.propWidth2,
        };
      },
      portland8800SEContainerStyle() {
        return {
          top: this.propTop3,
          opacity: this.propOpacity1,
          left: this.propLeft3,
          fontSize: this.propFontSize2,
          width: this.propWidth3,
        };
      },
    },
  });
</script>
