const CopyPlugin = require('copy-webpack-plugin');
const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.plugins.push(
    new CopyPlugin({
      patterns: [{ from: '../../dist/packages/jsheroes/dist/jsheroes/assets', to: './assets' }],
    }),
  );

  return config;
});
