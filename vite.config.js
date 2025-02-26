import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['cha499.cn'], // 允许的域名
    // 可选：配置代理（参考网页1）
    proxy: {
      '/api': {
        target: 'http://your-backend-server',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 可选：构建优化（参考网页3）
  build: {
    minify: 'esbuild', // 或关闭压缩（调试用）
    sourcemap: true
  }
});
