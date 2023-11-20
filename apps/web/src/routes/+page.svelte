<script lang="ts">
	import AngeboteRotator from 'components/complete/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from 'components/complete/schnell_sky_abonnieren.svelte';
	import Tabs from 'components/layout/tabs.svelte';
	import VertragsinfomationenBox from 'components/complete/vertragsinfomationen_box.svelte';
	import Meta from './meta.svelte';
	import BlackFridayShowcase from './black_friday_showcase.svelte';
	import { tabindex } from 'frontend/tabindex';
	import Wunschgutschein from 'components/complete/wunschgutschein.svelte';
	import MainShowcase from './main_showcase.svelte';
</script>

<Meta />

<div>
	{#if $tabindex === 0}
		<BlackFridayShowcase />
	{:else}
		<MainShowcase />
	{/if}
	<Tabs
		tabs={[
			{
				name: 'Black Friday Deals (Komplett)',
				component: Wunschgutschein
			},
			{
				name: 'Angebote mit weniger Paketen',
				component: AngeboteRotator
			}
		]}
		bind:active={$tabindex}
	/>
	<SchnellSkyAbonnieren />
	<VertragsinfomationenBox />
</div>

<style>
	div {
		margin-bottom: 50px;
	}
</style>
