const webpackTools = {
  jsLoaders: isDev => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ];

    if (isDev) {
      loaders.push('eslint-loader');
    }
    return loaders;
  },
};

module.exports = webpackTools;
