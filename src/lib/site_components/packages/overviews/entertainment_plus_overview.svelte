<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	export let detailed = false;
</script>
Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO
Netflix Basis-Abo (SD, 1 Stream) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen
<PackageOverview
	title={'Entertainment Plus Paket - Alle Sky Serien und Netflix.'}
	points={[
		'Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO',
		'Netflix Basis-Abo (SD, 1 Stream) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen',
		'Alle Inhalte von Sky, Free TV, deinen Lieblingsapps und Mediatheken auf einen Blick vereint',
		'Einfach. Alles mit einer Sprachfernbedienung'
	]}
	image={'/images/packages/sky_entertainment-plus.jpg'}
	{detailed}
>
	<h3>12 Monate nur € 20,00 mtl.*</h3>
	<p>
		(im Jahres-Abo, danach € 25,00 mtl. im Monats-Abo) <br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
