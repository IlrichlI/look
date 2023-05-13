import { fileURLToPath, URL } from 'node:url'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), checker({ vueTsc: true /** or an object config */ })],
  server: {
    proxy: {
      base: './',
      '^.*api.*': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@rich/core': fileURLToPath(new URL('./packages/core', import.meta.url)),
      '@rich/form': fileURLToPath(new URL('./packages/form', import.meta.url)),
      '@rich/http': fileURLToPath(new URL('./packages/http', import.meta.url)),
      '@rich/layout': fileURLToPath(new URL('./packages/layout', import.meta.url)),
      '@rich/table': fileURLToPath(new URL('./packages/table', import.meta.url)),
      '@rich/utils': fileURLToPath(new URL('./packages/utils', import.meta.url))
    }
  }
})
