module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'promise', 'react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'react-native/no-inline-styles': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/rules-of-hooks': 0,
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'react-hooks/exhaustive-deps': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react-native',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '~/**',
                group: 'parent',
                position: 'before',
              },
              {
                pattern: '@*/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
      },
    },
  ],
};
