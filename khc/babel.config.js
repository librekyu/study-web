module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/typescript',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
