module.exports = {
  devServer: {
    proxy: {
      '/manager/': {
        target: 'http://39.105.155.193:6379',//该包名部署的端口
        changeOrigin: true
      }
    }
  }
}
