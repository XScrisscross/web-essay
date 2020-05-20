1.webpack作用
    代码转换,文件优化,代码分割,模块合并,自动刷新,代码校验,自动发布
    node遵从commonjs规范,打包时(node.js)
3.指令
  npx webpack (0配置,自动打包,不使用)
  npx webpack --config webpack.config.a.js (指定打包文件入口)
  npm run create  (npm中可指令执行)
  npm run build -- --config webpack.config.a.js  (指令传参)