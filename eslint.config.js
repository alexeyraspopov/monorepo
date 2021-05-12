module.exports = {
  env: { es2021: true, browser: true, jest: true },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: 'eslint:recommended',
};
