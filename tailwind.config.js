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
    fontFamily: {
      syne: ["Syne", "Helvetica"],
    },
    border: {
      half: ["0.5px"],
    },
  },
  plugins: [],
};
