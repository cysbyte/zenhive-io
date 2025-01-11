/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pingFangSCRegular: ['PingFangSCRegular', 'sans-serif'],
        pingFangSCLight: ['PingFangSCLight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* For most modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        }
      });
    }
  ],
}