const { resolve } = require("path");
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname),
      },
      {
        find: "components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "pages",
        replacement: resolve(__dirname, "src/components/pages"),
      },
      {
        find: "src",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "global-styles",
        replacement: resolve(__dirname, "src/global.styles.ts"),
      },
    ],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [reactRefresh()],
});
