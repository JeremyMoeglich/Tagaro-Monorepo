/* eslint-disable @typescript-eslint/no-var-requires */
const { readGitignoreFiles } = require('eslint-gitignore');
const path = require('node:path');

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'turbo', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: [...readGitignoreFiles({ cwd: path.join(__dirname, '../..') }), '*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
