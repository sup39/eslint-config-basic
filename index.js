/**
 * Copyright (c) 2021-2022 sup39[サポミク]
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

module.exports = {
  rules: {
    /**
     * Possible Problems
     * https://eslint.org/docs/rules/#possible-problems
     */
    // 'array-callback-return': 'warn',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    // 'no-await-in-loop': 'warn',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['warn', {'checkLoops': false}],
    'no-constructor-return': 'warn',
    // 'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    // 'no-promise-executor-return': 'warn',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'warn',
    // 'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    // 'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    // 'no-unmodified-loop-condition': 'warn',
    'no-unreachable': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': ['warn', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    'no-use-before-define': 'warn',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'warn',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /**
     * Suggestions
     * https://eslint.org/docs/rules/#suggestions
     */
    // 'accessor-pairs': 'warn',
    // 'arrow-body-style': 'error',
    // 'block-scoped-var': 'warn',
    // 'camelcase': 'warn',
    // 'capitalized-comments': 'error',
    // 'class-methods-use-this': 'warn',
    // 'complexity': 'warn',
    // 'consistent-return': 'warn',
    // 'consistent-this': 'warn',
    'curly': ['error', 'multi-line'],
    // 'default-case': 'warn',
    // 'default-case-last': 'warn',
    // 'default-param-last': 'warn',
    // 'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    // 'func-name-matching': 'warn',
    // 'func-names': 'warn',
    // 'func-style': 'warn',
    // 'grouped-accessor-pairs': 'warn',
    // 'guard-for-in': 'warn',
    // 'id-denylist': 'warn',
    // 'id-length': 'warn',
    // 'id-match': 'warn',
    // 'init-declarations': 'warn',
    // 'max-classes-per-file': 'warn',
    // 'max-depth': 'warn',
    // 'max-lines': 'warn',
    // 'max-lines-per-function': 'warn',
    // 'max-nested-callbacks': 'warn',
    // 'max-params': 'warn',
    // 'max-statements': 'warn',
    // 'multiline-comment-style': 'error',
    // 'new-cap': 'warn',
    // 'no-alert': 'warn',
    // 'no-array-constructor': 'warn',
    // 'no-bitwise': 'warn',
    // 'no-caller': 'warn',
    'no-case-declarations': 'error',
    // 'no-confusing-arrow': 'warn',
    // 'no-console': 'warn',
    // 'no-continue': 'warn',
    // 'no-delete-var': 'error',
    // 'no-div-regex': 'warn',
    // 'no-else-return': 'warn',
    // 'no-empty': 'warn',
    // 'no-empty-function': 'warn',
    // 'no-eq-null': 'warn',
    // 'no-eval': 'warn',
    // 'no-extend-native': 'warn',
    // 'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 'error',
    // 'no-extra-label': 'warn',
    'no-extra-semi': 'error',
    // 'no-floating-decimal': 'warn',
    'no-global-assign': 'error',
    // 'no-implicit-coercion': 'warn',
    // 'no-implicit-globals': 'warn',
    // 'no-implied-eval': 'warn',
    // 'no-inline-comments': 'warn',
    // 'no-invalid-this': 'warn',
    // 'no-iterator': 'warn',
    // 'no-label-var': 'warn',
    // 'no-labels': 'warn',
    // 'no-lone-blocks': 'warn',
    // 'no-lonely-if': 'warn',
    // 'no-loop-func': 'warn',
    // 'no-magic-numbers': 'warn',
    // 'no-mixed-operators': 'warn',
    // 'no-multi-assign': 'warn',
    // 'no-multi-str': 'warn',
    // 'no-negated-condition': 'warn',
    // 'no-nested-ternary': 'warn',
    // 'no-new': 'warn',
    // 'no-new-func': 'warn',
    // 'no-new-object': 'warn',
    // 'no-new-wrappers': 'warn',
    'no-nonoctal-decimal-escape': 'error',
    // 'no-octal': 'error',
    // 'no-octal-escape': 'warn',
    // 'no-param-reassign': 'warn',
    // 'no-plusplus': 'warn',
    // 'no-proto': 'warn',
    'no-redeclare': 'error',
    'no-regex-spaces': 'off',
    // 'no-restricted-exports': 'warn',
    // 'no-restricted-globals': 'warn',
    // 'no-restricted-imports': 'warn',
    // 'no-restricted-properties': 'warn',
    // 'no-restricted-syntax': 'warn',
    // 'no-return-assign': 'warn',
    // 'no-return-await': 'warn',
    // 'no-script-url': 'warn',
    // 'no-sequences': 'warn',
    // 'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    // 'no-ternary': 'warn',
    // 'no-throw-literal': 'warn',
    // 'no-undef-init': 'warn',
    // 'no-undefined': 'warn',
    // 'no-underscore-dangle': 'warn',
    // 'no-unneeded-ternary': 'warn',
    // 'no-unused-expressions': 'warn',
    'no-unused-labels': 'error',
    // 'no-useless-call': 'warn',
    'no-useless-catch': 'error',
    // 'no-useless-computed-key': 'warn',
    // 'no-useless-concat': 'warn',
    // 'no-useless-constructor': 'warn',
    // 'no-useless-escape': 'error',
    // 'no-useless-rename': 'warn',
    // 'no-useless-return': 'warn',
    // 'no-var': 'warn',
    // 'no-void': 'warn',
    // 'no-warning-comments': 'warn',
    // 'no-with': 'error',
    // 'object-shorthand': 'warn',
    // 'one-var': 'warn',
    // 'one-var-declaration-per-line': 'warn',
    // 'operator-assignment': 'warn',
    // 'prefer-arrow-callback': 'warn',
    // 'prefer-const': 'warn',
    // 'prefer-destructuring': 'warn',
    // 'prefer-exponentiation-operator': 'warn',
    // 'prefer-named-capture-group': 'warn',
    // 'prefer-numeric-literals': 'warn',
    // 'prefer-object-spread': 'warn',
    // 'prefer-promise-reject-warns': 'warn',
    // 'prefer-regex-literals': 'warn',
    // 'prefer-rest-params': 'warn',
    // 'prefer-spread': 'warn',
    // 'prefer-template': 'warn',
    // 'quote-props': 'warn',
    // 'radix': 'warn',
    // 'require-await': 'warn',
    // 'require-unicode-regexp': 'warn',
    // 'require-yield': 'error',
    // 'sort-imports': 'warn',
    // 'sort-keys': 'warn',
    // 'sort-vars': 'warn',
    // 'spaced-comment': 'warn',
    // 'strict': 'warn',
    // 'symbol-description': 'warn',
    // 'vars-on-top': 'warn',
    // 'yoda': 'warn',

    /**
     * Layout & Formatting
     * https://eslint.org/docs/rules/#layout-formatting
     */
    // 'array-bracket-newline': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['off'],
    // 'block-spacing': ['error'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error'],
    'func-call-spacing': ['error', 'never'],
    // 'function-call-argument-newline': ['error', 'consistent'],
    // 'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', 'after'],
    // 'implicit-arrow-linebreak': ['error'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'MemberExpression': 1,
    }],
    // 'jsx-quotes': ['error'],
    'key-spacing': ['error', {
      'mode': 'minimum',
    }],
    'keyword-spacing': ['error'],
    // 'line-comment-position': ['error'],
    'linebreak-style': ['error', 'unix'],
    // 'lines-around-comment': ['error'],
    // 'lines-between-class-members': ['error'],
    // 'max-len': ['error'],
    // 'max-statements-per-line': ['error'],
    // 'multiline-ternary': ['error'],
    // 'new-parens': ['error'],
    // 'newline-per-chained-call': ['error'],
    // 'no-extra-parens': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    // 'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-tabs': ['error'],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    // 'nonblock-statement-body-position': ['error'],
    'object-curly-newline': ['error', {'consistent': true}],
    'object-curly-spacing': ['error', 'never'],
    // 'object-property-newline': ['error'],
    // 'operator-linebreak': ['error'],
    'padded-blocks': ['error', 'never'],
    // 'padding-line-between-statements': ['error'],
    'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    // 'rest-spread-spacing': ['error'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    // 'space-infix-ops': ['error'],
    // 'space-unary-ops': ['error'],
    'switch-colon-spacing': ['error', {'after': true, 'before': false}],
    'template-curly-spacing': ['error', 'never'],
    // 'template-tag-spacing': ['error'],
    // 'unicode-bom': ['error'],
    // 'wrap-iife': ['error'],
    'wrap-regex': ['off'],
    'yield-star-spacing': ['error', 'after'],
  },
};
