<script lang="ts">
	import { load_form } from '$lib/scripts/frontend/load_aboformular';

	async () => {
		await load_form('external');
	};
</script>

<svelte:head>
	<title>Weiterleitung</title>
</svelte:head>
