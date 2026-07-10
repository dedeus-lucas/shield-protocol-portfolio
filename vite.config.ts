import { defineConfig } from 'vite';

export default defineConfig({
  base: '/shield-protocol-portfolio/',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
  },
});