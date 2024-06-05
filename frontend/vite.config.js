import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns'
import path from "path"
import { fileURLToPath } from 'node:url'

dns.setDefaultResultOrder('verbatim')

//because __dirname was showing undefined
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
