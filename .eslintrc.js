module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "semistandard", "plugin:sonarjs/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
