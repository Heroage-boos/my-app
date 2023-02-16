# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

```
npm run lint
```



## 代码风格检查  

参考文档
作者：w小p
链接：https://juejin.cn/post/7047682306294677512



## 安装配置eslint和prettier

> `eslint`是一个按照规则执行代码检查的工具，它可以在编码阶段进行静态分析，给出检查报告。搭配一些插件，可以提前暴露问题，给出提示，并进行修复，大大减少执行过程中的bug。

> `prettier`是一个代码格式化（美化）工具，可以按照设定的规则配置进行代码格式化，统一风格；在团队开发过程中使用相同的规则，可以保证最终代码的一致性，避免代码冲突。

首先，先安装配置eslint和prettier工具

### 安装配置eslint

- 安装eslint依赖

  ```json
  {
    "devDependencies": {
      "babel-eslint": "^10.1.0",
      "eslint": "^7.32.0",
      "eslint-plugin-html": "^6.2.0",
      "eslint-plugin-import": "^2.23.4",
      "eslint-plugin-node": "^11.1.0",
      "eslint-plugin-promise": "^5.1.0",
      "eslint-plugin-vue": "^7.15.1",
      "vue-eslint-parser": "^7.10.0"
    }
  }
  复制代码
  ```

  - `eslint`: `ESLint`的核心代码
  - `babel-eslint`: `eslint` 与 `babel` 整合包
  - `eslint-plugin-vue`: `eslint` 与 `vue` 整合包

- 配置eslint规则，在根目录创建 `.eslintrc.js`文件，并添加规则

  ```js
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
    extends: [
      // plugin:(此处不能有空格)包名/配置名称。解析时plugin是解析成 eslint-plugin-vue。如果有空格会解析失败，eslint-plugin- vue。
      // plugin可以省略包名的前缀 eslint-plugin-
      'plugin:vue/essential',
      'eslint:recommended'
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
  
  复制代码
  ```

  如果有需要忽略的文件也可以在 `.eslintignore` 文件中进行配置:

  ```bash
  build/*.js
  src/assets
  public
  dist
  复制代码
  ```

### 安装prettier

`Prettier` 是一个代码格式化工具，但并非针对一种语言，对 `HTML/CSS/JavaScript/Vue/SCSS` 都有效果。可以通过配置文件在不同项目间统一代码格式化，以修正不同编辑器/`IDE` 之间格式化不同的问题。

- 安装依赖

  ```bash
  npm i -D prettier eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli
  复制代码
  ```

  - **prettier**：prettier插件的核心代码
  - **eslint-plugin-prettier**：将prettier作为ESLint规范来使用
  - **eslint-config-prettier**：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
  - **prettier-eslint-cli**: 允许你对多个文件用prettier-eslint进行格式化。

- 配置prettier

  - 在项目的根目录下创建`.prettierrc.js`文件并配置`prettier`代码检查规则:

  ```js
  // .prettierrc.js
  module.exports = {
    // 让prettier使用eslint的代码格式进行校验
    eslintIntegration: true,
    // 缩进
    tabWidth: 2,
    // 使用tab还是空格
    useTabs: false,
    // 最大长度80个字符
    printWidth: 200,
    // 行末分号
    semi: false,
    // 单引号
    singleQuote: true,
    // JSX双引号
    jsxSingleQuote: false,
    // 尽可能使用尾随逗号（包括函数参数）
    trailingComma: "none",
    // 在对象文字中打印括号之间的空格。
    bracketSpacing: true,
    // > 标签放在最后一行的末尾，而不是单独放在下一行
    jsxBracketSameLine: false,
    // 箭头圆括号
    arrowParens: "avoid",
    // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
    insertPragma: false,
    // 行尾换行格式
    endOfLine: "auto",
    HTMLWhitespaceSensitivity: "ignore",
  };
  复制代码
  ```

  - 再更新一下`eslint`的配置，以处理`prettier`和`eslint`的冲突。

  ```js
  // .eslintrc.js
  module.exports = {
    // 其他配置。。。
    extends: [
      //继承 vue 的标准特性
      "plugin:vue/essential",
      "eslint:recommended",
      "prettier",
    ],
    // 其他配置不变。。。
  };
  复制代码
  ```

`eslint`和`prettier`安装配置完之后，接下来配置`husky + lint-staged + commitlint`, 给commit操作添加前置钩子，实现commit提交代码前自动执行 **代码检查** 和 **代码格式化** 操作

