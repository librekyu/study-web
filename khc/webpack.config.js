const path = require('path');

module.exports={
    mode: 'production', // or "development" or "none"
    entry: {
        testing:'./src/test.ts'
    },
    target: 'node',
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css',".tsx", ".ts"],
    },
    module: { rules: 
        [
         { test: /\.ts$/,
           use: ['ts-loader'],
           exclude:["/node_modules"] }
        ]
    }
};