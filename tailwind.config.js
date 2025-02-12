export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E84A4A", // პირდაპირ ფერის კოდი
        hoverRed: "#D9363642",
        test: "#2C0F14",
        background: "#ffffff",
        foreground: "#000000",
      },
      transform: {
        "custom-transform":
          "perspective(60rem) rotateX(24deg) translateY(0rem) translateZ(0rem)",
      },
    },
  },
  plugins: [],
};
