/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-primary-dark": "var(--color-primary--dark)",
        "color-secondary": "var(--color-secondary)",
        "color-secondary--light": "var(--color-secondary--light)",
        color_dark_1: "var(--color-dark-1)",
        color_text: "var(--color-text-default)",
        color_grey_1: "var(--color-grey-1)",
        color_bg: "var(--color-bg)",
        color_bg2: "var(--color-bg-2)",
        "color-border": "var(--color-border)",
        "color-warn": "var(--color-warn)",
        "color-error": "var(--color-error)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
