<script>
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import PackageOverview from '$lib/components/layout_components/package_overview.svelte';
	import GradientBadge from '../../gradient_badge.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Fußball Bundesliga Paket - Die Heimat der Bundesliga - garantiert bis 2025.'}
	points={[
		'Alle Samstagsspiele der Bundesliga live und exklusiv',
		'Alle Spiele der 2. Bundesliga live',
		'Alle Relegationsspiele und der Supercup live',
		'Mit den Sky Konferenzen und Highlight-Videos kein Tor verpassen'
	]}
	image={'/images/assets/packages/normal/bundesliga.jpg'}
	{detailed}
>
	<h3>12 Monate nur {get_price_string(['entertainmentplus', 'bundesliga'], 'jahr')} mtl.*</h3>
	<p>
		(im Jahres-Abo, danach {get_price_string(['entertainmentplus', 'bundesliga'], 'monat')} im Monats-Abo)
		<br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
	<GradientBadge>20% Rabatt sichern</GradientBadge>
</PackageOverview>
