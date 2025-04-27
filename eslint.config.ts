import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";

export default tseslint.config(
  // 👇 Ignore config files
  { ignores: ["dist", "eslint.config.ts", "vite.config.ts", "tsconfig*.json"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["src/**/*.{ts,tsx}"], // 👈 Only lint files inside src/
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.app.json"],
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
);
