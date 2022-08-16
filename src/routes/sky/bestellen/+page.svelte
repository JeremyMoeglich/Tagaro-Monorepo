<script lang="ts">
	import { browser } from '$app/env';
	import { load_form } from '$lib/scripts/frontend/load_aboformular';

	if (browser) {
		(async () => {
			await load_form('external');
		})();
	}
</script>

<svelte:head>
	<title>Weiterleitung</title>
</svelte:head>
