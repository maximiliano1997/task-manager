import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Habilita el modo de polling si los cambios no se detectan automáticamente
    },
  },
  assetsInclude: ['**/*.html'],
})
