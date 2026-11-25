import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      },
    }),
  ],
})
