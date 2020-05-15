const webpackTools = {
  jsLoaders: isDev => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
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
