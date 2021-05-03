// const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 全局引入变量和 mixin
        appendData: `
          @import "~@/assets/less/variable.less";
          @import "~@/assets/less/mixin.less";
        `
      }
    }
  },
  // devServer: {
  //   before (app) {
  //     registerRouter(app)
  //   }
  // },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/'
}
