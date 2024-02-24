<template>
  <div
    class="w-full relative bg-white h-[594.75rem] text-left text-[3.5rem] text-black font-nunito-sans"
  >
    <div
      class="absolute top-[0rem] left-[0rem] w-[90rem] h-[594.75rem] flex flex-col items-start justify-start"
    >
      <NavigationBar /><HeroSection /><Section5 /><Section4 /><Section3 /><Section2 />
      <div class="w-[90rem] relative h-[44.25rem]">
        <div
          class="absolute top-[0rem] left-[0rem] bg-cornsilk flex flex-row items-center justify-start py-[2.625rem] pr-[0rem] pl-[7.563rem] gap-[0rem_4.813rem]"
        >
          <div
            class="h-[21.756rem] flex flex-col items-start justify-center gap-[0.813rem_0rem]"
          >
            <div
              class="w-[31.438rem] relative tracking-[-0.01em] leading-[4.438rem] font-extrabold inline-block"
            >
              Manage Property Fast and Easy
            </div>
            <div
              class="w-[31.438rem] relative text-[1.25rem] leading-[152%] font-semibold text-darkslategray-300 inline-block"
            >
              TenantKey facilitates business owners with remote operation and
              data retrieval through mobile. We empower landlords and real
              estate experts to optimize both residential and commercial
              properties. Committed to exceptional customer service, we
              continuously work through innovative features based on user
              feedback to enhance our platform.
            </div>
          </div>
          <img
            class="w-[46.188rem] relative rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini h-[39rem] object-cover"
            alt=""
            src="/rectangle-3404@2x.png"
          />
        </div>
      </div>
      <Section1 />
      <section />
      <FooterSection1 />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import NavigationBar from "../components/navigation-bar.vue";
  import HeroSection from "../components/hero-section.vue";
  import Section5 from "../components/section5.vue";
  import Section4 from "../components/section4.vue";
  import Section3 from "../components/section3.vue";
  import Section2 from "../components/section2.vue";
  import Section1 from "../components/section1.vue";
  import Section from "../components/section.vue";
  import FooterSection1 from "../components/footer-section1.vue";

  export default defineComponent({
    name: "TenantkeyLandingPage",
    components: {
      NavigationBar,
      HeroSection,
      Section5,
      Section4,
      Section3,
      Section2,
      Section1,
      Section,
      FooterSection1,
    },
  });
</script>
