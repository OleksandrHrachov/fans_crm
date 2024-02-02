module.exports = {
  eslint: {
    enable: true,
    mode: 'extends' || 'file',
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions;
    }
  }
};
