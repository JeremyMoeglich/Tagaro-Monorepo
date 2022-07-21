<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	export let animated = false;
</script>

<PackageTemplate
	{animated}
	title={'Sport Paket - Der beste Live-Sport.'}
	points={[
		'Alle Rennen der Formel 1 live - exklusiv auf Sky',
		'Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live',
		'Alle Spiele der Premier League exklusiv, davon 232 Spiele live',
		'Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv'
	]}
	image={'/images/assets/packages/normal/sport.jpg'}
	price_asset_ids={['entertainment', 'sport']}
/>
