module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
