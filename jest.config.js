module.exports = {
  testMatch: ['**/__tests__/**/*.spec.js'], // 只测试后缀为 .spec.js 的文件
  runner: 'jest-electron/runner', // 指定测试的 runner
  testEnvironment: 'jest-electron/environment', //  制定测试的环境
};
