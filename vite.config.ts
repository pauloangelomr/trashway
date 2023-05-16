import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: "**/*.{ts,tsx}",
      exclude: ["node_modules", "dist", "build"]
    })
  ],
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/views"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@config": path.resolve(__dirname, "src/config"),
      "@store": path.resolve(__dirname, "src/store"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    }
  }
});
