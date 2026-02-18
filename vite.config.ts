
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Correct standard alias
      "@": path.resolve(__dirname, "./src"),
      
      // CRITICAL FIX: Redirects the bad path to the correct one
      "@/src": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true
  }
})