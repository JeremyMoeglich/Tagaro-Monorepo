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
	show_slot={show_senders}
	title={'Sport Paket - Der beste Live-Sport.'}
	points={[
		'Alle Rennen der Formel 1 live - exklusiv auf Sky',
		'Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live',
		'Alle Spiele der Premier League exklusiv, davon über 250 Spiele live und erstmals ausgewählte Spiele der FA Women`s Super League exklusiv',
		'NHL, Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv'
	]}
	image={'/images/assets/packages/normal/sport.png'}
	price_asset_ids={['entertainment', 'sport']}
>
	{#if show_senders}
		<SportSenders  />
	{/if}
</PackageTemplate>
