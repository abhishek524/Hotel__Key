<template>
  <div
    class="self-stretch w-[12.875rem] shrink-0 flex flex-row items-end justify-start py-[1.313rem] px-[1.625rem] box-border relative text-left text-[1rem] text-white font-nunito-sans"
  >
    <div
      class="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]"
    >
      <img
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src="/rectangle-18@2x.png"
      />
      <div
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(255,_255,_255,_0))] cursor-pointer z-[1]"
        :onClick="onRectangleClick"
      />
    </div>
    <h1
      class="m-0 relative text-[2rem] font-extrabold font-inherit z-[2] mq1050:text-[1.625rem] mq450:text-[1.188rem]"
    >
      USA
    </h1>
    <div
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-3.125rem] inline-block opacity-[0] z-[2]"
    >
      <p class="m-0 font-extrabold">Dallas</p>
      <p class="m-0 font-semibold text-gray-1400">
        4100 Midway Road, #1130 Carrollton TX 75007
      </p>
    </div>
    <div
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-8rem] inline-block opacity-[0]"
    >
      <p class="m-0 font-black">Portland</p>
      <p class="m-0 font-semibold text-gray-1500">
        8800 SE Sunnyside Rd. Suite 101N Clackamas, OR. 97015
      </p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "USA",
    methods: {
      onRectangleClick() {
        /* TODO: USA
       Dallas
       4100 Midway Road, #1130 Carrollton TX 75007
       Portland
       8800 SE Sunnyside Rd. Suite 101N Clackamas, OR. 97015
    */
      },
    },
  });
</script>
