
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Correct standard alias using relative path resolution
      "@": path.resolve("./src"),
      
      // CRITICAL FIX: Redirects the bad path to the correct one
      "@/src": path.resolve("./src"),
    },
  },
  server: {
    port: 5173,
    host: true
  }
})
