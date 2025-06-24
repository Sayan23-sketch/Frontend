import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/mfapi": {
        target: "https://www.mfapi.in",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mfapi/, ""),
      },
    },
  },
});
