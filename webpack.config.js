// Node Modules
const path = require('path')

// Installed Packages
const Webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Local Packages
const ENV = require('./config/environment')
const PATHS = ENV.paths

const config = {
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: [
    PATHS.main
  ],
  devServer: {
    hot: true,
    open: true,
    inline: true,
    overlay: true,
    compress: true,
    port: 4000,
    contentBase: path.resolve(__dirname, 'demo')
  },
  output: {
    path: PATHS.build,
    filename: 'js/app.bundle.js'
  },
  module: {
    loaders: [{
			test: /\.(woff|woff2|ttf|eot|svg)/,
      exclude: [/images/, /img/],
			loader: "url-loader",
			query: {
			name: `fonts/[name].[ext]`,
				limit: 8192
      }
		}, {
		  test: /\.(png|jpg|svg)$/,
      exclude: [/fonts/, /font/],
      loader: "url-loader",
			query: {
				name: `img/[name].[ext]`,
				mimetype: `mimetype=image/svg+xml`,
				limit: 8192
			}
    }, {
      test: /\.js$/,
      exclude: [PATHS.node_modules],
      loader: 'babel-loader'
    }, {
			test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader!sass-loader')
		}, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader!css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new CopyWebpackPlugin([
			{ from: PATHS.build + "/css/app.css",      to: PATHS.public + "/css/app.css"       },
			{ from: PATHS.build + "/js/app.bundle.js", to: PATHS.public + "/js/app.bundle.js" }
		]),
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
  })
  ]
}

module.exports = config
