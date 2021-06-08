module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
        "jest": true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': ['warn', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'comma-dangle': ['warn', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
        }],
        'space-before-function-paren': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'space-infix-ops': ['error', {'int32Hint': false}],
        'comma-spacing': ['error', {'before': false, 'after': true } ]
    }
};