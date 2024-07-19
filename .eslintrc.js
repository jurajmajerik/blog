module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'airbnb',
      'prettier', // Add this line
    ],
    plugins: ['prettier'], // Add this line
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }], // Add this line
      'quotes': ['error', 'single'], // Ensure ESLint is also using single quotes
      // other rules...
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  