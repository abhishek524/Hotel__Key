<template>
  <div
    class="w-[22.875rem] [background:linear-gradient(180deg,_#f3f3f3,_rgba(250,_250,_250,_0))] flex flex-col items-center justify-start p-[2.375rem] box-border gap-[0.125rem_0rem] max-w-full text-left text-[1rem] text-darkslategray-700 font-nunito-sans"
    :style="emailUsStyle"
  >
    <div class="w-[12.875rem] flex flex-row items-start justify-start">
      <div class="flex flex-row items-start justify-start gap-[0rem_0.375rem]">
        <img
          class="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="eager"
          alt=""
          :src="contactInfoText"
        />
        <div class="h-[1.375rem] relative font-extrabold inline-block">
          {{contactInfoLabel}}
        </div>
      </div>
    </div>
    <div
      class="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.875rem]"
    >
      <div class="relative font-semibold whitespace-nowrap">
        {{contactMethod}}
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EmailUs",
    props: {
      contactInfoText: { type: String },
      contactInfoLabel: { type: String },
      contactMethod: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      emailUsStyle() {
        return {
          padding: this.propPadding,
        };
      },
    },
  });
</script>
