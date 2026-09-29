import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function zipDownloadHeaders(): Plugin {
  return {
    name: 'zip-download-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0]
        if (path === '/ednovate-web.zip') {
          res.setHeader('Content-Type', 'application/zip')
          res.setHeader(
            'Content-Disposition',
            'attachment; filename="ednovate-web.zip"',
          )
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), zipDownloadHeaders()],
  server: {
    host: '0.0.0.0',
    port: 4327,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4327,
  },
})
