import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // Set this to your local server host
    port: 5500,         // You can specify a different port if needed
    open: true,         // Automatically open the browser on server start
  },
})

