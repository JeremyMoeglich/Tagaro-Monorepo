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
	title={'Entertainment Plus Paket - Alle Sky Serien und Netflix.'}
	points={[
		'Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO',
		'Netflix Basis-Abo (HD, 1 Gerät) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen',
		'Alle Inhalte von Sky, Free TV, deinen Lieblingsapps und Mediatheken auf einen Blick vereint',
		'Einfach. Alles mit einer Sprachfernbedienung'
	]}
	image={'/images/assets/packages/normal/entertainmentplus.png'}
	price_asset_ids={['entertainmentplus']}
>
	{#if show_senders}
		<EntertainmentSenders  />
	{/if}
</PackageTemplate>
