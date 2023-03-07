<script lang="ts">
	import QInput from './QInput.svelte';

	export let name: string;
	export let value: string | undefined;
	let inner_value = value ?? '';
	$: value = inner_value === '' ? undefined : inner_value;
</script>

<QInput {name} bind:value={inner_value} />
