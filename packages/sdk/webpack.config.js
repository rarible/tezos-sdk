const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = [
  {
    entry: path.resolve(__dirname, "./test/test-web.ts"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: path.resolve(__dirname, "./node_modules/ts-loader"),
            options: {
              transpileOnly: true,
              compilerOptions: {
                strict: true,
                module: "es2020",
                moduleResolution: "node",
                target: "es2020"
              }
            }
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'production',
    output: {
      filename: 'test.js',
      path: path.resolve(__dirname, 'www'),
    },
    plugins: [
      new NodePolyfillPlugin()
    ],
    performance: {
      hints: false,
    },
    externals: {
      vue: "Vue",
    }
  }
]
