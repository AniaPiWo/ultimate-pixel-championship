import react from '@vitejs/plugin-react';

export default {
   plugins: [react()],
   base: '/ultimate-pixel-championship/',
   build: {
      outDir: 'dist',
   },
};
