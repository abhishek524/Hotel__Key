<template>
  <div
    class="self-stretch flex flex-row items-end justify-start py-[1.313rem] pr-[2.5rem] pl-[1.625rem] relative text-left text-[2rem] text-white font-nunito-sans"
  >
    <div
      class="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]"
    >
      <img
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src="/rectangle-18-2@2x.png"
      />
      <div
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(255,_255,_255,_0))] cursor-pointer z-[1]"
        :onClick="onRectangleClick"
      />
    </div>
    <h1
      class="m-0 relative text-inherit font-extrabold font-inherit z-[2] mq1050:text-[1.625rem] mq450:text-[1.188rem]"
    >
      Australia
    </h1>
    <div
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-8rem] text-[1rem] font-semibold text-gray-1500 inline-block opacity-[0]"
    >
      <p class="m-0">Melbourne</p>
      <p class="m-0">T41 Apex Street , Dandenong North Vic 3175.</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Australia",
    methods: {
      onRectangleClick() {
        /* TODO: Australia
       Melbourne
       41 Apex Street , Dandenong North Vic 3175.
    */
      },
    },
  });
</script>
