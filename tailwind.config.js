/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "sf-pro-display": ["var(--font-sf-pro-display)"],
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        color_dark_1: "var(--color-dark-1)",
        color_text: "var(--color-text-default)",
        color_grey_1: "var(--color-grey-1)",
        color_bg: "var(--color-bg)",
        "color-border": "var(--color-border)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
