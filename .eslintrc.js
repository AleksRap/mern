const rulesCommon = {
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
  'quotes': [2, 'single', 'avoid-escape'],
  'object-curly-spacing': [2, 'always']
}

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: '*.js',
  rules: rulesCommon,
  overrides: [
    {
      files: [ "server/**/*.ts", "server/**/*.tsx" ],
      extends: [
        'airbnb-typescript/base',
      ],
      plugins: [
        "import"
      ],
    },
    {
      files: [ "client/**/*.ts", "client/**/*.tsx" ],
      extends: [
        'airbnb-typescript',
        'plugin:react-hooks/recommended'
      ],
      parserOptions: {
        project: 'client/tsconfig.json',
      },
      rules: {
        ...rulesCommon,
        'jsx-a11y/label-has-associated-control': [ 2, {
          "components": [ "Label" ],
          "required": {
            "some": [ "nesting", "id" ]
          },
          "allowChildren": false,
        }],
        'react/button-has-type': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
      },
    }
  ]
};