## husky + lint-staged + commitlint 安装配置

> husky，是一个为 git 客户端增加 hook 的工具。安装后，它会自动在仓库中的 .git/ 目录下增加相应的钩子；比如 pre-commit 钩子就会在你执行 git commit 的触发。我们可以在 pre-commit 中实现一些比如 lint 检查、单元测试、代码美化等操作。当然，pre-commit 阶段执行的命令当然要保证其速度不要太慢，每次 commit 等很久体验不好。

> lint-staged，一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具；这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了，可能导致项目改动很大。所以这个 lint-staged，对团队项目和开源项目来说，是一个很好的工具，它是对个人要提交的代码的一个规范和约束。

**新版husky的工作原理**
 新版的husky从git 2.9开始引入一个新功能core.hooksPath，core.hooksPath可以让你指定git hooks所在的目录而不是使用默认的.git/hooks/，这样husky可以使用`husky install`将git hooks的目录指定为.husky/，然后使用`husky add`命令向.husky/中添加hook。通过这种方式我们就可以只添加我们需要的git hook，而且所有的脚本都保存在了一个地方（.husky/目录下）因此也就不存在同步文件的问题了。

### 安装配置husky

- 安装husky

  ```bash
  npm i husky --save-dev
  复制代码
  ```

- 在`package.json` 中添加` prepare` 脚本

  ```json
  {
    ......
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview",
      "prepare": "husky install", // 新增prepare脚本
    }
    ......
  }
  复制代码
  ```

- 执行prepare脚本

  ```bash
  npm run prepare
  复制代码
  ```

  执行 `husky install`命令时，该命令会创建`.husky/`目录并指定该目录为git hooks所在的目录。

- 添加git hooks，运行一下命令创建git hooks

  ```bash
  npx husky add .husky/pre-commit "npm run lint"
  复制代码
  ```

  运行完该命令后我们会看到`.husky/`目录下新增了一个名为`pre-commit`的shell脚本。也就是说在在执行git commit命令时会先执行pre-commit这个脚本。`pre-commit`脚本内容如下：

  ```bash
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  
  npm run lint
  复制代码
  ```

  该脚本的功能就是执行npm run lint这个命令

- 添加commit-msg脚本, 执行命令

  ```bash
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
  复制代码
  ```

  运行完该命令后我们会看到`.husky/`目录下新增了一个名为`commit-msg`的shell脚本。commitlint可以对commit massage进行格式规范校验，`commit-msg`脚本内容如下：

  ```bash
  \#!/bin/sh
  "$(dirname "$0")/_/husky.sh"
  
  npx --no-install commitlint --edit "$1"
  复制代码
  ```

### 安装配置 `lint-staged`

- ### 安装`lint-staged`

  ```bash
  npm i lint-staged --save-dev
  复制代码
  ```

- 在 `package.json` 文件中配置 `lint` 的命令

  ```json
  {
    ......
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview",
      "prepare": "husky install", // 新增prepare脚本
      "lint": "lint-staged --allow-empty"
    }
    ......
  }
  复制代码
  ```

- 配置`lint-staged`命令

  从 v3.1 开始，可以使用不同的方式进行 lint-staged 配置：

  - 在`package.json`文件中配置

    ```json
    {
      ......
      "lint-staged": {
        "src/**/!(*.min).js": [
          "prettier --write",
          "eslint --fix"
        ],
        "src/**/*.{ts,vue}": [
          "prettier --write",
          "eslint --fix"
        ],
        "src/**/*.{ts,js,vue,html,css,scss,sass,stylus}": [
          "prettier --write"
        ]
      },
      ......
    }
    
    复制代码
    ```

    `"src/**/!(*.min).js"`表示src目录下所有除了`.min.js`结尾的`.js`文件都需要格式化

  - 利用`.lintstagedrc`文件进行配置，支持JSON或YML格式语法

  - 利用`lint-staged.config.js` JS格式的文件进行配置

    ```js
    "use strict";
    module.exports = {
      "{src,server}/**/!(*.min).js": [
        "eslint --fix",
        "prettier --write"
      ],
      "{src,server}/**/*.{ts,vue}": [
        "eslint --fix",
        "prettier --write"
      ],
      "src/**/*.{html,css,scss,sass,stylus}": [
        "prettier --write"
      ]
    }
    复制代码
    ```

  - 使用 --config 或 -c 标志传递配置文件进行配置

