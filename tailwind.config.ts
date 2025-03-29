import type { Config } from "tailwindcss";


const config: Config = {}



export default config
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair:"var(--font-playfair)", // Add a classy serif font
        sans:"var(--font-sans)", // Default sans-serif font
      },
    },
  },
  plugins: [],
  };