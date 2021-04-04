module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        'prettier/prettier': 0
    },
    settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
