import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   base: '/ultimate-pixel-championship/',
   build: {
      outDir: 'dist',
   },
});
