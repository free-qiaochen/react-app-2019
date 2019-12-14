// const { override, fixBabelImports } = require('customize-cra')

module.exports = function override(config, env) {
  console.log(process.env.NODE_ENV,'--')
  // 关于webpack的相关配置
  return config;
};