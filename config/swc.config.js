module.exports = {
  getBaseSWCOptions: ({ isDev, isTypeScript, isJSX }) => ({
    jsc: {
      parser: {
        syntax: isTypeScript ? "typescript" : "ecmascript",
        [isTypeScript ? "tsx" : "jsx"]: isJSX,
        decorators: true,
        dynamicImport: true,
      },
      ...(isDev
        ? {}
        : {
            minify: {
              compress: {
                unused: true,
              },
              mangle: true,
            },
          }),
      target: "es5",
    },
    minify: !isDev,
  }),
};
