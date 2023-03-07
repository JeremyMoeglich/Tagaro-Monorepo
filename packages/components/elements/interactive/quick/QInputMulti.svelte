<script lang="ts">
	import QInput from './QInput.svelte';

	export let name: string;
	export let value: string[];
	let inner_value = value.join(', ') ?? '';

	$: value = inner_value === '' ? [] : inner_value.split(',').map((s) => s.trim());
</script>

<QInput {name} bind:value={inner_value} />
