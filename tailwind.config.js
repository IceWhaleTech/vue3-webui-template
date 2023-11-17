/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "100svh": "100svh",
        "100lvh": "100lvh",
        "100dvh": "100dvh",
      },
      minHeight: {
        "100svh": "100svh",
        "100lvh": "100lvh",
        "100dvh": "100dvh",
      },
      maxHeight: {
        "100svh": "100svh",
        "100lvh": "100lvh",
        "100dvh": "100dvh",
      },
      width: {
        "100svw": "100svw",
        "100lvw": "100lvw",
        "100dvw": "100dvw",
      },
      minWidth: {
        "100svw": "100svw",
        "100lvw": "100lvw",
        "100dvw": "100dvw",
      },
      maxWidth: {
        "100svw": "100svw",
        "100lvw": "100lvw",
        "100dvw": "100dvw",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
