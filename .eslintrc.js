module.exports = {
  extends: 'satya164',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
