<script>
	import AngeboteRotator from '$lib/components/site/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from '$lib/components/site/schnell_sky_abonnieren.svelte';
	import MainShowcase from '$lib/components/site/routes/index/main_showcase.svelte';
	import Vertragsinfomationen from '$lib/components/site/vertragsinfomationen.svelte';
</script>

<body>
	<MainShowcase />
	<AngeboteRotator />
	<SchnellSkyAbonnieren />
	<Vertragsinfomationen />
</body>

<style>
	body {
		margin-bottom: 50px;
	}
</style>
