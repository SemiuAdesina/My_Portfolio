import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this matches the deployment path on Render
  optimizeDeps: {
    include: ['@tsparticles/react', 'tsparticles'], // Pre-bundle required dependencies
  },
});
