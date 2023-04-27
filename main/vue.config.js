const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    // TODO：ElementPlus 命名空间
    loaderOptions: {
      scss: {
        // additionalData: `@import "~@/styles/element/index.scss";`
      }
    }
  },
  devServer: {
    port: 9999,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
