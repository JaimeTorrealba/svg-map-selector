import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, "lib/index.js"),
      name: "svg-selector",
      fileName: "svg-selector",
    },
    rollupOptions: {
      external: ["vue", "@dash14/svg-pan-zoom"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
