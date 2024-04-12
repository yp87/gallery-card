module.exports = {
  //parser: '@babel/eslint-parser', // Specifies the ESLint parser
  extends: [
    '@eslint-recommended', // Uses the recommended rules from eslint-plugin
    'eslint-config-prettier', // Uses eslint-config-prettier to disable ESLint rules from eslint-plugin that would conflict with prettier
    //'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    experimentalDecorators: true,
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "error",
    "no-unused-vars": "error",
    "consistent-return": 2,
    "eqeqeq": [2, "smart"],
    "guard-for-in": 2,
    "lines-around-comment": [
      2,
      {
        "beforeBlockComment": true,
        "allowBlockStart": true
      }
    ],
    "max-nested-callbacks": [2, 3],
    "newline-after-var": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-debugger": 2,
    "no-else-return": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-new-object": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-undef": 0,
    "no-undef-init": 2,
    "no-unreachable": 2,
    "no-with": 2,
    "operator-assignment": [2, "always"],
    "semi": [2, "always"],
    "semi-spacing": 2,
    "strict": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "accessor-pairs": 0,
    "sonarjs/cognitive-complexity": 0,
    "unicorn/no-array-method-this-argument": 0,
    "no-async-promise-executor": 0
  }
};