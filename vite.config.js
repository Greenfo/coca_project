import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: '/coca_project/',
  root: './src',
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        about: './src/about.html',
        blog: './src/blog.html',
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    injectHTML(),
    ViteMinifyPlugin(),
  ],
});
