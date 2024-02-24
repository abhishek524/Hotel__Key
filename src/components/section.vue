<template>
  <div
    class="flex flex-col items-start justify-start py-[3.875rem] px-[7.625rem] text-left text-[2.25rem] text-white font-nunito-sans"
  >
    <div
      class="rounded-mini bg-darkslategray-600 flex flex-row items-center justify-start py-[3.875rem] px-[3.625rem] gap-[0rem_7.813rem]"
    >
      <div class="flex flex-col items-start justify-start">
        <div class="relative font-extrabold">
          We would love to hear from YOU!
        </div>
        <div
          class="w-[41.938rem] relative text-[1.5rem] font-semibold text-gray-1200 inline-block"
        >
          Your opportunity to a seamless property management awaits.
        </div>
        <b class="relative text-[1.25rem] text-goldenrod"
          >Contact us to begin your journey today.</b
        >
      </div>
      <div
        class="flex flex-col items-start justify-start gap-[0.875rem_0rem] text-[1rem] text-lightslategray"
      >
        <div
          class="rounded-md bg-aliceblue-300 flex flex-row items-center justify-center py-[0.75rem] pr-[9.5rem] pl-[0.875rem] border-[1px] border-solid border-gainsboro-500"
        >
          <div class="relative font-semibold">Enter your email</div>
        </div>
        <div
          class="flex flex-row items-start justify-start gap-[0rem_0.875rem] text-white"
        >
          <div
            class="rounded-md bg-lightseagreen-200 flex flex-row items-center justify-center py-[0.75rem] px-[1.25rem]"
          >
            <div class="relative font-extrabold">Get Started</div>
          </div>
          <div
            class="rounded-md flex flex-row items-center justify-center py-[0.688rem] px-[0.75rem] gap-[0rem_0.375rem] text-lightseagreen-200 border-[1px] border-solid border-lightseagreen-200"
          >
            <img
              class="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src="/play-arrow.svg"
            />
            <div class="relative font-extrabold">View Demo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section",
  });
</script>
