module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': [
      0, 
      { caseSensitive: false }
    ],
    'comma-dangle': 0,
    'max-len': 0,
    'object-curly-spacing': 0,
    'arrow-body-style': 0,
    'no-unused-expressions': 0,
  }
}
