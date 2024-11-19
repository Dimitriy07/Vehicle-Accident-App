import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/drivers": {
        target:
          "https://3000-idx-accidentform-1728470898383.cluster-wxkvpdxct5e4sxx4nbgdioeb46.cloudworkstations.dev/drivers",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
