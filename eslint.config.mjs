import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config} */
export default {
  extends: ['eslint:recommended', daStyle, pluginJs.configs.recommended],
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
  overrides: [
    {
      files: ['**/*.js'],
      languageOptions: {
        sourceType: 'commonjs',
      },
    },
  ],
  languageOptions: {
    globals: { ...globals.browser, ...globals.node },
  },
};
