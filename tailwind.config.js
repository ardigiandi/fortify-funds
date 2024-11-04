/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", 
    "src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      colors: {
        abu: "#EBEEF1", // Warna custom abu-abu
        biru: "#304966", // Warna custom biru
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
