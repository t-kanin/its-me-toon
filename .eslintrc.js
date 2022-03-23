module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:react/recommended", "eslint:recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "no-extra-semi":"error",
        "react/react-in-jsx-scope":"off"
    }
}
