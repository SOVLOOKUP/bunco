await Bun.build({
  entrypoints: ["./src/main.ts"],
  outdir: "./dist",
  sourcemap: "external",
  packages: "external",
  minify: true,
  target: "node",
});

export {};
