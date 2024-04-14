/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#202430", // Dark blue background
          light: "#1b263b", // Lighter blue for card backgrounds or surfaces
          accent1: "#D25E00", // Vibrant red-orange for buttons, highlights, etc.
          accent2: "CF0000",
          accent3: "FcFB00", 
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"], // Example font family
      },
    },
  },
  plugins: [],
};
