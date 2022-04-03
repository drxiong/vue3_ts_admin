import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock',
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  base: './', //打包路径
  server: {
    port: 3000,
    open: true,
    cors: true
  }
})
