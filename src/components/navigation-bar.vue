<template>
  <div
    class="bg-aliceblue-100 flex flex-row items-start justify-start py-[1.5rem] px-[7.688rem] gap-[0rem_38.188rem] text-left text-[1rem] text-black font-nunito-sans"
  >
    <img
      class="w-[10.125rem] relative h-[3.063rem] overflow-hidden shrink-0 object-cover"
      alt=""
      src="/tenantkey-logo-141x43-panton01-1@2x.png"
    />
    <div class="flex flex-row items-center justify-start gap-[0rem_1rem]">
      <div class="flex flex-row items-center justify-center p-[0.625rem]">
        <div class="relative font-semibold">About Us</div>
      </div>
      <div
        class="flex flex-row items-center justify-center p-[0.625rem] gap-[0rem_0.625rem]"
      >
        <div class="relative font-semibold">Products</div>
        <img
          class="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/eparrowupbold.svg"
        />
      </div>
      <div
        class="flex flex-row items-center justify-center p-[0.625rem] gap-[0rem_0.625rem]"
      >
        <img
          class="w-[1rem] relative h-[0.669rem] overflow-hidden shrink-0"
          alt=""
          src="/usa-flag-1.svg"
        />
        <div class="relative font-semibold">English</div>
        <img
          class="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/eparrowupbold.svg"
        />
      </div>
      <Component
        component1Width="3rem"
        component1Height="2.938rem"
        component1Position="relative"
        component1Top="unset"
        component1Left="unset"
        lineDivHeight="6.38%"
        lineDivWidth="56.25%"
        lineDivTop="36.17%"
        lineDivRight="18.75%"
        lineDivBottom="57.45%"
        lineDivLeft="25%"
        lineDivHeight1="6.38%"
        lineDivWidth1="31.25%"
        lineDivTop1="57.45%"
        lineDivRight1="43.75%"
        lineDivBottom1="36.17%"
        lineDivLeft1="25%"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Component from "./component.vue";

  export default defineComponent({
    name: "NavigationBar",
    components: { Component },
  });
</script>
