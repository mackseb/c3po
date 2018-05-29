const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#FF3D00",
      "@avatar-size-base": "40px",
      "@item-hover-bg":  "#FF3D00",
      "@border-color-base": "#FF3D00",
      "@card-head-background":  "#FF3D00"
  },
  })(config, env);
  return config;
};
