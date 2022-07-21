<script>
	import AngeboteRotator from '$lib/components/site/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from '$lib/components/site/schnell_sky_abonnieren.svelte';
	import MainShowcase from '$lib/components/site/routes/index/main_showcase.svelte';
	import Vertragsinfomationen from '$lib/components/site/vertragsinfomationen.svelte';
</script>

<div>
	<MainShowcase />
	<AngeboteRotator />
	<SchnellSkyAbonnieren />
	<Vertragsinfomationen />
</div>

<style>
	body {
		margin-bottom: 50px;
	}
</style>
