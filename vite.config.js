// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     jsxInject: `import React from 'react'`,
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000 // Ensure this matches your desired port
  },
  base: '/', // Make sure this is correct, especially if deploying to a subdirectory
});
