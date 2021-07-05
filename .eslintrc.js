module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
    'standard'
  ],
  globals:{
    VHttp: true
  },
  plugins: [
  ],
  rules: {
    'eol-last': 0,
    "vue/html-indent": ["error", 2, {
      "baseIndent": 1,
    }],
    'no-empty-pattern': 'off',
    semi: 'off',
    "no-tabs":"off",
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    "prefer-promise-reject-errors": "off",
    'vue/require-explicit-emits': 'off',
    "vue/html-self-closing": 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }]
  }
}
