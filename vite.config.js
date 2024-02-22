import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    snapshotSerializers: ['./custom-serializer.js'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  },
})
