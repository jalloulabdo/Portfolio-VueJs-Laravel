import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import glob from "glob";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
            // For example <img src="/images/logo.png"> will not work without the code below
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            },
        }),
    ],
    root: path.join(__dirname, "src"),
    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
        input: glob.sync(path.resolve(__dirname, "src", "*.html")),
        },
    
});
