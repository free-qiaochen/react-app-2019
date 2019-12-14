// const { override, fixBabelImports } = require('customize-cra')

// module.exports = function override(config, env) {
//   console.log(process.env.NODE_ENV,'--')
//   // 关于webpack的相关配置
//   return config;
// };

const { override, addWebpackAlias, fixBabelImports, addPostcssPlugins } = require('customize-cra');
const path = require('path')

process.env.GENERATE_SOURCEMAP = "false"

// console.log(process.argv)
const length = process.argv.length
if (process.argv[length-1].includes('dev')) {
  process.env.NODE_ENV = 'development'
}
const isProd = process.env.NODE_ENV === 'production'
if(!isProd) {
  process.env.PORT = 3006
}
// console.log(process.env.NODE_ENV)

// 设置打包根路径
const setWebpack = () => config => {
  if(isProd){
    // 关闭sourceMap
    // config.devtool = false;
    // 配置打包后的文件位置
    // config.output.path = __dirname + '../dist/demo/';
    config.output.publicPath = 'https://static-aqs.health.ikang.com/2c/'
    // 添加js打包gzip配置
    // config.plugins.push(
    //   new CompressionWebpackPlugin({
    //     test: /\.js$|\.css$/,
    //     threshold: 1024,
    //   }),
    // )
  }
  return config
}

module.exports = override(
  addWebpackAlias({
    "http": path.resolve(__dirname, "src/http"),
    "assets": path.resolve(__dirname, "src/assets"),
    "components": path.resolve(__dirname, "src/components"),
    "config": path.resolve(__dirname, "src/config"),
    "@": path.resolve(__dirname, "src")
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 40,
    propList: ['*', '!border'],
    selectorBlackList: []
  })]),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  setWebpack()
)