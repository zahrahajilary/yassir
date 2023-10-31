module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": ["error", 2],
    "semi": ["error", "never"],
    "space-infix-ops": "error",
    "space-before-blocks": "error",
    "keyword-spacing": ["error", { "before": true }],
    "comma-spacing": ["error", { "before": false, "after": true }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    React: 'readonly'
  }
}