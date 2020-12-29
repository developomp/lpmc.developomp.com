module.exports = {
  lintOnSave: false,
  outputDir: "./dist/client",
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
