<script lang="ts">
	import AngeboteRotator from 'components/complete/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from 'components/complete/schnell_sky_abonnieren.svelte';
	// import Tabs from 'components/layout/tabs.svelte';
	import VertragsinfomationenBox from 'components/complete/vertragsinfomationen_box.svelte';
	import Meta from './meta.svelte';
	// import BlackFridayShowcase from './black_friday_showcase.svelte';
	// import { tabindex } from 'frontend/tabindex';
	import MainShowcase from './main_showcase.svelte';
</script>

<Meta />

<div>
	<!-- {#if $tabindex === 0}
		<BlackFridayShowcase />
	{:else}
		<MainShowcase />
	{/if} -->
	<MainShowcase />
	<!-- <Tabs
		tabs={[
			{
				name: 'Sky Top-Deal für Komplett',
				component: undefined
			},
			{
				name: 'Top-Deal Angebote mit weniger Paketen',
				component: AngeboteRotator
			}
		]}
		bind:active={$tabindex}
	/> -->
	<AngeboteRotator />
	<SchnellSkyAbonnieren />
	<VertragsinfomationenBox />
</div>

<div class="invisible">
	<a href="/angebote/entertainmentplus">.</a>
	<a href="/angebote/cinema-entertainmentplus">.</a>
	<a href="/angebote/sport-entertainment">.</a>
	<a href="/angebote/sport-entertainmentplus">.</a>
	<a href="/angebote/bundesliga-entertainment">.</a>
	<a href="/angebote/bundesliga-entertainmentplus">.</a>
	<a href="/angebote/kids-entertainmentplus">.</a>
</div>

<style>
	div {
		margin-bottom: 50px;
	}
</style>
