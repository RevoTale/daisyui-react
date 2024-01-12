module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './__tests__/**/*.{js,jsx,ts,tsx}',

  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}
