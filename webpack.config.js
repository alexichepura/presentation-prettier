const path = require('path')
const webpack = require('webpack')
const Extract = require('extract-text-webpack-plugin')

const {
  DllReferencePlugin,
  HashedModuleIdsPlugin,
  NamedModulesPlugin,
  DefinePlugin,
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
  optimize: { CommonsChunkPlugin, UglifyJsPlugin },
} = webpack

const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
// const PATH_PUBLIC = path.resolve(__dirname, 'public')
const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
  performance: {
    hints: IS_PROD ? 'warning' : false,
  },
  devtool: IS_PROD ? 'source-map' : 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: `[name].js`,
    chunkFilename: `[name]${IS_PROD ? '.[chunkhash:8]' : ''}.chunk.js`,
    path: PATH_DIST,
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'ts-loader',
          },
        ].filter(l => l),
        exclude: [/node_modules/],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\/src\/styles\/.*\.css$/,
        loader: IS_PROD
          ? Extract.extract(
              'css-loader?-url&sourceMap!postcss-loader?sourceMap'
            )
          : // insertAt=top is to ensure loading before CSS Modules
            'style-loader?insertAt=top&sourceMap!css-loader?-url&sourceMap!postcss-loader?sourceMap',
      },
      {
        test: /\/components\/.*\.css$/,
        loaders: IS_PROD
          ? Extract.extract([
              'css-loader?-url&sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]',
              'postcss-loader?sourceMap',
            ])
          : [
              'style-loader?sourceMap',
              'css-loader?-url&sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]',
              'postcss-loader?sourceMap',
            ],
      },
    ],
  },
  plugins: [
    new DllReferencePlugin({
      context: '.',
      manifest: require('./public/dist/dll-manifest.json'),
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new NamedModulesPlugin(),
    new CommonsChunkPlugin({
      async: 'common',
      minChunks(module, count) {
        return count >= 2
      },
    }),
    IS_PROD &&
      new Extract({
        filename: '[name].css',
        allChunks: true,
      }),
    IS_PROD &&
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    IS_PROD &&
      new UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
        sourceMap: true,
        semicolons: true,
        screw_ie8: true,
      }),
  ].filter(p => p),
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 0,
    poll: false,
  },
}

module.exports = config
