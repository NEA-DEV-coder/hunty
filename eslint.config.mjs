import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

const isProduction = process.env.NODE_ENV === "production";

eslintConfig.push({
  rules: {
    // In production builds treat any console usage as an error to avoid
    // leaking sensitive data (warnings during development remain helpful).
    "no-console": isProduction ? "error" : "warn",
  },
});

export default eslintConfig;
