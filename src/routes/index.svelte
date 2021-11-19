<script>
	import AngeboteRotator from '$lib/site_components/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from '$lib/site_components/schnell_sky_abonnieren.svelte';
	import MainShowcase from '$lib/site_components/main_showcase.svelte';
	import CyberweekVertragsinfomationen from '$lib/site_components/vertragsinfomationen/cyberweek_vertragsinfomationen.svelte';
</script>

<body>
	<MainShowcase />
	<!-- <AngeboteRotator /> -->
	<!-- <SchnellSkyAbonnieren /> -->
	<CyberweekVertragsinfomationen />
</body>

<style>
	body {
		margin-bottom: 50px;
	}
</style>