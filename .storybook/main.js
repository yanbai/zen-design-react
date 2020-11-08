const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register'
  ],
  webpackFinal: (config, { configType }) => {
    console.log(configType)
    console.log('---------above is configType--------------')
    config.resolve = {
      alias: {
        'src': path.resolve(__dirname, '../src'),
        'assets': path.resolve(__dirname, '../src/assets')
      }
    }
    config.module.rules.push({
      test: /\.mdx$/,
      exclude: [/node_modules/],
      include: [
        path.resolve(__dirname, '../src')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})]
            // remarkPlugins: [
            //   [
            //     codesandbox,
            //     {
            //       mode: 'iframe',
            //       query: {
            //         fontsize: 14
            //       },
            //       autoDeploy: true
            //     }
            //   ]
            // ]
          }
        }
      ]
    })
    return console.dir(config, { depth: null }) || config
  }
};
