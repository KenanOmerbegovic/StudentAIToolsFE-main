import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryColor: "#202430",
        secondaryColor: "#4890F9",
        primaryShade1: "#1C1F2A",
        primaryShade2: "#181B24",
        primaryShade3: "#14161D",
        primaryShade4: "#101217",
        primaryTint1: "#303649",
        primaryTint2: "#6F7382",
        primaryTint3: "#9B9FAF",
        primaryTint4: "#CACEDE",
        text: "#D2D3D6",
        white: "#FFFFFF",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
