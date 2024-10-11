import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // or '0.0.0.0' to bind to all interfaces
  },
  plugins: [react()],
  server:{
    port:5173
  }
})
