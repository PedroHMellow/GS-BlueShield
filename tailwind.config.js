/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'Azul_Fiap': '#032537',
        'Azul_Fiap2' : '#1ee0e8',
        'Azul_ODS14' : '#1f97d4', 
      },

      backgroundImage: {
        'Banner' : "url('./public/Banner.png')",
      }
    },
  },
  plugins: [],
}

