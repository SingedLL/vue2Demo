const path = require('path')
const isProduction = process.env.NODE_ENV !== 'development'
const isMock = !isProduction && process.env.IS_MOCK === 'true'

// gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['html', 'js', 'css']

// 代码打包之后取出console.log压缩代码
const TerserPlugin = require('terser-webpack-plugin')

// 图形化打包详情
// const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve (dir) {
  return path.join(__dirname, dir)
}
console.log('L__isMock', isMock)
module.exports = {
  publicPath: '/',
  assetsDir: './assets',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  productionSourceMap: false,
  // runtimeCompiler: true, // 运行时报错配置

  devServer: {
    port: 8086,
    open: true,
    hot: true,
    // 在发送请求时， 先执行before
    // 配置mock
    // before: isMock ? require('./serve/index.js') : null
    proxy: {
      '/api': {
        target: 'http://localhost:8089/'
      }
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch') // 移除prefetch插件, 避免加载多余的资源
    // config.plugins.delete('preload');  // 移除preload插件，避免加载多余的资源
    config.optimization.minimize(true) // 压缩响应的app.json返回的代码压缩
    config.optimization.splitChunks({
      chunks: 'all'
    })

    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: (config) => {
    // 配置CDN
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      vuex: 'Vuex'
    }
    if (isProduction) {
      console.log('gzip压缩')
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      )
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名
          threshold: 10240, // 对10K以上的数据进行压缩
          minRatio: 1, // 压缩率小于1才会压缩
          deleteOriginalAssets: false // 是否删除源文件
        })
      )
      // 展示打包图形化信息
      // config.plugins.push(
      //   new BundleAnalyzer()
      // )

      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            }
          }
        }
      }

      // 打包文件大小配置
      config.performance = {
        ...config.performance,
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          // Vant 自定义主题
          // 直接覆盖变量
          // 'text-color': '#111',
          // 'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: 'true; @import "./src/theme/common.less";'
        }
      }
    }
  }
  // transpileDependencies: [
  //   'vuetify'
  // ],
}
