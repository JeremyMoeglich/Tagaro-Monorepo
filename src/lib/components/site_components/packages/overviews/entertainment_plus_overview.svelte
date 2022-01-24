<script>
	import { get_price_string } from '$lib/scripts/universal/asset_libary/prices';
	import PackageOverview from '$lib/components/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Entertainment Plus Paket - Alle Sky Serien und Netflix.'}
	points={[
		'Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO',
		'Netflix Basis-Abo (SD, 1 Stream) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen',
		'Alle Inhalte von Sky, Free TV, deinen Lieblingsapps und Mediatheken auf einen Blick vereint',
		'Einfach. Alles mit einer Sprachfernbedienung'
	]}
	image={'/images/assets/packages/normal/entertainmentplus.jpg'}
	{detailed}
>
	<h3>12 Monate nur {get_price_string(['entertainmentplus'], 'jahr')} mtl.*</h3>
	<p>
		(im Jahres-Abo, danach {get_price_string(['entertainmentplus'], 'monat')} mtl. im Monats-Abo)
		<br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
