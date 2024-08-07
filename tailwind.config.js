/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },

    extend: {
      minHeight: {
        screen: "100svh",
      },
      height: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
