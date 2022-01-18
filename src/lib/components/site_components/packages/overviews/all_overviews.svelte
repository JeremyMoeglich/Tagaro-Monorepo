<script>
	import BundesligaOverview from '$lib/components/site_components/packages/overviews/bundesliga_overview.svelte';
	import CinemaOverview from '$lib/components/site_components/packages/overviews/cinema_overview.svelte';
	import DaznOverview from '$lib/components/site_components/packages/overviews/dazn_overview.svelte';
	import EntertainmentPlusOverview from '$lib/components/site_components/packages/overviews/entertainment_plus_overview.svelte';
	import SportOverview from '$lib/components/site_components/packages/overviews/sport_overview.svelte';
	import LineSpacer from '$lib/components/site_components/line_spacer.svelte';
	import EmptySpacer from '$lib/components/site_components/empty_spacer.svelte';
</script>

<h1>Programmpakete bei Sky</h1>
<a href="/angebote/entertainmentplus">
	<EntertainmentPlusOverview />
</a>
<!-- <a href="/angebote/entertainment">
	<EntertainmentOverview />
</a> -->
<LineSpacer />
<a href="/angebote/cinema">
	<CinemaOverview />
</a>
<LineSpacer />
<a href="/angebote/sport">
	<SportOverview />
</a>
<LineSpacer />
<a href="/angebote/bundesliga">
	<BundesligaOverview />
</a>

<LineSpacer />
<DaznOverview />
<EmptySpacer />

<style lang="scss">
	@import 'lib/style/mixins.scss';
	h1 {
		@include gradient-text;
		text-align: center;
		margin: 70px;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
