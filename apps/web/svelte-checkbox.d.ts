import type { SvelteComponentTyped } from 'svelte';

declare module 'svelte-checkbox' {
	interface CheckboxProps {
		size?: string;
		checked?: boolean;
		change?: (event: CustomEvent<boolean>) => void;
	}
	export default class Checkbox extends SvelteComponentTyped<CheckboxProps> {}
}
