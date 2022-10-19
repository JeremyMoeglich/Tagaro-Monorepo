<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import SportSenders from '../senders/sport_senders.svelte';
	export let animated = false;
	export let show_senders = false;
	export let show_price: boolean;
</script>

<PackageTemplate
	{show_price}
	{animated}
	title={'Sport Paket - Der beste Live-Sport.'}
	points={[
		'Alle Rennen der Formel 1 live - exklusiv auf Sky',
		'Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live',
		'Alle Spiele der Premier League exklusiv, davon 232 Spiele live',
		'Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv'
	]}
	image={'/images/assets/packages/normal/sport.png'}
	price_asset_ids={['entertainment', 'sport']}
>
	{#if show_senders}
		<SportSenders tiny_title={true} />
	{/if}
</PackageTemplate>
