module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "indent": [2, 4], // 4 spaces for indentation
        "max-len": [2, 120], // 120 max line length
        "function-paren-newline": ["error", "consistent"],
        "import/prefer-default-export": "off"
    },
};
