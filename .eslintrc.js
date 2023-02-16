module.exports = {
    /**
     * 默认情况下，ESLint会在所有父级目录里寻找配置文件，一直到根目录。
     * 为了将ESLint限制在一个特定的项目，设置root: true；
     * ESLint一旦发现配置文件中有 root: true，就会停止在父级目录中寻找。
     */
    root: true,
    // 指定解析器
    // babel-ESLint: 一个对Babel解析器的包装，使其能够与ESLint兼容。
    // parser: 'babel-eslint',
    // 设置解析器能帮助ESLint确定什么是解析错误。
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: "babel-eslint",
      // 指定js版本。语法上的支持
      ecmaVersion: 6,
      sourceType: "module",
      allowImportExportEverywhere: true,
    },
    // 脚本在执行期间访问的额外的全局变量
    // globals: {},
    // env: 指定脚本的运行环境
    env: {
      // 一个环境定义了一组预定义的全局变量。
      browser: true,
      // 会自动开启es6语法支持。
      es6: true,
      node: true,
    },
    // 使用第三方插件。全局安装的 ESLint 实例只能使用全局安装的ESLint插件。本地同理，不支持混用。
    plugins: ["html", "vue"],
    // 配置文件从基础配置中继承已启用的规则。
    /**
     * eslint:recommended  启用核心规则，在规则页面中被标记为 √ 的。
     */
     // 其他配置。。。
    extends: [
      // plugin:(此处不能有空格)包名/配置名称。解析时plugin是解析成 eslint-plugin-vue。如果有空格会解析失败，eslint-plugin- vue。
      // plugin可以省略包名的前缀 eslint-plugin-
      'plugin:vue/essential', //继承 vue 的标准特性
      'eslint:recommended',
      "prettier",
    ],
  
    /**
     * 每个规则有【3】个错误级别。
     * off或0: 关闭该规则；
     * warn或1: 开启规则，使用警告级别的错误，不会导致程序退出；
     * error或2: 开启规则，使用错误级别的错误，当被触发的时候，程序会退出。
     */
    rules: {
      /**
       * 【================================================ Possible Errors ================================================】
       * 这些规则与JavaScript代码中可能的错误或逻辑错误有关。
       */
      // 强制"for"循环中更新子句的计算器朝着正确的方向移动
      "for-direction": 2,
      // 禁止function定义中出现重名参数
      "no-dupe-args": 2,
      // 禁止对象字面量中出现重复的key
      "no-dupe-keys": 2,
      // 禁止出现重复的case标签
      "no-duplicate-case": 2,
      // 禁用 console
      "no-console": 1,
      // 'no-console': process.env.NODE_ENV === 'production' ? 'error': 'off',
      /* // 还可以写表达式，厉害了~
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error': 'off', */
      
      // ......
    },
  };
  