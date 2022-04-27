import { defineConfig } from 'vite'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import manifest from './manifest.json'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Markdown-Live-Preview/',
  plugins: [
    react(),
    pwa({
      strategies: 'injectManifest',
      srcDir: '',
      filename: 'service-worker.js',
      manifest,
    }),
  ],
})
