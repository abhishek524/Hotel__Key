<template>
  <div
    class="w-[12.875rem] relative h-[17.813rem] text-left text-[2rem] text-white font-nunito-sans"
  >
    <img
      class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      :src="locationCode"
    />
    <div
      class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(255,_255,_255,_0))]"
    />
    <div class="absolute top-[77.19%] left-[12.62%] font-extrabold">
      {{countryName}}
    </div>
    <div
      class="absolute top-[21.688rem] left-[1.625rem] text-[1rem] font-semibold text-gray-1500 inline-block w-[17.188rem] opacity-[0]"
    >
      <p class="m-0">{{cityName}}</p>
      <p class="m-0">{{addressDetails}}</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "KosovoMobile1",
    props: {
      locationCode: { type: String },
      countryName: { type: String },
      cityName: { type: String },
      addressDetails: { type: String },
    },
  });
</script>
