module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': 'error',
    'no-empty': 'error',
    indent: 'off',
    'no-trailing-spaces': 'error',
    'no-return-assign': 0,
    'no-param-reassign': 0,
  },
}
