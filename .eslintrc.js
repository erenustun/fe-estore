module.exports = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ['.eslintrc.js', 'node_modules', 'public', '.next'],
  rules: {
    'no-unused-expressions': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
