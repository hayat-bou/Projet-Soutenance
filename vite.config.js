import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wag: {
          '0%': { transform: 'rotate(25deg)' },
          '100%': { transform: 'rotate(-25deg)' },
        },
      },
      animation: {
        wag: 'wag 0.6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};