<template>
  <div
    class="w-full relative overflow-hidden flex flex-col items-center justify-start pt-[1.875rem] px-[1.25rem] pb-[26.938rem] box-border gap-[1rem_0rem] tracking-[normal] text-left text-[1rem] text-black font-nunito-sans"
  >
    <div
      class="w-[74.688rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full"
    >
      <img
        class="h-[2rem] w-[8.625rem] relative overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src="/hotelkey-logo11.svg"
      />
      <div
        class="w-[25.688rem] flex flex-row items-center justify-start gap-[0rem_1.438rem] max-w-full"
      >
        <div class="relative font-semibold whitespace-nowrap">About Us</div>
        <div
          class="flex-[0.8922] flex flex-row items-center justify-start p-[0.625rem] gap-[0rem_0.625rem] cursor-pointer"
          @click="onProductButtonContainerClick"
        >
          <div class="relative font-semibold">Products</div>
          <img
            class="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/eparrowupbold.svg"
          />
        </div>
        <div
          class="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[0.563rem] pl-[0rem] gap-[0rem_0.594rem]"
        >
          <div
            class="h-[0.813rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem] box-border"
          >
            <img
              class="w-[1rem] h-[0.669rem] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/usa-flag-1.svg"
            />
          </div>
          <div class="relative font-semibold">English</div>
          <img
            class="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 object-contain"
            loading="eager"
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
    <ProductDetails />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Component from "./component.vue";
  import ProductDetails from "./product-details.vue";

  export default defineComponent({
    name: "ProductMenu",
    components: { Component, ProductDetails },
    methods: {
      onProductButtonContainerClick() {
        this.$router.push("/");
      },
    },
  });
</script>
