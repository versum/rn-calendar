module.exports = async ({ config }) => {
  config.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
