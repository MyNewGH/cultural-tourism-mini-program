module.exports = {
  extends: ['taro/react', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'prettier', '@typescript-eslint'],
  rules: {
    // "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    // '@typescript-eslint/no-unused-vars': ['off', { varsIgnorePattern: 'Taro' }],
    'no-unused-vars': ['off', { varsIgnorePattern: 'Taro' }],
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: [1, 'single'],
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': ['off', { functions: false }],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    camelcase: 0,
    'no-irregular-whitespace': 0,
    'eol-last': 0,
    'no-const-assign': 2,
    'import/no-commonjs': 'off',

    // react rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': ['error', 2],
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-key': 2,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'no-mixed-spaces-and-tabs': 0,

    // import rules
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    // prettier rules
    'prettier/prettier': [
      'error',
      {
        printWidth: 150,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        bracketSpacing: true,
        trailingComma: 'all',
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        arrowParens: 'always',
        insertPragma: false,
        requirePragma: false,
        proseWrap: 'never',
        htmlWhitespaceSensitivity: 'strict',
        endOfLine: 'lf',
      },
    ],
  },
  globals: {
    definePageConfig: 'readonly',
  },
};
