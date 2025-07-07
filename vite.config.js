import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Yu-Jae-seok_react/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
