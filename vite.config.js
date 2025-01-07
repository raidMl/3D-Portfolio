import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false, // Disable auto-opening
      filename: 'report.html', // Name of the report file
      template: 'treemap', // Visualization type
    }),
  ],
});

