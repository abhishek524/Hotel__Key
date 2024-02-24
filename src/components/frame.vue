<template>
  <div
    class="self-stretch h-[20.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0.063rem] pl-[0.125rem] box-border max-w-full text-left text-[1.5rem] text-black font-nunito-sans"
  >
    <div
      class="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.875rem_0rem] max-w-full"
    >
      <h3
        class="m-0 w-[11.375rem] h-[2.063rem] relative text-inherit font-extrabold font-inherit inline-block box-border pr-[1.25rem] mq450:text-[1.188rem]"
      >
        Global Offices
      </h3>
      <div
        class="w-[74.75rem] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[0rem_1.875rem] max-w-full text-[1rem] text-white"
      >
        <USA /><Macedonia
          rectangle18="/rectangle-18-1@2x.png"
          mecedonia="Mecedonia"
          tetove="Tetove"
          llindenskaNr335TetovoMace="Llindenska Nr. 335 Tetovo Macedonia, 1200"
          :onRectangleClick="onRectangleClick1"
        /><Australia /><Macedonia
          rectangle18="/rectangle-18-3@2x.png"
          mecedonia="Pakistan"
          tetove="Lahore"
          llindenskaNr335TetovoMace="Office #3, Ground floor ,62-C2, Gulberg III, Lahore, Pakistan."
          propPadding="1.313rem 3.063rem 1.313rem 1.625rem"
          propWidth="unset"
          mecedoniaMargin="0"
          mecedoniaBorder="unset"
          mecedoniaPadding="unset"
          mecedoniaBackgroundColor="unset"
          :onRectangleClick="onRectangleClick1"
        /><Macedonia
          rectangle18="/rectangle-18-4@2x.png"
          mecedonia="Kosovo"
          tetove="Prishtina"
          llindenskaNr335TetovoMace="Rr. Bajram Kelmendi 10/A ZC: 10000 Prishtina, Kosovo."
          propPadding="1.313rem 1.625rem"
          propWidth="12.875rem"
          mecedoniaMargin="0"
          mecedoniaBorder="unset"
          mecedoniaPadding="unset"
          mecedoniaBackgroundColor="unset"
          :onRectangleClick="onRectangleClick1"
        /><India />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import USA from "./u-s-a.vue";
  import Macedonia from "./macedonia.vue";
  import Australia from "./australia.vue";
  import India from "./india.vue";

  export default defineComponent({
    name: "Frame",
    components: { USA, Macedonia, Australia, India },
    methods: {
      onRectangleClick1() {
        /* TODO: Mecedonia
       Tetovo
       Llindenska Nr. 335 Tetovo Macedonia, 1200
    */
      },
    },
  });
</script>
