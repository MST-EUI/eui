const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const filename = !!env.production ? '[name].min.js' : '[name].js';
  return {
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
      minimize: true,
    }
  }
}

