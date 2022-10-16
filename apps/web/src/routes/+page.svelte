<script lang="ts">
	import AngeboteRotator from 'components/complete/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from 'components/complete/schnell_sky_abonnieren.svelte';
	import MainShowcase from './main_showcase.svelte';
	import VertragsinfomationenBox from 'components/complete/vertragsinfomationen_box.svelte';
</script>

<div>
	<MainShowcase />
	<AngeboteRotator />
	<SchnellSkyAbonnieren />
	<VertragsinfomationenBox />
</div>

<style>
	div {
		margin-bottom: 50px;
	}
</style>
