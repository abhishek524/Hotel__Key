<template>
  <div
    class="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[2.375rem] pr-[0.063rem] pl-[0.125rem] box-border max-w-full text-left text-[1rem] text-darkslategray-700 font-nunito-sans"
  >
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[4.938rem_0rem] max-w-full lg:gap-[4.938rem_0rem] mq750:gap-[4.938rem_0rem]"
    >
      <div
        class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full"
      >
        <EmailUs
          contactInfoText="/materialsymbolsalternateemail.svg"
          contactInfoLabel="Email us:"
          contactMethod="sales@hotelkeyapp.com"
        />
        <div
          class="flex-1 [background:linear-gradient(180deg,_#f3f3f3,_rgba(250,_250,_250,_0))] flex flex-col items-start justify-start py-[2.375rem] px-[4.688rem] box-border gap-[0.125rem_0rem] min-w-[19.313rem] max-w-full mq750:pl-[2.313rem] mq750:pr-[2.313rem] mq750:box-border"
        >
          <div
            class="flex flex-row items-start justify-start gap-[0rem_0.438rem]"
          >
            <img
              class="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
              loading="eager"
              alt=""
              src="/biwhatsapp.svg"
            />
            <div class="h-[1.375rem] relative font-extrabold inline-block">
              Contact Sales:
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2rem]"
          >
            <div
              class="h-[1.375rem] flex-1 flex flex-row items-start justify-start gap-[0rem_0.813rem]"
            >
              <div class="flex-1 relative font-semibold whitespace-nowrap">
                +1 972-972-9110
              </div>
              <div
                class="h-[1.375rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-black"
              />
              <div class="flex-1 relative font-semibold whitespace-nowrap">
                +1 840-177-5500
              </div>
            </div>
          </div>
        </div>
        <EmailUs
          contactInfoText="/micall.svg"
          contactInfoLabel="Contact us on"
          propPadding="2.375rem"
        />
      </div>
      <div
        class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full text-[1.5rem] text-white"
      >
        <div
          class="flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center min-w-[23.688rem] max-w-full mq450:min-w-full"
        >
          <div
            class="flex-1 flex flex-row items-center justify-start max-w-full"
          >
            <div class="h-[18.313rem] w-[36.438rem] relative max-w-full">
              <img
                class="absolute top-[0rem] left-[0rem] w-full h-full object-contain"
                loading="eager"
                alt=""
                src="/support-img@2x.png"
              />
              <div
                class="absolute top-[18.313rem] left-[36.438rem] [background:linear-gradient(90.11deg,_rgba(1,_1,_1,_0.65),_rgba(0,_0,_0,_0))] w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]"
              />
            </div>
            <div
              class="w-[13.875rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1rem_0rem] z-[2] ml-[-16.562rem]"
            >
              <h3
                class="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1.188rem]"
              >
                Are you Looking for Support
              </h3>
              <button
                class="cursor-pointer p-[0.563rem] bg-[transparent] w-[6.25rem] rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
              >
                <div
                  class="relative text-[1rem] font-nunito-sans text-white text-left"
                >
                  Connect
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center min-w-[23.688rem] max-w-full mq450:min-w-full"
        >
          <div
            class="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[2.25rem] pl-[0rem] box-border max-w-full"
          >
            <div class="h-[18.313rem] flex-1 relative shrink-0 max-w-[107%]">
              <img
                class="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div
                class="absolute top-[18.313rem] left-[36.438rem] rounded-3xs [background:linear-gradient(90.12deg,_rgba(1,_1,_1,_0.88),_rgba(0,_0,_0,_0))] w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]"
              />
            </div>
            <div
              class="w-[13.813rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1rem_0rem] z-[2] ml-[-16.062rem]"
            >
              <h3
                class="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1.188rem]"
              >
                Looking to join our team?
              </h3>
              <div
                class="w-[6.438rem] rounded-md box-border flex flex-row items-center justify-center py-[0.563rem] pr-[0.938rem] pl-[1.188rem] whitespace-nowrap text-[1rem] border-[1px] border-solid border-white"
              >
                <div class="relative">Yes, I am</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import EmailUs from "./email-us.vue";

  export default defineComponent({
    name: "GlobalOffices",
    components: { EmailUs },
  });
</script>
