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
        src="/rectangle-18-5@2x.png"
      />
      <div
        class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(-0.56deg,_#000,_rgba(255,_255,_255,_0))] cursor-pointer z-[1]"
        :onClick="onRectangleClick"
      />
    </div>
    <h1
      class="m-0 h-[2.75rem] w-[4.688rem] relative text-[2rem] font-extrabold font-inherit inline-block z-[2] mq1050:text-[1.625rem] mq450:text-[1.188rem]"
    >
      India
    </h1>
    <b
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-3.125rem] inline-block opacity-[0] z-[2]"
    >
      <p class="m-0">Banglore</p>
      <p class="m-0">315, 6th Main,Hal 2nd STG, Indira Nagar, Bangalore.</p>
    </b>
    <div
      class="h-[4.125rem] w-[17.188rem] absolute !m-[0] right-[-5.937rem] bottom-[-8rem] font-semibold text-gray-1500 inline-block opacity-[0]"
    >
      <p class="m-0">Nagpur</p>
      <p class="m-0">Techfinity Tower IT Park Gayatri Nagar, Nagpur.</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "India",
    methods: {
      onRectangleClick() {
        /* TODO: India
       Banglore
       315, 6th Main,Hal 2nd STG, Indira Nagar, Bangalore.
       Nagpur
       Techfinity Tower IT Park Gayatri Nagar, Nagpur.
    */
      },
    },
  });
</script>
