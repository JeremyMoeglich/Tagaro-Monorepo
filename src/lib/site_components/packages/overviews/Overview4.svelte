<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Alle 4 Sky Pakete im Abonnement - Großartige Unterhaltung aus allen Bereichen'}
	points={[
		'Programmvielfalt mit zahlreichen hochwertigen deutschen Pay-TV Sendern im Entertainment Paket',
		'Nationaler oder internationaler Live-Sport im Fußball-Bundesliga oder Sport Paket',
		'Sky Entertainment + Cinema + Sport + Bundesliga inkl. HD',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		'UHD optional für € 5,00 mtl.',
		'Sky Kids optional für € 5,00 mtl.'
	]}
	{detailed}
>
	<h3>12 Monate ab € 40,00 mtl.</h3>
	<p>
		Optional mit Netflix im Entertainment Plus Paket für zzgl. € 7,50 mtl. Der Vertrag hat eine
		Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
