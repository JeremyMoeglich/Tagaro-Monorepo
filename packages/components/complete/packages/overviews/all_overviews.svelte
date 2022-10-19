<script lang="ts">
	import BundesligaOverview from './bundesliga_overview.svelte';
	import CinemaOverview from './cinema_overview.svelte';
	import DaznOverview from './dazn_overview.svelte';
	import EntertainmentPlusOverview from './entertainment_plus_overview.svelte';
	import SportOverview from './sport_overview.svelte';
	import LineSpacer from '../../../elements/line.svelte';
	import ConditionalHref from '../../../layout/conditional_href.svelte';

	export let clickable = true;
	export let ebay_version: boolean;

	const space = '100px';
</script>

<div class="outer">
	<h1 class="gradient_text">Programmpakete bei Sky</h1>

	<ConditionalHref href="/angebote/entertainmentplus" active={clickable}>
		<EntertainmentPlusOverview show_senders={ebay_version} show_price={!ebay_version} />
	</ConditionalHref>
	<!-- <a href="/angebote/entertainment">
		<EntertainmentOverview />
	</a> -->
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/cinema" active={clickable}>
		<CinemaOverview show_senders={ebay_version} show_price={!ebay_version} />
	</ConditionalHref>
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/sport" active={clickable}>
		<SportOverview show_senders={ebay_version} show_price={!ebay_version} />
	</ConditionalHref>
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/bundesliga" active={clickable}>
		<BundesligaOverview show_senders={ebay_version} show_price={!ebay_version} />
	</ConditionalHref>

	{#if !ebay_version}
		<LineSpacer {space} />
		<DaznOverview show_price={!ebay_version} />
	{/if}
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin: 70px;
		font-size: 1.875rem;
		font-weight: bold;
	}
	.outer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
