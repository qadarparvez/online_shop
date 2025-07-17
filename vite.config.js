import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',
    css: {
      devSourcemap: false
    },
    server: {
      host: 0.0.0.0,
      port: 5173,
      strictPort: true,
      allowedHosts: [
        '16-16-128-178.nip.io',
        'localhost'
      ]
    }
})
