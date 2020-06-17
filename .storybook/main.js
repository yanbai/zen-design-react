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
    return console.dir(config, { depth: null }) || config
  }
};
