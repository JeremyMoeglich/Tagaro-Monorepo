<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import CinemaSenders from '../senders/cinema_senders.svelte';
	export let animated = false;
	export let show_senders = false;
	export let show_price: boolean;
</script>

<PackageTemplate
	{show_price}
	{animated}
	show_slot={show_senders}
	title={'Cinema Paket - Jeden Tag ein neuer Film.'}
	points={[
		'Exklusive Top-Filme kurz nach dem Kino',
		'Große Filmvielfalt über alle Genres hinweg',
		'Alle Filme ohne Werbeunterbrechung'
	]}
	image={'/images/assets/packages/normal/cinema.png'}
	price_asset_ids={['entertainmentplus', 'cinema']}
>
	{#if show_senders}
		<CinemaSenders  />
	{/if}
</PackageTemplate>