最后配置下`commitlint`，用来定制commit提交规范

### commitlint定制提交规范

`commitlint`是什么： 当我们运行 `git commmit -m 'xxx'` 时，用来**检查 `xxx` 是否满足固定格式的工具。**

为什么使用`commitlint`：团队中规范了 commit 规范可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。

- `commitlint`安装

  ```bash
  npm install --save-dev @commitlint/config-conventional @commitlint/cli
  复制代码
  ```

  - `@commitlint/cli` 是commitlint提供的命令行工具，安装后会将cli脚本放置在./node_modules/.bin/目录下
  - `@commitlint/config-conventional` 是社区中一些共享的配置，我们可以扩展这些配置，也可以不安装这个包自定义配置

- 定制提交格式

  代码提交基本格式为：`<type>(scope?): <subject>`

  > type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
  >  scope: 一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
  >  Subject: 一句话描述此次提交的主要内容，做到言简意赅

- 常用的type类别

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改bug                                                |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| update   | 普通更新                                               |

使用方式：

```bash
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'fix(account): 修复xxx的bug'
复制代码
```

- 在项目根目录创建名为commitlint.config.js的文件，代码如下：

  ```js
  /*
   * @Description: commit-msg提交信息格式规范
   * 
   * commit-msg格式: <type>(scope?): <subject>
   *   - type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
   *     - build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
   *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
   *     - ci: 持续集成修改
   *     - docs: 文档修改
   *     - feat: 新特性、新功能
   *     - fix: 修改bug
   *     - perf: 优化相关，比如提升性能、体验
   *     - refactor: 代码重构
   *     - revert: 回滚到上一个版本
   *     - style: 代码格式修改, 注意不是 css 修改
   *     - test: 测试用例修改
   *   - scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
   *   - Subject：一句话描述此次提交的主要内容，做到言简意赅
   */
  module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'build', 'chore', 'revert', 'style', 'test'],
      ],
      'type-empty': [2, 'never'], // <type> 不能为空
      // 'type-case': [2, 'always', 'lower-case'], // <type>格式小写
      'type-case': [0],
      'scope-empty': [0],
      // 'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写
      'scope-case': [0],
      'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
      // 'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
      'subject-full-stop': [0, 'never'],
      // 'subject-case': [2, 'never', 'lower-case'],
      'subject-case': [0, 'never'],
        // case可选值
        // 'lower-case' 小写 lowercase
        // 'upper-case' 大写 UPPERCASE
        // 'camel-case' 小驼峰 camelCase
        // 'kebab-case' 短横线 kebab-case
        // 'pascal-case' 大驼峰 PascalCase
        // 'sentence-case' 首字母大写 Sentence case
        // 'snake-case' 下划线 snake_case
        // 'start-case' 所有首字母大写 start-case
  
      'header-max-length': [0, 'always', 72], // header 最长72
      // 'body-leading-blank': [2, 'always'], // body换行
      // 'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
    },
  };
  复制代码
  ```

  rule由name和配置数组组成，如：`'name: [0, 'always', 72]'`，数组中第一位表示level，可选`0,1,2`，0为disable，1为warning，2为error，第二位表示是否应用，可选`always|never`，第三位表示该rule的值。

- 如果commit message的格式不符合上述要求，则会报错，检查不通过

  ```bash
  ✔ Preparing...
  ✔ Running tasks...
  ✔ Applying modifications...
  ✔ Cleaning up...
  ⧗   input: 修改bug
  ✖   subject may not be empty [subject-empty]
  
  ✖   found 1 problems, 0 warnings
  ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
  
  husky - commit-msg hook exited with code 1 (error)
  复制代码
  ```

至此，整套流程工具全部配置完毕，按照下面操作：

- 代码改动（lint-staged中配置的指定目录指定文件的改动才进行格式化）
- 执行`git add .`将改动的内容添加到暂存区
- 执行`git commit -m "feat: 新增xxx功能"`

程序会自动执行 代码检查、代码格式化、然后commit提交。

当然，如果暂时不想commit代码，可以在执行 `git add .` 命令后直接执行 `npm run lint`进行代码检查和格式化，接着继续进行开发。

