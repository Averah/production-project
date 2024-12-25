import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import i18Next from "eslint-plugin-i18next";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("airbnb", "plugin:i18next/recommended", "plugin:storybook/recommended"),
    {
        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
            i18next: i18Next,
            "react-hooks": fixupPluginRules(reactHooks),
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                __IS_DEV__: true,
                __API__: true,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": 2,
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            indent: [2, 4],

            "react/jsx-filename-extension": [2, {
                extensions: [".js", ".jsx", ".tsx"],
            }],

            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "off",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",

            "i18next/no-literal-string": ["error", {
                markupOnly: true,
                ignoreAttribute: ["to", "data-testid"],
            }],

            "max-len": ["error", {
                ignoreComments: true,
                code: 120,
            }],

            "linebreak-style": "off",
            "no-param-reassign": "off",
            "jsx-a11y/no-static-element-interactions": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "no-undef": "off",
        },
    },
    {
        files: ["**/src/**/*.test.{ts,tsx}", "**/src/**/*.stories.{ts,tsx}"],

        rules: {
            "i18next/no-literal-string": "off",
            "max-len": "off",
        },
    },
];