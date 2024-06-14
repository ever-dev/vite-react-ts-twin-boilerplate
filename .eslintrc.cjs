module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:eslint-comments/recommended', 'plugin:import/recommended', 'plugin:tailwindcss/recommended', 'prettier', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.cjs', 'jest.setup.ts'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      rules: {
        'no-undef': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: '**/*{.,_}{test,spec,stories}.{js,jsx,ts,tsx}',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  plugins: [
    'react',
    'react-refresh',
    'react-hooks',
    'eslint-comments',
    'sort-destructure-keys',
    'sort-keys-fix',
    '@typescript-eslint',
    'unused-imports',
    'import',
    'unicorn',
  ],
  rules: {
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    camelcase: 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        tabWidth: 2,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        // for redux, setting the state
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/destructuring-assignment': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx', '.js'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
