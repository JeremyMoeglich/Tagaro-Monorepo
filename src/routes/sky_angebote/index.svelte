<script>
	import BundesligaOverview from '$lib/site_components/packages/bundesliga_overview.svelte';
	import CinemaOverview from '$lib/site_components/packages/cinema_overview.svelte';
	import DaznOverview from '$lib/site_components/packages/dazn_overview.svelte';
	import EntertainmentOverview from '$lib/site_components/packages/entertainment_overview.svelte';
	import EntertainmentPlusOverview from '$lib/site_components/packages/entertainment_plus_overview.svelte';
	import SportOverview from '$lib/site_components/packages/sport_overview.svelte';
	import LineSpacer from '$lib/site_components/line-spacer.svelte';
</script>
<LineSpacer />
<h1 class="blue_gradient_text centered_text">Alle Sky Pakete flexibel buchbar</h1>
<p class="styled_p centered_text">
	Erhalten Sie hier Ihr Sky Abonnement mit versandkostenfreier Lieferung. <br />
	Wählen Sie Ihre Wunschpakete individuell aus Sky Entertainment, Cinema, Sport und/oder Fußball-Bundesliga.
</p>
<LineSpacer />
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
<LineSpacer />

<style>
	.blue_gradient_text {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.centered_text {
		text-align: center;
	}
	.styled_p {
		line-height: 30px;
	}
</style>
