/* eslint-disable no-undef */
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
    "quotes": ["warn", "double"],
    "react/no-unescaped-entities": 0,
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-brace-presence": [2, {"props": "never", "children": "never"}],
    "react/jsx-curly-newline": [2, {"multiline": "consistent", "singleline": "consistent"}],
    "react/jsx-curly-spacing": [2, {when: "never", children: true}],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2, {checkAttributes: true, indentLogicalExpressions: true}],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [2, {maximum: 3}],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-wrap-multilines": [2, {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }]
  }
};
