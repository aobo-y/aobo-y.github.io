exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /@fortawesome\/react-fontawesome/,
      loader: 'null-loader'
    })
  }
}
