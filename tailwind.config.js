module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 200: "#ebebeb", 700: "#5b5b5b", 900: "#22092c", "600_01": "#727272" },
        white: { A700: "#ffffff", A700_0c: "#ffffff0c" },
        blue_gray: { 900: "#252b42" },
        red: { 400: "#f05941", 600: "#e64040", 700: "#be3144" },
        deep_orange: { 400: "#ff6551" },
        pink: { 900: "#872341" },
        black: { 900: "#000000" },
      },
      boxShadow: { xs: "0px 13px  19px 0px #00000011", sm: "0px 4px  4px 0px #0000003f" },
      fontFamily: { raleway: "Raleway", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
