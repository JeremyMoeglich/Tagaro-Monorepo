<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import EntertainmentSenders from '../senders/entertainment_senders.svelte';
	export let animated = false;
	export let show_senders = false;
</script>

<PackageTemplate
	{animated}
	title={'Entertainment Paket - Exklusives Entertainment ohne Ende.'}
	points={[
		'Exklusive Top-Serien von Sky und HBO',
		'Große Auswahl an kompletten Serien und Dokumentationen jederzeit auf Abruf verfügbar',
		'Alles ohne Werbeunterbrechung',
		'Großartige Programmvielfalt mit Premium-Sendern für jeden Geschmack - live und auf Abruf',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!'
	]}
	image={'/images/assets/packages/normal/entertainment.jpg'}
	price_asset_ids={['entertainment']}
>
	{#if show_senders}
		<EntertainmentSenders tiny_title={true} />
	{/if}
</PackageTemplate>
