// var path = require('path')
var webpack = require('webpack')

var config = {
  // devtool: 'source-map',
  entry: 'hello-world.js',
  output: {
    path: __dirname, // path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname, // path.join(__dirname, 'src')
        exclude: [/node_modules/, /bower_components/, 'webpack.config.js', 'bundle.js']
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  devServer: {
    contentBase: ['./', './bower_components'],
    progress: true,
    colors: true,
    inline: true,
    hot: true,
    // noInfo: true,
    proxy: {
      '*.go': {
        target: 'http://localhost:8181',
        secure: false
      }
    },
    compress: true,
    https: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // })
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compressor: {
//         pure_getters: true,
//         unsafe: true,
//         unsafe_comps: true,
//         warnings: false
//       }
//     })
//   )
// }

module.exports = config
