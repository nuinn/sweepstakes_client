import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api': 'https://sweepstakes-server.onrender.com/'
    }
  },
  plugins: [react()],
})
