module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  extends: [
    'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
    // 'prettier/@typescript-eslint', // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
    // 'plugin:prettier/recommended', // 配置了这个，你得在目录里面放置.prettierrc.js文件才行
  ],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'off', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    // eslint 模块 --------------- https://eslint.bootcss.com/docs/rules/
    // 自定义规则
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // 关闭console告警
    'no-console': 'off',
    // 未使用的参数
    'no-unused-vars': 'off',
    // (x) => {} 箭头函数参数只有一个时是否要有小括号。
    'arrow-parens': 'off',
    // for in 中必须有if判断 比如判断hasOwnProperty
    'guard-for-in': 'error',
    // error; 结尾必须有分号
    semi: [2, 'always'],
    // 禁止在函数的 ( 前面有空格。存在async () => 这种问题，所以干掉这个
    'space-before-function-paren': 'off',
    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    'comma-dangle': ['error', 'only-multiline'],
    // 规定逗号后面必须添加空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 缩进字节数 // case 子句将相对于 switch 语句缩进 2 个空格。
    indent: ['error', 2, { SwitchCase: 1 }],
    // 字符串最大长度
    'max-len': 'off',
    // 字面量属性不严格使用""号
    'quote-props': ['error', 'as-needed'],
    // 允许在空行使用空白符\允许在注释块中使用空白符
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    // 允许使用常量表达式 if(true)
    'no-constant-condition': 'off',
    // 使用单引号代替双引号 | 允许字符串使用``
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-unused-expressions': 'off',
    // 允许单行中不使用大括号 if(true) xxx
    curly: ['error', 'multi-line'],
    // 这禁止掉 空格报错检查
    'no-irregular-whitespace': 'off',
    // 使用驼峰命名
    camelcase: 'off',
    //es6 模块 -------------------
    // error; 箭头函数的箭头前后必须有空格
    'arrow-spacing': [2, { before: true, after: true }],
    // error; 禁止import重复模块
    'no-duplicate-imports': 2,
    // error; 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 非空文件末尾至少存在一行空行（或缺少换行）off 不用
    'eol-last': ['off'],
    // 关于引入的顺序，这玩意有点智障，关了
    'import/order': ['off'],
    // 允许使用obj["a"]和obj.a的模式
    'dot-notation': ['off'],
    // react 模块 ------------------ https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    // 不需要使用displayName
    'react/display-name': 'off',
    // ts 模块 --------------------- https://github.com/typescript-eslint/typescript-eslint/tree/v2.34.0/packages/eslint-plugin/docs/rules
    // 未使用的参数
    '@typescript-eslint/no-unused-vars': ['off'],
    // 返回值没必要，比如生命周期就没必要加void
    '@typescript-eslint/explicit-function-return-type': ['off'],
  },
  settings: {
    react: {
      version: 'detect', // 告诉 eslint-plugin-react 自动检测 React 的版本
    },
  },
};
