const path = require('path');

module.exports = {
  mode: 'production' /** minify */,
  target: 'node' /** environment */,
  module: {
    /** loaders */
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules)|(dist)|(__tests__)/,
      },
      {
        test: [/\.ts?$/],
        include: path.join(__dirname),
        exclude: /(node_modules)|(dist)|(__tests__)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    /** 모듈들이 리졸브 될 때, 웹팩 작동시 무슨 디렉토리를 봐야하는지 지정  */
    modules: ['node_modules'] /** default, 모듈 탐색을 시작할 경로 지정 */,
    extensions: ['.tsx', '.ts', '.js'] /** 탐색할 모듈의 확장자를 지정 */,
  },
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
