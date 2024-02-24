<template>
  <div
    class="w-[90rem] relative h-[23.125rem] text-left text-[1rem] text-darkslategray-700 font-nunito-sans"
  >
    <div class="absolute top-[0rem] left-[0rem] w-[90rem] h-[23.125rem]">
      <div
        class="absolute top-[0rem] left-[0rem] rounded-t-lgi rounded-b-none bg-whitesmoke-200 w-[90rem] h-[23.125rem]"
      />
      <div
        class="absolute top-[3.188rem] left-[64rem] flex flex-col items-start justify-start"
      >
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-extrabold">About Us</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">Company</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">Services</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">News & Blog</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">Careers</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">Contact Us</div>
        </div>
      </div>
      <div
        class="absolute top-[3.188rem] left-[75.438rem] flex flex-col items-start justify-start"
      >
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-extrabold">Clients</div>
        </div>
        <div
          class="flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem]"
        >
          <div class="relative font-semibold">Testimonials</div>
        </div>
      </div>
      <div
        class="absolute top-[17.594rem] left-[7.594rem] box-border w-[74.813rem] h-[0.063rem] border-t-[1px] border-solid border-darkslategray-900"
      />
    </div>
    <div
      class="absolute top-[2.75rem] left-[7.625rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-[1.25rem]"
    >
      <div class="flex flex-row items-center justify-start gap-[0rem_0.313rem]">
        <img
          class="w-[8.625rem] relative h-[2rem] overflow-hidden shrink-0"
          alt=""
          src="/logo-1.svg"
        />
        <div class="flex flex-row items-center justify-center p-[0.625rem]">
          <b class="relative">| Simple. Secure. Mobile.</b>
        </div>
      </div>
      <div class="flex flex-row items-center justify-center text-[1rem]">
        <div
          class="w-[24.438rem] relative leading-[1.5rem] font-semibold inline-block shrink-0"
        >
          <p class="m-0">©2023 HotelKey, Inc. All Rights Reserved.</p>
          <p class="m-0">
            HotelKey, the HotelKey logo, and all HotelKey product names are
            trademarks of HotelKey, Inc.
          </p>
        </div>
      </div>
      <div class="flex flex-row items-start justify-start gap-[0rem_0.938rem]">
        <img
          class="w-[5.625rem] relative h-[2.363rem] overflow-hidden shrink-0"
          alt=""
          src="/pci-dss-logo.svg"
        />
        <img
          class="w-[5.625rem] relative h-[2.363rem] overflow-hidden shrink-0"
          alt=""
          src="/ssl-logo.svg"
        />
      </div>
    </div>
    <div
      class="absolute top-[19.625rem] left-[7.625rem] flex flex-row items-start justify-start gap-[0rem_31.875rem]"
    >
      <div class="w-[23.563rem] relative h-[1.5rem]">
        <b
          class="absolute top-[0rem] left-[0rem] leading-[1.5rem] inline-block w-[24.438rem]"
          >Privacy & Policy | Terms & Conditions |
          <a
            class="text-[inherit]"
            href="https://www.hotelkeyapp.com/#/isms-policy"
            target="_blank"
          >
            <span class="[text-decoration:underline]">ISMS Policy</span>
          </a>
        </b>
      </div>
      <div
        class="flex flex-row items-center justify-start gap-[0rem_0.875rem] text-[0.875rem]"
      >
        <div class="w-[10.125rem] relative h-[1.5rem]">
          <b class="absolute top-[0rem] left-[1.188rem] leading-[1.5rem]"
            >CONNECT WITH US -</b
          >
        </div>
        <img
          class="w-[8.313rem] relative h-[0.938rem] overflow-hidden shrink-0"
          alt=""
          src="/social-media-link.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FooterSection1",
  });
</script>
