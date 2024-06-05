/** @type {import("prettier").Config} */
const config = {
  printWidth: 110,
  plugins: [
    "prettier-plugin-organize-attributes",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["usePassThrough"],
};

module.exports = config;
