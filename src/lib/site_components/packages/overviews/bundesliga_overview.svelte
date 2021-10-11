<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Fußball Bundesliga Paket - Die Heimat der Bundesliga – garantiert bis 2025.'}
	points={[
		'Alle Samstagsspiele der Bundesliga live und exklusiv',
		'Alle Spiele der 2. Bundesliga live',
		'Alle Relegationsspiele und der Supercup live',
		'Mit den Sky Konferenzen und Highlight-Videos kein Tor verpassen'
	]}
	image={'/images/packages/sky_bundesliga.jpg'}
	{detailed}
>
	<h3>12 Monate nur € 25,00 mtl.*</h3>
	<p>
		(im Jahres-Abo, danach € 25,00 mtl. im Monats-Abo) <br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
