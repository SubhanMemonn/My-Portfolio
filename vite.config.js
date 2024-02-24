import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-Portfolio/",
  server: {
    proxy: {
      "/contact-me": {
        target: "http://localhost:3000"
      }
    }
  }

})
