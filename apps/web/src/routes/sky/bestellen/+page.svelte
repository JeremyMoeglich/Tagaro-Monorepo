<script lang="ts">
	import { browser } from '$app/environment';
	import { load_form } from 'frontend/load_aboformular';
	import Meta from '../../meta.svelte';

	if (browser) {
		(async () => {
			await load_form('external');
		})();
	}
</script>

<Meta
	websiteDescription={'Weiterleitung zum Aboformular'}
	websiteTitle={'Sky Tagaro Aboformular'}
/>

<svelte:head>
	<title>Weiterleitung</title>
</svelte:head>
