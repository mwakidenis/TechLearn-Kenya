import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteFont from "vite-font";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    viteFont({
      config: [
        {
          name: "Inter",
          // `wght@100..900` requests Inter's full variable range, so every
          // Tailwind font-weight utility is covered by a single file.
          googleFontsURL:
            "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
          subsets: ["latin"],
          fetch: true,
          preload: true,
          display: "swap",
          fallback: "sans-serif",
          cssVariable: "body-font",
        },
      ],
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
