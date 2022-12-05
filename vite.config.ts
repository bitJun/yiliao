import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { LayuiVueResolver } from "unplugin-layui-vue-resolver";
import { visualizer } from "rollup-plugin-visualizer";

const excludeComponents = ['LightIcon','DarkIcon']

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://43.139.190.83:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [
    AutoImport({
      resolvers: [
        LayuiVueResolver(),
      ],
    }),
    Components({
      resolvers: [
        LayuiVueResolver({
          resolveIcons: true,
          exclude: excludeComponents
        }),
      ],
    }),
    visualizer({
      emitFile: true,
      filename: "visualizer.html",
      gzipSize: true,
      brotliSize: true,
      open: true,
    }),
    vue(),
  ],
});