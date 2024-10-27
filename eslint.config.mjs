import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest', // For modern JavaScript features
      sourceType: 'module', // Enables ES6 module syntax (import/export)
    },
    rules: {
      // General JavaScript Best Practices
      'no-unused-vars': 'warn', // Warn on variables defined but never used
      'no-console': 'warn', // Warn on console.log() calls (useful in production)
      eqeqeq: ['error', 'always'], // Enforce the use of === and !==
      curly: 'error', // Require curly braces around blocks
      'arrow-body-style': ['error', 'as-needed'], // Enforce concise arrow function body syntax when possible

      // React-specific rules
      'react/jsx-uses-react': 'error', // Prevent React being marked as unused
      'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being incorrectly marked as unused
      'react/react-in-jsx-scope': 'off', // React 17+ no longer requires importing React in JSX files
      'react/prop-types': 'off', // Disable prop-types if you're using TypeScript or prefer not to use prop-types

      // Import Plugin Rules
      'import/order': [
        'error',
        {
          // Enforce a clean import order (absolute imports first)
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error', // Ensure imports point to a file/module that exists
      'import/no-duplicates': 'error', // Disallow duplicate imports

      // Accessibility (JSX A11y)
      'jsx-a11y/anchor-is-valid': 'warn', // Warn if anchors don't have valid hrefs
      'jsx-a11y/alt-text': 'warn', // Warn if images don't have alt attributes for accessibility

      // Prettier integration
      'prettier/prettier': 'error', // Ensure Prettier formatting is enforced as an ESLint error
    },
  },
  pluginJs.configs.recommended, // JavaScript recommended rules
  pluginReact.configs.flat.recommended, // React recommended rules
  pluginImport.configs.recommended, // Enforce clean import/export practices
  pluginJsxA11y.configs.recommended, // Enforce accessibility best practices in JSX
];
