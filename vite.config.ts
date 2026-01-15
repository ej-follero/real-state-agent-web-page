import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

declare const process: {
  env: {
    VITE_BASE_PATH?: string
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
  root: '.',
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Use base path only in production builds, use root for development
  base: mode === 'production' 
    ? (process.env.VITE_BASE_PATH || "/real-state-agent-web-page")
    : "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
