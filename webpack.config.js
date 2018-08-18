const path = require('path');
const webpack = require('webpack');

const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? '[name].js' : '[name].min.js';

module.exports = {
  entry: {
    eui: path.join(__dirname, 'lib/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    library: 'eui',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      var: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      var: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    }
  },
  module: {},
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.SourceMapDevToolPlugin({
      filename: `${filename}.map`
    })
  ],
  optimization: {
    minimize: !__DEV__,
  }
}

