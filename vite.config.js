import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Persnol-Portfolio-Website/', // 👈 IMPORTANT: replace with your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/your-repo-name/', // 👈 IMPORTANT: replace with your GitHub repo name
// })

