import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwind()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  },
  server: {
    open: true,
    port: 3000
  }
})
