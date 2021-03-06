const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],

  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
          '@components': resolvePath('src/components'),
        },
      },
    };
  },
};
