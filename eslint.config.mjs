import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [ "warn", { argsIgnorePattern: "^_" } ],
      "no-console": "warn",
      "prettier/prettier": [ "error", {
        "singleQuote": true,
        "semi": true,
        "tabWidth": 2,
        "trailingComma": "es5",
        "printWidth": 100,
        "bracketSpacing": true,
        "arrowParens": "avoid"
      } ]
    },
    plugins: [ "prettier" ]
  }
];

export default eslintConfig;
