const path = require('path');
const { alias } = require('react-app-rewire-alias');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StyleLintPlugin({
          configFile: path.resolve(__dirname, '.stylelintrc.json'),
          files: path.resolve(__dirname, 'src/styles/**/*.{sass,scss}'),
          failOnError: false,
        })
      );
    }

    alias({
      '@api': './src/api',
      '@assets': './src/assets',
      '@components': './src/components',
      '@hooks': './src/hooks',
      '@pages': './src/pages',
      '@redux': './src/redux',
      '@styles': './src/styles',
    })(config);

    return config;
  },
};
