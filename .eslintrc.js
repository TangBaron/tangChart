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
  },
};
