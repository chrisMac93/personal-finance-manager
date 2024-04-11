/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#202430", // Dark blue background
          light: "#1b263b", // Lighter blue for card backgrounds or surfaces
          accent: "#e43f5a", // Vibrant red-orange for buttons, highlights, etc.
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"], // Example font family
      },
    },
  },
  plugins: [],
};
