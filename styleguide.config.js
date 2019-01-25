const path = require('path')
const webpackConfig = require('./config/webpack.config.dev.js')
const packageInfo = require('./package.json')

module.exports = {
  webpackConfig,
  version: `${packageInfo.version}`,
  styleguideDir: 'build/docs/public',
  sections: [
    {
      name: 'Components',
      components: ['src/components/**/[A-Z]*.js'],
    },
  ],
  require: [
    path.join(__dirname, 'src/less/common.less'),
  ],
  context: {
  },
  styles: {
    StyleGuide: {
      content: {
        maxWidth: 1300,
      },
    },
  },
  title: 'Passport Component',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  previewDelay: 1000,
  usageMode: 'expand',
}
