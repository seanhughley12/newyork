import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to '/<repo>/'. For Vercel/Netlify or a custom domain, leave as '/'.
// You can also override at build time:  BASE_PATH=/nyc-adventure/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/newyork/',
  server: {
    port: 5173,
  },
})
