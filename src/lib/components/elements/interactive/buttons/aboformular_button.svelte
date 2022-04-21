<script lang="ts">
	import Button from './button.svelte';

	import FormButton from './form_button.svelte';

	export let source: string;
	export let text = 'Jetzt Bestellen';
	export let reversed = false;
</script>

<FormButton {source}>
	<Button {text} {reversed} />
</FormButton>
