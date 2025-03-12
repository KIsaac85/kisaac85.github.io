import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kisaac85.github.io/', // Ensure this matches your repository namerm -rf node_modules/.cache/gh-pages
})
