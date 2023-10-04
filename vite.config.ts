import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'node:url'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      imports: [
        'react',
        'react-router-dom',
        {
          axios: ['axios'],
          zustand: ['create'],
          antd: ['Button', 'Checkbox', 'Form', 'Input', 'message', 'Card']
        }
      ],
      dirs: [
        'src/api',
        'src/utils',
        'src/components',
        'src/type',
        'src/store',
        'src/layout',
        'src/hooks'
      ],
      dts: './auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx'
        })
      ]
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    proxy: {
      '/api-note-book': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api-note-book/, '')
      },
      '/api': {
        target: 'https://taskward.bit-ocean.studio',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
