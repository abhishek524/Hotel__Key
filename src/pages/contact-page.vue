<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[1.875rem] px-[0rem] pb-[0rem] box-border gap-[5.625rem_0rem] tracking-[normal] mq750:gap-[5.625rem_0rem] mq450:gap-[5.625rem_0rem]"
  >
    <ContactFrame />
    <main
      class="w-[75.063rem] flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border max-w-full"
    >
      <section
        class="flex-1 flex flex-col items-center justify-start gap-[2.688rem_0rem] max-w-full text-left text-[3rem] text-black font-nunito-sans mq750:gap-[2.688rem_0rem]"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start pt-[6.813rem] px-[5rem] pb-[6.875rem] box-border relative gap-[0.813rem_0rem] max-w-full mq1050:pl-[2.5rem] mq1050:pr-[2.5rem] mq1050:box-border mq450:pt-[4.438rem] mq450:pb-[4.438rem] mq450:box-border"
        >
          <img
            class="w-full h-full absolute !m-[0] top-[0rem] right-[-0.031rem] bottom-[0rem] left-[0.038rem] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/background-img.svg"
          />
          <img
            class="w-[24.375rem] h-[29.938rem] absolute !m-[0] top-[-6.375rem] right-[0.031rem] object-contain z-[1]"
            loading="eager"
            alt=""
            src="/image@2x.png"
          />
          <h1
            class="m-0 h-[7rem] relative text-inherit tracking-[-0.01em] leading-[3.5rem] font-extrabold font-inherit inline-block max-w-full z-[1] mq1050:text-[2.375rem] mq1050:leading-[2.813rem] mq450:text-[1.813rem] mq450:leading-[2.125rem]"
          >
            <p class="m-0">New to HotelKey?</p>
            <p class="m-0">Connect with our sales team.</p>
          </h1>
          <h3
            class="m-0 h-[2.063rem] relative text-[1.5rem] font-semibold font-inherit text-darkslategray-300 inline-block max-w-full z-[1] mq450:text-[1.188rem]"
          >
            Reach out and we’ll get in touch within 24 hours
          </h3>
        </div>
        <div
          class="w-[64rem] flex flex-row items-start justify-start pt-[0rem] pb-[1.313rem] pr-[0rem] pl-[0.125rem] box-border max-w-full mq1050:max-w-[calc(100%_-_2px)]"
        >
          <form
            class="m-0 flex-1 flex flex-col items-start justify-start gap-[2.125rem_0rem] max-w-full md:flex-col md:gap-[2.125rem_0rem] mq750:gap-[2.125rem_0rem]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full"
            >
              <div
                class="self-stretch flex flex-row items-center justify-start py-[0.875rem] px-[0.25rem] gap-[0rem_0.625rem] border-b-[1px] border-solid border-lightgray"
              >
                <img
                  class="h-[1rem] w-[1rem] relative"
                  alt=""
                  src="/group.svg"
                />
                <input
                  class="w-[9.313rem] [border:none] [outline:none] font-extrabold font-nunito-sans text-[1.5rem] bg-[transparent] h-[2.063rem] relative text-black text-left inline-block mq450:text-[1.188rem]"
                  placeholder="Personal Info"
                  type="text"
                />
              </div>
              <div
                class="self-stretch h-[11.938rem] flex flex-row flex-wrap items-start justify-start relative gap-[1.5rem_1.125rem] max-w-full"
              >
                <div
                  class="w-[31.188rem] !m-[0] absolute top-[0rem] left-[0.031rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full"
                >
                  <b
                    class="w-[6.313rem] relative text-[1rem] inline-block font-nunito-sans text-darkslategray-700 text-left box-border pr-[1.25rem]"
                    >First Name</b
                  >
                  <div
                    class="self-stretch h-[3.688rem] rounded-md bg-gray-100 box-border flex flex-row items-center justify-center py-[1.063rem] pr-[20.938rem] pl-[0.625rem] relative gap-[0rem_0.063rem] border-[2px] border-solid border-steelblue"
                  >
                    <div
                      class="h-[1.563rem] w-[0.063rem] absolute !m-[0] top-[1.063rem] left-[0.625rem] box-border border-r-[1px] border-solid border-steelblue"
                    />
                    <input
                      class="w-[9.563rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] absolute !m-[0] top-[1.156rem] left-[0.688rem] font-bold text-darkgray-200 text-left"
                      placeholder="Type your first name"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  class="w-[31.188rem] !m-[0] absolute top-[0rem] left-[32.719rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full"
                >
                  <b
                    class="w-[6.25rem] relative text-[1rem] inline-block font-nunito-sans text-black text-left box-border pr-[1.25rem]"
                    >Last Name</b
                  >
                  <div
                    class="self-stretch rounded-md bg-gray-100 flex flex-row items-center justify-start py-[1.063rem] px-[0.625rem] border-[1px] border-solid border-gainsboro-200"
                  >
                    <input
                      class="w-[10.813rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] relative font-bold text-darkgray-200 text-left"
                      placeholder="Type your first name"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  class="w-[31.188rem] !m-[0] absolute top-[6.813rem] left-[0.031rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full"
                >
                  <b
                    class="w-[8.25rem] h-[1.375rem] relative text-[1rem] inline-block font-nunito-sans text-black text-left box-border pr-[1.25rem]"
                    >Phone Number</b
                  >
                  <div
                    class="self-stretch rounded-md bg-gray-100 flex flex-row items-center justify-start py-[1.063rem] px-[0.625rem] border-[1px] border-solid border-gainsboro-200"
                  >
                    <input
                      class="w-[10.813rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] relative font-bold text-black text-left whitespace-nowrap"
                      placeholder="+91 771-1233-8178"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  class="w-[31.188rem] !m-[0] absolute top-[6.813rem] left-[32.719rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full"
                >
                  <b
                    class="w-[8rem] relative text-[1rem] inline-block font-nunito-sans text-darkslategray-700 text-left box-border pr-[1.25rem]"
                    >Email Address</b
                  >
                  <div
                    class="self-stretch rounded-md bg-gray-100 flex flex-row items-center justify-start py-[1.063rem] px-[0.625rem] border-[1px] border-solid border-gainsboro-200"
                  >
                    <input
                      class="w-[10.938rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] relative font-bold text-darkgray-200 text-left whitespace-nowrap"
                      placeholder="example@gmail.com"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full"
            >
              <div
                class="self-stretch flex flex-col items-start justify-start py-[0.875rem] pr-[31.688rem] pl-[0rem] border-b-[1px] border-solid border-lightgray mq750:pr-[15.813rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border"
              >
                <div
                  class="w-[13.438rem] flex flex-row items-center justify-start gap-[0rem_0.375rem]"
                >
                  <img
                    class="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/property-icon.svg"
                  />
                  <input
                    class="w-[calc(100%_-_24px)] [border:none] [outline:none] font-extrabold font-nunito-sans text-[1.5rem] bg-[transparent] h-[2.063rem] flex-1 relative text-black text-left inline-block min-w-[6.938rem] mq450:text-[1.188rem]"
                    placeholder="Property Details"
                    type="text"
                  />
                </div>
              </div>
              <div
                class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.5rem] max-w-full"
              >
                <div
                  class="flex-1 flex flex-col items-start justify-start gap-[0.25rem_0rem] min-w-[15.25rem] max-w-full"
                >
                  <b
                    class="w-[8.375rem] relative text-[1rem] inline-block font-nunito-sans text-black text-left box-border pr-[1.25rem]"
                    >Property Name</b
                  >
                  <div
                    class="self-stretch rounded-md bg-gray-100 flex flex-row items-center justify-center py-[1.063rem] px-[0.625rem] border-[1px] border-solid border-gainsboro-200"
                  >
                    <input
                      class="w-[14.438rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] relative font-bold text-darkgray-200 text-left"
                      placeholder="Type your Property Name"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  class="flex-1 flex flex-col items-start justify-start gap-[0.25rem_0rem] min-w-[15.25rem] max-w-full"
                >
                  <b
                    class="w-[7.875rem] relative text-[1rem] inline-block font-nunito-sans text-black text-left box-border pr-[1.25rem]"
                    >Property Type</b
                  >
                  <v-autocomplete
                    class="self-stretch h-[3.5rem]"
                    color="primary"
                    variant="filled"
                    :items="['Independent','Dependent']"
                    model-value="Independent"
                  />
                </div>
                <div
                  class="flex-1 flex flex-col items-start justify-start gap-[0.25rem_0rem] min-w-[15.25rem] max-w-full"
                >
                  <b
                    class="w-[5rem] relative text-[1rem] inline-block font-nunito-sans text-black text-left box-border pr-[1.25rem]"
                    >Country</b
                  >
                  <v-autocomplete
                    class="self-stretch h-[3.5rem]"
                    color="primary"
                    variant="filled"
                    :items="['Australia','India','Kosovo','Mecedonia','Pakistan','United States']"
                    model-value="United States"
                  />
                </div>
              </div>
            </div>
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]"
            >
              <b
                class="w-[7.688rem] relative text-[1rem] inline-block font-nunito-sans text-darkslategray-700 text-left box-border pr-[1.25rem]"
                >Your Message</b
              >
              <div
                class="self-stretch rounded-md bg-gray-100 flex flex-row items-start justify-start pt-[0.875rem] px-[0.875rem] pb-[5rem] border-[1px] border-solid border-gainsboro-200"
              >
                <input
                  class="w-[12.938rem] [border:none] [outline:none] inline-block font-nunito-sans text-[1rem] bg-[transparent] h-[1.375rem] relative font-bold text-darkgray-200 text-left"
                  placeholder="Write your message here"
                  type="text"
                />
              </div>
            </div>
            <button
              class="cursor-pointer [border:none] p-[0.75rem] bg-steelblue w-[8.438rem] rounded-md flex flex-row items-center justify-center box-border hover:bg-deepskyblue"
            >
              <div
                class="w-[5.938rem] relative text-[1rem] font-extrabold font-nunito-sans text-white text-left inline-block box-border pl-[1.25rem] pr-[1.25rem]"
              >
                Submit
              </div>
            </button>
          </form>
        </div>
        <GlobalOffices /><frame />
      </section>
    </main>
    <FooterBg />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import ContactFrame from "../components/contact-frame.vue";
  import GlobalOffices from "../components/global-offices.vue";
  import Frame from "../components/frame.vue";
  import FooterBg from "../components/footer-bg.vue";

  export default defineComponent({
    name: "ContactPage",
    components: { ContactFrame, GlobalOffices, Frame, FooterBg },
  });
</script>
