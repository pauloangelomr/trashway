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
      "@views": path.resolve(__dirname, "src/views")
    }
  }
});
