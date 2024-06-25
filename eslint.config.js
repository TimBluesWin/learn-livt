import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        amd: true,
        browser: true,
        es14: true,
      },
    },
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['warn', 'single'],
      '@stylistic/ts/semi': ['warn', 'never'],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      '@stylistic/ts/comma-dangle': ['warn', 'always-multiline'],
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      'vue/no-v-text-v-html-on-component': 'off',
    },
  },
]