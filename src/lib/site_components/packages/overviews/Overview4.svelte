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
	<h3>12 Monate ab € 42,50 mtl.</h3>
	<p>
		im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema
		+ Sport + Bundesliga
	</p>
</PackageOverview>
