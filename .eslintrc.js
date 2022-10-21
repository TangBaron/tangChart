module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 这里增加一行用于支持后面的测试环境
    jest: true,
  },
  extends: ['airbnb-base'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 0表示关闭规则，1表示警告，2表示错误, 该规则的意思是当一个文件中只有一个导出的时候，需要使用export default
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-sequences': 0,
    'no-loop-func': 0,
    'no-nested-ternary': 0,
  },
};
