import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import electron from "vite-plugin-electron"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        entry: "electron/main.ts",
        vite: { build: { outDir: "dist-electron" } },
      },
      {
        entry: "electron/preload.ts",
        vite: { build: { outDir: "dist-electron" } },
      },
    ]),
  ],
  build: {
    rollupOptions: {
      // 忽略特定的警告
      // "/* #__PURE__ */"in "node_modules/.store/ant-design-vue@4.0.7/node_modules/ant-design-vue/es/_util/hooks/_vueuse/is.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
      onwarn: (warning, warn) => {
        if (warning.code === "INVALID_ANNOTATION") return
        warn(warning)
      },
    },
  },
  server: {
    port: 9999,
  },
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".less",
      ".css",
    ],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
