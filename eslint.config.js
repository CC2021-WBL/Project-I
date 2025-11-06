import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

// Define stub rules for legacy import/* directives in code comments
const importPlugin = {
  rules: {
    extensions: { meta: {}, create: () => ({}) },
    named: { meta: {}, create: () => ({}) },
  },
};

export default [
  {
    ignores: ['dist/**', '.cache/**', 'node_modules/**', '.parcel-cache/**'],
  },
  js.configs.recommended,
  prettier,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        URL: 'readonly',
        FileReader: 'readonly',
        Image: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'no-underscore-dangle': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'import/extensions': 'off',
      'import/named': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['tests/**/*.js'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
