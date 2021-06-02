module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        useBuiltIns: "usage",
        targets: "> 0.25%, not dead",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  // plugins: []
};
