import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
      proxy: {
        "/api": {
          target: "http://106.10.33.166:5006",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
)
