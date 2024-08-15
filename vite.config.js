import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1', // 监听地址
    port: 5173,       // 监听端口
    proxy: {
      // 代理配置
      '/api': {
        target: 'https://api.jisuapi.com', // 目标服务器地址
        changeOrigin: true,                // 改变主机头
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径，去掉代理路径的前缀
      }
    }
  }
})
