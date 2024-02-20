import esbuild from "rollup-plugin-esbuild";
import shebang from "rollup-plugin-shebang-bin";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [
    esbuild({
      target: "esnext",
    }),
    shebang({
      include: "src/index.ts",
    }),
  ],
  external: (id) => !/^[./]/.test(id),
};
