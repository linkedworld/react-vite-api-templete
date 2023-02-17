import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
      proxy: {
        "/api/books": {
          target: "https://cms.greatbooks.co.kr",
          changeOrigin: true,
          rewrite: (path) => path.replace('/api/books', '/api'),
          secure: true,
        },
        "/api/v1": {
          target: "http://106.10.33.166:5006",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
)
