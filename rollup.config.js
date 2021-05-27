import graphql from '@rollup/plugin-graphql';

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
    {
      file: "dist/index-cjs.js",
      format: "cjs",
    },
  ],
  plugins: [graphql()],
  external: ["@graphql-tools/schema", "@graphql-tools/merge"]
};
