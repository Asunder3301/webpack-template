import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jestPlugin from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import-x"; // Modern, fast version of eslint-plugin-import

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "webpack.*.js", ".git"],
  },
  jestPlugin.configs["flat/recommended"],
  eslintReact.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooksPlugin,
      "import-x": importPlugin,
    },
    rules: {
      // Base JavaScript recommended rules
      ...js.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      eqeqeq: ["error", "always"],
      "no-underscore-dangle": 0,
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
          jsx: "always",
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
