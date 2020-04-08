module.exports = {
  "extends": "airbnb",
  "env": {
    "es6": true,
    "browser": true,
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",

  ],
  "rules": {
    "linebreak-style": 0,
    "no-shadow": 0,
    "no-unused-expressions": 0,
    "import/prefer-default-export": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-indent-props": [2, 2],
    "eslint-disable-next-line no-undef": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};