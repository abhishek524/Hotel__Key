<template>
  <div
    class="absolute top-[122.063rem] left-[0rem] w-[24.563rem] flex flex-col items-start justify-start py-[0rem] px-[1.25rem] box-border gap-[0.875rem_0rem] text-left text-[1.5rem] text-black font-nunito-sans"
  >
    <div class="relative font-extrabold">Global Offices</div>
    <div
      class="w-[23.313rem] relative h-[17.813rem] overflow-x-auto shrink-0 text-[1rem] text-white"
    >
      <div
        class="absolute top-[calc(50%_-_142.5px)] left-[0rem] w-[85.938rem] flex flex-row items-start justify-start gap-[0rem_1.5rem]"
      >
        <Property1Group1
          imageDimensions="/rectangle-18@2x.png"
          propLeft="unset"
          propWidth="12.875rem"
          propPosition="relative"
          propTop="unset"
          propHeight="17.813rem"
          propBackground="linear-gradient(-0.56deg, #000, rgba(255, 255, 255, 0))"
          propWidth1="unset"
          propTop1="77.19%"
          propLeft1="12.62%"
          propFontSize="2rem"
          propTop2="16.813rem"
          propOpacity="0"
          propLeft2="1.625rem"
          propFontSize1="1rem"
          propWidth2="17.188rem"
          propTop3="21.688rem"
          propOpacity1="0"
          propLeft3="1.625rem"
          propFontSize2="1rem"
          propWidth3="17.188rem"
        /><IndiaMobile1 /><KosovoMobile1
          locationCode="/rectangle-18-4@2x.png"
          countryName="Kosovo"
          cityName="Prishtina"
          addressDetails="Rr. Bajram Kelmendi 10/A ZC: 10000 Prishtina, Kosovo"
        /><KosovoMobile1
          locationCode="/rectangle-18-3@2x.png"
          countryName="Pakistan"
          cityName="Lahore"
          addressDetails="Office #3, Ground floor ,62-C2, Gulberg III, Lahore, Pakistan"
        /><KosovoMobile1
          locationCode="/rectangle-18-2@2x.png"
          countryName="Australia"
          cityName="Melbourne"
          addressDetails="41 Apex Street , Dandenong North Vic 3175"
        /><KosovoMobile1
          locationCode="/rectangle-18-1@2x.png"
          countryName="Mecedonia"
          cityName="Tetove"
          addressDetails="Llindenska Nr. 335 Tetovo Macedonia, 1200"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Property1Group1 from "./property1-group1.vue";
  import IndiaMobile1 from "./india-mobile1.vue";
  import KosovoMobile1 from "./kosovo-mobile1.vue";

  export default defineComponent({
    name: "GlobalOfficeDetails1",
    components: { Property1Group1, IndiaMobile1, KosovoMobile1 },
  });
</script>
