/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#f2e7d8",
        bone: "#fffaf2",
        line: "#d7bea0",
        moss: "#5b5f43",
        rust: "#7f3528",
        slate: "#3a302a"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      maxWidth: {
        content: "1180px"
      }
    }
  }
};
