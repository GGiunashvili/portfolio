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
        test: "#2C0F14",
        background: "#ffffff",
        foreground: "#000000",
      },
    },
  },
  plugins: [],
};
