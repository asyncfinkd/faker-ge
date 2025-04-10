import { defineConfig, type Options } from "tsup";

export default defineConfig((flags) => {
  const buildOptions: Options = {
    minify: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
  };

  return {
    entry: [
      "src/index.ts",
      "src/types.ts",
      "src/person.ts",
      "src/personal_number.ts",
    ],
    outDir: "lib",
    ...buildOptions,
  };
});
