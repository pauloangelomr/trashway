module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {ecmaVersion: "latest", sourceType: "module", ecmaFeatures: {
    jsx: true
  }},
  plugins: ["@typescript-eslint", "react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": 0,
    "semi": ["error", "always"],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "object-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "quotes": ["error", "double"],
    "react/no-unescaped-entities": 0
  }
};
