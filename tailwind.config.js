/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      mm: "375px",
      sm: "425px",
      sd: "575px",
      md: "768px",
      lg: "800px",
      xl: "1024px",
      "2xl": "1200px",
    },
    extend: {
      colors: {
        discount: "#FF4242",
        new: "#4CAF50",
        grn: "#38CB89",
        blu: "#377DFF",
        org: "#FFAB00",
        light_red: "#FF5630",
        btn: "#141718",
        rating: "#343839",
        gray500: "#6C7275"
      },
    },
  },
  plugins: [],
};
