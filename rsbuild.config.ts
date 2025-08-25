import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import AutoImport from "unplugin-auto-import/rspack";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/rspack";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          imports: [
            "vue",
            {
              "naive-ui": [
                "useDialog",
                "useMessage",
                "useNotification",
                "useLoadingBar",
              ],
            },
          ],
        }),
        Components({
          resolvers: [NaiveUiResolver()],
        }),
      ],
    },
  },
  performance: {
    chunkSplit: {
      strategy: "split-by-experience",
    },
  },
  dev: {
    watchFiles: {
      paths: "!src-tauri/**",
    },
    client: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || undefined,
  },
});
