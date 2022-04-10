<script lang="ts">
	import FormButton from '../internal_components/form_button.svelte';
	import Button from '../layout_components/button.svelte';

	export let source: string;
	export let text: string = 'Jetzt Bestellen';
	export let reversed: boolean = false;
</script>

<FormButton {source}>
	<Button {text} {reversed} />
</FormButton>
