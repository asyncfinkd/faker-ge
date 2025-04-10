import { defineConfig, type Options } from "tsup";

export default defineConfig(() => {
  const buildOptions: Options = {
    minify: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
    outExtension({ format }) {
      return {
        js: format === "esm" ? ".mjs" : format === "cjs" ? ".cjs" : ".js",
      };
    },
  };

  return {
    entry: [
      "src/index.ts",
      "src/types.ts",
      "src/person.ts",
      "src/personal_number.ts",
      "src/phone_number.ts",
    ],
    outDir: "lib",
    ...buildOptions,
  };
});
