module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    // ...
    margin: ["responsive", "hover", "first"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
