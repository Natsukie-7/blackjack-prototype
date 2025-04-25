import path from "path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  base: process.env.VITE_BASE_PATH || "/blackjack-prototype",
  server: {
    host: "dev.blackjack",
    port: 7777,
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utilities": path.resolve(__dirname, "./src/utilities"),
    },
  },
});
