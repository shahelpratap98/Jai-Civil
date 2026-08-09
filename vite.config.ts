import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // The dev server is launched via the folder's 8.3 short path (spaces in
    // the full path break the launcher), which fails Vite's strict fs check.
    fs: { strict: false },
  },
});