以上是团队开发时，在项目中统一配置的规则，团队成员只需要拉取代码，执行`npm install`后，即可使用。

我们也可以使用VSCode搭配一些插件来实现代码检查、提示和格式化操作，下面分享下VSCode中的eslint配置。

### VSCode配置eslint及格式化

可以在vscode中配置eslint、prettier和vetur等插件，在代码编辑时根据eslint错误等级进行实时检查和提示，保存文件时也能进行自动修复和格式化，给开发带来便利。

有些项目可能并没有配置像husky+lint-staged+commitlint+eslint这样一套规范流程，也有一些项目并不是脚手架搭建的，所以使用vscode搭配插件进行开发，非常适用。

接下来进行vscode的配置：

### 安装VsCode扩展插件

- 首先需要安装`Eslint`、`Prettier`、`Vetur`插件。

- 然后打开`setting.json`文件，添加以下配置，这样在 VScode 中保存（ctrl+s）的时候就会进行自动格式化：

  ```js
  {
    "eslint.alwaysShowStatus": true,
    // Run the linter on save (onSave) or on type (onType)
    "eslint.run": "onType",
    // #每次保存的时候自动格式化
    "editor.formatOnSave": false,
    // #每次保存的时候将代码按eslint格式进行修复
    // "eslint.autoFixOnSave": false,
    // 下面是新版本vscode配置方式
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "html",
        "autoFix": true
      },
      {
        "language": "vue",
        "autoFix": true
      },
    ],
    "vetur.format.options.tabSize": 2,
    // html格式化依赖  默认为none使用内置的prettyhtml进行格式化 #这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // 让vue中的js按编辑器自带的ts格式进行格式化 #没有下边这个 上边不生效
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
        // #vue组件中html代码格式化样式
        // "preserve_newlines": true, // 允许空行
        // "wrap_attributes": "force-aligned",
        // "wrap_attributes": "force-expand-multiline",
        // "wrap_attributes": "aligned-multiple",
        "wrap_attributes": "preserve-aligned",
        "wrap_line_length": 0,
        "indent_size": 2,
        // "end_with_newline": true
      },
    },
    // 让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    "prettier.semi": true, // 是否添加分号
    "prettier.tabWidth": 2, // 每个制表符占用的空格数 (根据项目的代码规范来设置)
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.singleQuote": true, // 单引号包裹字符串
    "prettier.printWidth": 600, // 单行代码的最大宽度
    "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
    "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
    "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
    // "vetur.validation.template": true, // 用于检查代码的 <template> 部分
    // 比如vue中methods的方法 init () {} 去掉init和()之间的空格变成 init() {}
    "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
    // es5风格的函数名与圆括号之间是否加空格
    // 比如 function init () {} 去掉init和()之间的空格变成 function init() {}
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "[vue]": {
      // vue文件使用vetur进行格式化
      "editor.defaultFormatter": "octref.vetur"
    },
    "[javascript]": {
      // "editor.defaultFormatter": "vscode.typescript-language-features"
      "editor.defaultFormatter": "esbenp.prettier-vscode"
      // 可以单独给指定类型文件进行自动保存，可以和editor.codeActionsOnSave共存
      // "editor.formatOnSave": true
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
      // "editor.defaultFormatter": "HookyQR.beautify"
      // 可以单独给指定类型文件进行自动保存，可以和editor.codeActionsOnSave共存
      // "editor.formatOnSave": true
    },
    "[scss]": {
      "editor.defaultFormatter": "michelemelluso.code-beautifier"
      // 可以单独给指定类型文件进行自动保存，可以和editor.codeActionsOnSave共存
      // "editor.formatOnSave": true
    },
  }
  复制代码
  ```

需要注意：如果全局和项目局部都安装了eslint相关依赖的话，VScode中会检测不到，所以全局和项目局部只能选其一。

VsCode中的配置可以根据项目开发规范或者自己的习惯进行定制和调整























































类型描述ci持续集成修改docs文档修改feat新特性、新功能fix修改bugperf优化相关，比如提升性能、体验refactor代码重构revert回滚到上一个版本style代码格式修改, 注意不是 css 修改test测试用例修改build编译相关的修改，例如发布版本、对项目构建或者依赖的改动chore其他修改, 比如改变构建流程、或者增加依赖库、工具等update普通更新

作者：w小p
链接：https://juejin.cn/post/7047682306294677512
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
