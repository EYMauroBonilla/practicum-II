import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs/promises";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
    esbuild: {
      loader: "tsx",
      include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-ts-files-as-tsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.ts$/ }, async (args) => ({
                loader: "tsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    plugins: [
      svgr({
        svgrOptions: {
          exportType: 'named',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
      }),
      react(),
    ],
    define: {
      "process.env": env,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    publicDir: 'public',
    server: {
      port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    },
    preview: {
      port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  };
});