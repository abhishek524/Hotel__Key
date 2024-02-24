<template>
  <div
    class="self-stretch rounded-t-lgi rounded-b-none bg-whitesmoke-100 flex flex-col items-center justify-start pt-[2.75rem] px-[2rem] pb-[2rem] box-border gap-[2.75rem] max-w-full text-left text-[1.25rem] text-darkslategray-700 font-nunito-sans mq750:gap-[2.75rem] mq450:pt-[1.813rem] mq450:pb-[1.313rem] mq450:box-border"
  >
    <footer
      class="w-[90rem] h-[23.125rem] relative rounded-t-lgi rounded-b-none bg-whitesmoke-100 hidden max-w-full"
      :style="rectangleFooterStyle"
    />
    <div
      class="w-[74.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full"
    >
      <div
        class="flex-1 flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq750:flex-wrap"
      >
        <div
          class="w-[24.438rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border max-w-full"
        >
          <CompanyInfo />
        </div>
        <div
          class="w-[17rem] flex flex-row items-start justify-start gap-[0rem_5.563rem] text-[1rem] mq450:gap-[0rem_5.563rem]"
        >
          <div
            class="flex flex-col items-start justify-start gap-[0.625rem_0rem]"
          >
            <div
              class="h-[1.375rem] relative font-extrabold inline-block z-[1]"
            >
              About Us
            </div>
            <div class="relative font-semibold z-[1]">Company</div>
            <div class="relative font-semibold z-[1]">Services</div>
            <div class="relative font-semibold whitespace-nowrap z-[1]">
              News & Blog
            </div>
            <div class="relative font-semibold z-[1]">Careers</div>
            <div class="relative font-semibold z-[1]">Contact Us</div>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[0.625rem_0rem]"
          >
            <div class="relative font-extrabold z-[1]">Clients</div>
            <div class="relative font-semibold whitespace-nowrap z-[1]">
              Testimonials
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[74.75rem] flex flex-col items-start justify-start gap-[2rem_0rem] shrink-0 max-w-full text-[1rem] mq750:gap-[2rem_0rem]"
    >
      <div
        class="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-900"
      />
      <div
        class="self-stretch flex flex-row items-start justify-between shrink-0 gap-[1.25rem] max-w-full mq750:flex-wrap"
      >
        <div
          class="w-[24.438rem] relative leading-[1.5rem] font-semibold inline-block shrink-0 max-w-full z-[2]"
        >
          Privacy & Policy | Terms & Conditions |
          <a
            class="text-[inherit]"
            href="https://www.hotelkeyapp.com/#/isms-policy"
            target="_blank"
          >
            <span class="[text-decoration:underline]">ISMS Policy</span>
          </a>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-[0rem_0.813rem] text-[0.875rem]"
        >
          <b class="relative leading-[1.5rem] z-[2]">CONNECT WITH US -</b>
          <img
            class="h-[0.938rem] w-[8.313rem] relative overflow-hidden shrink-0 z-[2]"
            loading="eager"
            alt=""
            src="/social-media-link.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import CompanyInfo from "./company-info.vue";

  export default defineComponent({
    name: "FooterBg",
    components: { CompanyInfo },
    props: {
      rectangleDivBackgroundColor: { type: String },
    },
    computed: {
      rectangleFooterStyle() {
        return {
          backgroundColor: this.rectangleDivBackgroundColor,
        };
      },
    },
  });
</script>
