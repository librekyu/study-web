module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-typescript'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
          corejs: 3,
        },
      ],
    ],
  };
};
