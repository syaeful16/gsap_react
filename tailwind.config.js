/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'journey-1' : "radial-gradient(ellipse, #0000, #0007), url('/src/assets/journey_image/journey-1.jpg')"
      }
    },
  },
  plugins: [],
}

