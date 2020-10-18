module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    /** @see https://github.com/prettier/eslint-config-prettier#installation */
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    // CI で warn も検知可能にするため、全て error にする
    "only-error",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
  },
}
