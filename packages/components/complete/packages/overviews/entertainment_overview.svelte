<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import EntertainmentSenders from '../senders/entertainment_senders.svelte';
	export let animated = false;
	export let show_senders = false;
	export let show_price: boolean;
</script>

<PackageTemplate
	{show_price}
	{animated}
	show_slot={show_senders}
	title={'Entertainment Paket - Exklusives Entertainment ohne Ende.'}
	points={[
		'Exklusive Top-Serien von Sky und HBO',
		'Große Auswahl an kompletten Serien und Dokumentationen jederzeit auf Abruf verfügbar',
		'Alles ohne Werbeunterbrechung',
		'Großartige Programmvielfalt mit Premium-Sendern für jeden Geschmack - live und auf Abruf',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!'
	]}
	image={'/images/assets/packages/normal/entertainment.png'}
	price_asset_ids={['entertainment']}
>
	{#if show_senders}
		<EntertainmentSenders />
	{/if}
</PackageTemplate>
