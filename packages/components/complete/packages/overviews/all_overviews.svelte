<script lang="ts">
	import BundesligaOverview from './bundesliga_overview.svelte';
	import CinemaOverview from './cinema_overview.svelte';
	import DaznOverview from './dazn_overview.svelte';
	import EntertainmentPlusOverview from './entertainment_plus_overview.svelte';
	import SportOverview from './sport_overview.svelte';
	import LineSpacer from '../../../elements/line.svelte';
	import ConditionalHref from '../../../layout/conditional_href.svelte';

	export let show_senders = false;
	export let clickable = true;
</script>

<div class="outer">
	<h1 class="gradient_text text-3xl">Programmpakete bei Sky</h1>

	<ConditionalHref href="/angebote/entertainmentplus" active={clickable}>
		<EntertainmentPlusOverview {show_senders} />
	</ConditionalHref>
	<!-- <a href="/angebote/entertainment">
		<EntertainmentOverview />
	</a> -->
	<LineSpacer />
	<ConditionalHref href="/angebote/cinema" active={clickable}>
		<CinemaOverview {show_senders} />
	</ConditionalHref>
	<LineSpacer />
	<ConditionalHref href="/angebote/sport" active={clickable}>
		<SportOverview {show_senders} />
	</ConditionalHref>
	<LineSpacer />
	<ConditionalHref href="/angebote/bundesliga" active={clickable}>
		<BundesligaOverview {show_senders} />
	</ConditionalHref>

	<LineSpacer />
	<DaznOverview />
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin: 70px;
	}
	.outer {
		padding: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
