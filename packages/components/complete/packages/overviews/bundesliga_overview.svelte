<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import BundesligaSenders from '../senders/bundesliga_senders.svelte';
	export let animated = false;
	export let show_senders = false;
	export let show_price: boolean;
</script>

<PackageTemplate
	{show_price}
	{animated}
	title={'Fußball Bundesliga Paket - Die Heimat der Bundesliga - garantiert bis 2025.'}
	points={[
		'Alle Samstagsspiele der Bundesliga live und exklusiv',
		'Alle Spiele der 2. Bundesliga live',
		'Alle Relegationsspiele und der Supercup live',
		'Mit den Sky Konferenzen und Highlight-Videos kein Tor verpassen'
	]}
	image={'/images/assets/packages/normal/bundesliga.png'}
	price_asset_ids={['entertainment', 'bundesliga']}
>
	{#if show_senders}
		<BundesligaSenders tiny_title={true} />
	{/if}
</PackageTemplate>
