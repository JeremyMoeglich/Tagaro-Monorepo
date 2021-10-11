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
<EntertainmentOverview />
<LineSpacer />
<CinemaOverview />
<LineSpacer />
<SportOverview />
<LineSpacer />
<BundesligaOverview />
<LineSpacer />
<EntertainmentPlusOverview />
<LineSpacer />
<DaznOverview />
<EmptySpacer />
<PackageTable />
<EmptySpacer />
<Vertragsinfomationen />
<EmptySpacer />

<style lang='scss'>
	h1 {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
		margin: 70px;
	}
</style>
