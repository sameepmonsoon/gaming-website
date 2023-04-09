/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      // Add other font families here if desired
    },
    colors: {
      background: "rgb(38,40,49)",
      blue: "#2CBCE9",
      red: "#FA1E4E",
      yellow: "#FDCC49",
      white: "#ffffff",
      black: "#000000",
      gray: "#ededed", // Use "gray" instead of "grey" for consistency with Tailwind
      // Add other colors here if desired
    },
    extend: {
      clipPath: {
        parallel: "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
      },
    },
  },
  variants: {
    extend: {
      clipPath: ["hover"],
    },
  },
  plugins: [],
};
