import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@rich/core': fileURLToPath(new URL('./packages/core', import.meta.url)),
      '@rich/http': fileURLToPath(new URL('./packages/http', import.meta.url)),
      '@rich/utils': fileURLToPath(new URL('./packages/utils', import.meta.url))
    }
  }
})
