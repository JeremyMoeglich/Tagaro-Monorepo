<script>
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import PackageOverview from '$lib/components/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Entertainment Paket - Exklusives Entertainment ohne Ende.'}
	points={[
		'Exklusive Top-Serien von Sky und HBO',
		'Große Auswahl an kompletten Serien und Dokumentationen jederzeit auf Abruf verfügbar',
		'Alles ohne Werbeunterbrechung',
		'Großartige Programmvielfalt mit Premium-Sendern für jeden Geschmack - live und auf Abruf',
		'#Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'#Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!'
	]}
	image={'/images/assets/packages/normal/entertainment.jpg'}
	{detailed}
>
	<h3>12 Monate nur {get_price_string(['entertainment'], 'jahr')} mtl.*</h3>
	<p>
		(im Jahres-Abo, danach {get_price_string(['entertainment'], 'monat')} mtl. im Monats-Abo) <br />
		Optional mit Netflix im Entertainment Plus Paket für zzgl. € 7,50 mtl. <br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
