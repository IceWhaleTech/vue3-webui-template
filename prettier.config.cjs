/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  plugins: [
    "prettier-plugin-organize-attributes",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

module.exports = config;
