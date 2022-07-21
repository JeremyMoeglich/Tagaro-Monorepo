<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	export let animated = false;
</script>

<PackageTemplate
	{animated}
	title={'Entertainment Plus Paket - Alle Sky Serien und Netflix.'}
	points={[
		'Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO',
		'Netflix Basis-Abo (SD, 1 Stream) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen',
		'Alle Inhalte von Sky, Free TV, deinen Lieblingsapps und Mediatheken auf einen Blick vereint',
		'Einfach. Alles mit einer Sprachfernbedienung'
	]}
	image={'/images/assets/packages/normal/entertainmentplus.jpg'}
	price_asset_ids={['entertainmentplus']}
/>
