module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "never"
    }],
    //后面为分号
    "semi": ["error", "never"],
    //字符串带双引号
    "quotes": ["error", "single"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "document": true,
    "localStorage": true,
    "window": true,
    "AMap": true
  }
}
