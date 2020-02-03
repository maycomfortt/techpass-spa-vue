module.exports = {
    root: true,
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript'
    ],
    rules: {},
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
    },
    plugins: [
        'vue'
    ]
};
