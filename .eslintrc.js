module.exports = {
  extends: [
    'airbnb-typescript/base',
  ],
  "plugins": ["import"],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: '*.js',
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'func-call-spacing': 2, // instead of no-spaced-func
    'no-prototype-builtins': 0,
    'no-spaced-func': 0, // deprecated
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-trailing-spaces': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
  }
};
