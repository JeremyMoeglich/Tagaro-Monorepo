<script>
	import BundesligaOverview from '$lib/site_components/packages/overviews/bundesliga_overview.svelte';
	import CinemaOverview from '$lib/site_components/packages/overviews/cinema_overview.svelte';
	import DaznOverview from '$lib/site_components/packages/overviews/dazn_overview.svelte';
	import EntertainmentOverview from '$lib/site_components/packages/overviews/entertainment_overview.svelte';
	import EntertainmentPlusOverview from '$lib/site_components/packages/overviews/entertainment_plus_overview.svelte';
	import SportOverview from '$lib/site_components/packages/overviews/sport_overview.svelte';
	import LineSpacer from '$lib/site_components/line_spacer.svelte';
	import EmptySpacer from '$lib/site_components/empty_spacer.svelte';
	import PackageTable from '$lib/site_components/package_table.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen.svelte';
</script>

<h1>Programmpakete bei Sky</h1>
<a href="/sky_angebote/entertainment">
	<EntertainmentOverview />
</a>
<LineSpacer />
<a href="/sky_angebote/cinema">
	<CinemaOverview />
</a>
<LineSpacer />
<a href="/sky_angebote/sport">
	<SportOverview />
</a>
<LineSpacer />
<a href="/sky_angebote/bundesliga">
	<BundesligaOverview />
</a>
<LineSpacer />
<a href="/sky_angebote/entertainment">
	<EntertainmentPlusOverview />
</a>
<LineSpacer />
<DaznOverview />
<EmptySpacer />


<style lang="scss">
	@import '../../../style/mixins.scss';
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
