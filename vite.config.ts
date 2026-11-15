import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss({})],
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, '.'),
            '@public': path.resolve(__dirname, './public'),
            '@src': path.resolve(__dirname, './src'),
        },
    },
});
