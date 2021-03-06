const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
const PORT = process.env.PORT

module.exports = ctx => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-url')({
      url: asset => {
        let url = asset.url || asset
        if (url.startsWith('http')) {
          return url
        }
        if (!url.startsWith('/')) {
          url = '/' + url
        }
        // full path need for development because css files lay in blobs, not urls
        return IS_PROD ? url : `http://localhost:${PORT}${url}`
      },
    }),
    require('postcss-cssnext')({
      browsers: [`last ${IS_PROD ? 2 : 1} versions`, IS_PROD && 'iOS 9'].filter(
        p => p
      ),
    }),
  ],
})
