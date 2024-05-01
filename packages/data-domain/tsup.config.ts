import { defineConfig } from "tsup";

export default defineConfig({
  tsconfig: "tsconfig.build.json",
  entryPoints: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs"],
  minify: true,
  dts: true,
  sourcemap: false,
  clean: true,
});
