<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	export let animated = false;
	export let show_price: boolean;
</script>

<PackageTemplate
	{show_price}
	{animated}
	title={'Kids Paket - Große Unterhaltung für alle Kleinen.'}
	points={[
		'5 beliebte Kindersender und mehr als 4.500 Inhalte',
		'Unser Kids Mode schafft eine kindersichere Umgebung',
		'Alles auf Abruf ohne Werbung',
		'Mit Download-Funktion'
	]}
	image={'/images/assets/packages/normal/kids.png'}
	price_asset_ids={['entertainmentplus', 'kids']}
/>
