<template>
  <div
    class="self-stretch flex flex-row items-end justify-end py-[1.313rem] pr-[1.125rem] pl-[1.625rem] relative text-left text-[2rem] text-white font-nunito-sans"
    :style="macedoniaStyle"
  >
    <div
      class="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]"
    >
      <img
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        :src="rectangle18"
      />
      <div
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(255,_255,_255,_0))] cursor-pointer z-[1]"
        @click="onRectangleClick"
      />
    </div>
    <h1
      class="m-0 relative text-inherit font-extrabold font-inherit z-[2] mq1050:text-[1.625rem] mq450:text-[1.188rem]"
      :style="mecedoniaStyle"
    >
      {{mecedonia}}
    </h1>
    <div
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-8rem] text-[1rem] font-semibold text-gray-1500 inline-block opacity-[0]"
    >
      <p class="m-0">{{tetove}}</p>
      <p class="m-0">{{llindenskaNr335TetovoMace}}</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Macedonia",
    props: {
      rectangle18: { type: String },
      mecedonia: { type: String },
      tetove: { type: String },
      llindenskaNr335TetovoMace: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      mecedoniaMargin: { type: [Object, Array, String, Number, Boolean] },
      mecedoniaBorder: { type: String },
      mecedoniaPadding: { type: [Object, Array, String, Number, Boolean] },
      mecedoniaBackgroundColor: { type: String },
      onRectangleClick: { type: Function },
    },
    computed: {
      macedoniaStyle() {
        return {
          padding: this.propPadding,
          width: this.propWidth,
        };
      },
      mecedoniaStyle() {
        return {
          margin: this.mecedoniaMargin,
          border: this.mecedoniaBorder,
          padding: this.mecedoniaPadding,
          backgroundColor: this.mecedoniaBackgroundColor,
        };
      },
    },
  });
</script>
