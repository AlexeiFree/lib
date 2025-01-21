module.exports = {
  parserOptions: {
    project: '../tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    sourceType: 'module',
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@nrwl/nx/typescript',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  plugins: ['@nrwl/nx', 'prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Angular packages.
          ['^angular', '^@?\\w'],
          // RxJS.
          ['^rxjs', '^@?\\w'],
          // Publishable packages.
          ['^@my-lib(/.*|$)'],
          // Storybook common imports.
          ['^(@storybook-common)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-static-field',
          'protected-static-field',
          'private-static-field',
        ],
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'off',
        },
      },
    ],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': [
      'off',
      {
        checkParameterProperties: false,
        ignoreInferredTypes: true,
      },
    ],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    'no-var': 2,
    'no-else-return': 'warn',
    'prefer-template': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-lifecycle-call': 'warn',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/component-class-suffix': 'warn',
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    '@angular-eslint/use-injectable-provided-in': 'warn',
    '@angular-eslint/no-conflicting-lifecycle': 'warn',
    '@angular-eslint/no-input-prefix': 'warn',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/use-component-selector': 'warn',
    '@angular-eslint/use-pipe-transform-interface': 'error',
  },
};
