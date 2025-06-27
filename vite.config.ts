import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // cann't be './'
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    tailwindcss(),
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#root',
        additionalPrerenderRoutes: ['/404'],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: '/404',
      },
    }),
  ],
})
