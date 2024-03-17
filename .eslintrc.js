module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "",
  plugins: ["react", "import"],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/warnings"],
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
  rules: {
    "react/react-in-jsx-scope": "off" /* 'React' must be in scope when using JSX 에러 해결 */,
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroups: [{ pattern: "{react*, react*/**}", group: "external", position: "before" }],
        pathGroupsExcludedImportTypes: ["react"],

        groups: ["sibling", "parent"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
};
