/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f9f9fb",
          "200": "#f4f8f8",
          "300": "#f4f4f6",
          "400": "#ededed",
        },
        darkslategray: {
          "100": "#464a57",
          "200": "#454a58",
          "300": "#3f3f3f",
          "400": "#3d3d3d",
          "500": "#3e3a3a",
          "600": "#243434",
          "700": "#2e2e2e",
          "800": "rgba(69, 69, 69, 0.47)",
          "900": "rgba(50, 50, 50, 0.14)",
        },
        gray: {
          "100": "#fafafa",
          "200": "#1f2228",
          "300": "#171717",
          "400": "#121212",
          "500": "#0f0f0f",
          "600": "rgba(124, 122, 122, 0.4)",
          "700": "rgba(255, 255, 255, 0.74)",
          "800": "rgba(255, 255, 255, 0.58)",
          "900": "rgba(255, 255, 255, 0.62)",
          "1000": "rgba(255, 255, 255, 0.97)",
          "1100": "rgba(255, 255, 255, 0.69)",
          "1200": "rgba(255, 255, 255, 0.8)",
          "1300": "rgba(255, 255, 255, 0.7)",
          "1400": "rgba(255, 255, 255, 0.91)",
          "1500": "rgba(255, 255, 255, 0.73)",
        },
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dddfe7",
          "300": "#d9d9d9",
          "400": "#d4d9dc",
          "500": "rgba(212, 217, 220, 0.42)",
          "600": "rgba(230, 230, 230, 0.09)",
        },
        steelblue: "#229cd3",
        deepskyblue: "#3bb5ed",
        darkgray: {
          "100": "#afacab",
          "200": "#ababab",
          "300": "rgba(167, 167, 167, 0.39)",
        },
        lightgray: "#d0d0d0",
        blueviolet: "#9747ff",
        lightseagreen: {
          "100": "#1fb5b7",
          "200": "#00aaac",
        },
        aliceblue: {
          "100": "#f5fcff",
          "200": "#e6f3f8",
          "300": "rgba(230, 243, 248, 0.1)",
        },
        lightslategray: "#7d8d95",
        goldenrod: "#ffb845",
        cornsilk: "#fef7d7",
        paleturquoise: "rgba(159, 225, 225, 0.1)",
        slategray: "#7b808e",
        saddlebrown: "rgba(133, 75, 22, 0.47)",
        forestgreen: "rgba(24, 134, 29, 0.45)",
        silver: "#bcbcbc",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        roboto: "Roboto",
      },
      borderRadius: {
        lgi: "19px",
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        "11xl": "30px",
        "31xl": "50px",
        sm: "14px",
        xl: "20px",
        "41xl": "60px",
        "171xl": "190px",
        "6xl": "25px",
        "2xl": "21px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      "5xl": "1.5rem",
      "17xl": "2.25rem",
      "37xl": "3.5rem",
      "77xl": "6rem",
      "45xl": "4rem",
      "3xs": "0.625rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      md: {
        max: "960px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};