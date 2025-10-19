import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

optimizeDeps: {
  include: ['@monaco-editor/react']
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
