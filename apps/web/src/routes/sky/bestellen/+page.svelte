<script lang="ts">
	import { browser } from '$app/environment';
	import { load_form } from 'frontend/load_aboformular';

	if (browser) {
		(async () => {
			await load_form('external');
		})();
	}
</script>

<svelte:head>
	<title>Weiterleitung</title>
</svelte:head>
