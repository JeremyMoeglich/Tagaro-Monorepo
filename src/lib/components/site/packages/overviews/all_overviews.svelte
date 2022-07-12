<script>
	import BundesligaOverview from '$lib/components/site/packages/overviews/bundesliga_overview.svelte';
	import CinemaOverview from '$lib/components/site/packages/overviews/cinema_overview.svelte';
	import DaznOverview from '$lib/components/site/packages/overviews/dazn_overview.svelte';
	import EntertainmentPlusOverview from '$lib/components/site/packages/overviews/entertainment_plus_overview.svelte';
	import SportOverview from '$lib/components/site/packages/overviews/sport_overview.svelte';
	import LineSpacer from '$lib/components/elements/line.svelte';
</script>

<h1>Programmpakete bei Sky</h1>
<a href="/angebote/entertainmentplus" sveltekit:prefetch>
	<EntertainmentPlusOverview />
</a>
<!-- <a href="/angebote/entertainment">
	<EntertainmentOverview />
</a> -->
<LineSpacer />
<a href="/angebote/cinema" sveltekit:prefetch>
	<CinemaOverview />
</a>
<LineSpacer />
<a href="/angebote/sport" sveltekit:prefetch>
	<SportOverview />
</a>
<LineSpacer />
<a href="/angebote/bundesliga" sveltekit:prefetch>
	<BundesligaOverview />
</a>

<LineSpacer />
<DaznOverview />

<style lang="scss">
	@import 'lib/style/gradient_text.scss';
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
