const path = require('path');

module.exports={
    mode: 'production', // or "development" or "none"
    entry: './src/server.js',
    target: 'node',
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
};