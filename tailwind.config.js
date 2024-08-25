/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f3f4f6",
          "300": "#f3f3f3",
        },
        white: "#fff",
        gainsboro: "#e5e7eb",
        goldenrod: "#eab308",
        mediumspringgreen: "#22c55e",
        dodgerblue: "#3b82f6",
        gray: {
          "100": "#7b7878",
          "200": "#1f2937",
          "300": "#111827",
        },
        steelblue: "#0077b6",
        deepskyblue: {
          "100": "#4faee4",
          "200": "#00b4d8",
        },
        midnightblue: "#03045e",
        aliceblue: "#f1f9fc",
        dimgray: "#4b5563",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "31xl": "50px",
        "29xl": "48px",
        "3xs": "10px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "15xl": "34px",
      "8xl": "27px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
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
