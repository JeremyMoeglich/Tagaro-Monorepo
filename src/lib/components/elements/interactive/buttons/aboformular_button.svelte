<script lang="ts">
	import { aboformular } from '$lib/scripts/frontend/urls';

	import Button from './button.svelte';

	import FormButton from './form_button.svelte';

	export let source: string;
	export let text = 'Jetzt Bestellen';
	export let reversed = false;
	export let route: string = aboformular;
</script>

<FormButton {source} {route}>
	<Button {text} {reversed} />
</FormButton>
