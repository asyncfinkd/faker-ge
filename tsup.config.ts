import { defineConfig, type Options } from "tsup";

export default defineConfig(() => {
  return {
    entry: ["src/index.ts"],
    outDir: "lib",
    minify: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
    treeshake: true,
    splitting: true,
    outExtension({ format }) {
      return {
        js: format === "esm" ? ".mjs" : format === "cjs" ? ".cjs" : ".js",
      };
    },
  };
});
