<template>
  <div
    class="self-stretch flex flex-col items-center justify-start pt-[7.75rem] px-[20.688rem] pb-[5rem] gap-[3.375rem_0rem] text-center text-[3.5rem] text-black font-nunito-sans"
  >
    <div class="flex flex-col items-center justify-center gap-[0.813rem_0rem]">
      <div
        class="w-[48.625rem] relative tracking-[-0.01em] leading-[4.438rem] font-extrabold inline-block"
      >
        Deploying Tailored Solutions with TenantKey
      </div>
      <div
        class="w-[48.438rem] relative text-[1.5rem] font-semibold text-darkslategray-300 inline-block"
      >
        Utilise our software to efficiently organise and categorise properties
        across multiple segments. 
      </div>
    </div>
    <div
      class="flex flex-row items-end justify-start gap-[0rem_3.125rem] text-[1.5rem] text-darkslategray-300"
    >
      <div class="flex flex-col items-center justify-start gap-[1rem_0rem]">
        <div
          class="rounded-mini bg-aliceblue-100 flex flex-col items-start justify-start p-[1.5rem] border-[1px] border-solid border-lightseagreen-100"
        >
          <img
            class="w-[2.175rem] relative h-[1.981rem]"
            alt=""
            src="/cottage.svg"
          />
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="relative font-extrabold">Residential Properties</div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start gap-[1.125rem_0rem]">
        <div
          class="rounded-mini bg-aliceblue-100 flex flex-col items-start justify-start p-[1.5rem] border-[1px] border-solid border-lightseagreen-100"
        >
          <img
            class="w-[1.981rem] relative h-[1.781rem]"
            alt=""
            src="/corporate-fare.svg"
          />
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="relative font-extrabold">Commercial Properties</div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start gap-[1.125rem_0rem]">
        <div
          class="rounded-mini bg-aliceblue-100 flex flex-col items-start justify-start p-[1.5rem] border-[1px] border-solid border-lightseagreen-100"
        >
          <img
            class="w-[2.175rem] relative h-[1.781rem]"
            alt=""
            src="/moving-ministry.svg"
          />
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="relative font-extrabold">Student Housing</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section5",
  });
</script>
