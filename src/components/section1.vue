<template>
  <div
    class="flex flex-col items-start justify-start pt-[7.75rem] px-[7.625rem] pb-[3.75rem] gap-[2.5rem_0rem] text-left text-[3.5rem] text-black font-nunito-sans"
  >
    <div class="flex flex-col items-center justify-center">
      <div
        class="w-[53.875rem] relative tracking-[-0.01em] leading-[4.438rem] font-extrabold inline-block"
      >
        An ingenious approach to save time and money
      </div>
    </div>
    <div
      class="flex flex-row items-start justify-start gap-[0rem_2.25rem] text-[1.5rem]"
    >
      <div
        class="rounded-mini bg-whitesmoke-200 flex flex-col items-start justify-center py-[2rem] px-[1rem] gap-[0.375rem_0rem]"
      >
        <img class="w-[2.25rem] relative h-[2.25rem]" alt="" src="/pace.svg" />
        <div
          class="w-[10.75rem] relative tracking-[-0.01em] leading-[4.438rem] font-extrabold flex items-center h-[3.125rem] shrink-0"
        >
          Save Time
        </div>
        <div
          class="w-[34.25rem] relative text-[1rem] font-semibold text-darkslategray-300 inline-block"
        >
          At TenantKey, we understand the value of your time. That's why we've
          crafted a software to simplify your business operations, enabling you
          to complete tasks quickly and efficiently. Who wouldn't want that,
          after all?
        </div>
      </div>
      <div
        class="rounded-mini bg-whitesmoke-200 flex flex-col items-start justify-center py-[2rem] px-[1rem] gap-[0.375rem_0rem]"
      >
        <img class="w-[2.25rem] relative h-[2.25rem]" alt="" src="/paid.svg" />
        <div
          class="w-[12.438rem] relative tracking-[-0.01em] leading-[4.438rem] font-extrabold flex items-center h-[3.125rem] shrink-0"
        >
          Save Money
        </div>
        <div
          class="w-[34.25rem] relative text-[1rem] font-semibold text-darkslategray-300 inline-block"
        >
          At TenantKey, our primary aim is to help you save money. Utilize our
          software for finding great tenants, convenient online rent collection,
          and many more. And the best part? It's all for FREE!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section1",
  });
</script>
