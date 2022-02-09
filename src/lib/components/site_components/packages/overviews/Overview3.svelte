<script>
	import PackageOverview from '$lib/components/layout_components/package_overview.svelte';
	export let detailed = false;
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
</script>

<PackageOverview
	title={'3 Sky Pakete nach Wahl - Individuell zusammenstellbar für ihre Bedürfnisse'}
	points={[
		'Programmvielfalt mit zahlreichen hochwertigen deutschen Pay-TV Sendern im Entertainment Paket',
		'Nationaler oder internationaler Live-Sport im Fußball-Bundesliga oder Sport Paket',
		'Sky Entertainment als Grundpaket immer inklusive',
		'2 Pakete wahlweise aus Cinema, Sport und/oder Fußball-Bundesliga und Kids inkl. HD',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		'UHD optional für € 5 mtl.'
	]}
	{detailed}
>
	<h3>12 Monate ab {get_price_string(['entertainment', 'cinema', 'sport'], 'jahr')} mtl.</h3>
	<p>
		im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema
		+ Sport
	</p>
</PackageOverview>
