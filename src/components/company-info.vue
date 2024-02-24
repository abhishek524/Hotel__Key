<template>
  <div
    class="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem] z-[2] text-left text-[1.25rem] text-darkslategray-700 font-nunito-sans"
  >
    <div
      class="self-stretch flex flex-row items-center justify-start gap-[0rem_0.313rem] mq450:flex-wrap"
    >
      <img
        class="h-[2rem] w-[8.625rem] relative overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src="/logo-1.svg"
      />
      <div
        class="flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem]"
      >
        <b class="relative mq450:text-[1rem]">| Simple. Secure. Mobile.</b>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center text-[1rem]">
      <div class="relative leading-[1.5rem] font-semibold">
        <p class="m-0">©2023 HotelKey, Inc. All Rights Reserved.</p>
        <p class="m-0">
          HotelKey, the HotelKey logo, and all HotelKey product names are
          trademarks of HotelKey, Inc.
        </p>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start gap-[0rem_0.938rem]">
      <img
        class="self-stretch w-[5.625rem] relative max-h-full overflow-hidden shrink-0 min-h-[2.375rem]"
        loading="eager"
        alt=""
        src="/pci-dss-logo.svg"
      />
      <img
        class="self-stretch w-[5.625rem] relative max-h-full overflow-hidden shrink-0 min-h-[2.375rem]"
        loading="eager"
        alt=""
        src="/ssl-logo.svg"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CompanyInfo",
  });
</script>
