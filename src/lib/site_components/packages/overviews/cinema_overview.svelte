<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Cinema Paket - Jeden Tag ein neuer Film.'}
	points={[
		'Exklusive Top-Filme kurz nach dem Kino',
		'Große Filmvielfalt über alle Genres hinweg',
		'Alle Filme ohne Werbeunterbrechung',
		'#Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'#Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		'#UHD optional für € 5,00 mtl.'
	]}
	image={'/images/packages/sky_cinema.jpg'}
	{detailed}
>
	<h3>12 Monate nur € 25,00 mtl.*</h3>
	<p>
		(im Jahres-Abo, danach € 37,50 mtl. im Monats-Abo) <br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
