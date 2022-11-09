<script lang="ts">
	import Senders from '../../../layout/senders.svelte';
	const start = '/images/assets/packages/senders/kids/';
	export let tiny_title = false;
</script>

<Senders
	{tiny_title}
	title="Sender im Kids Paket:"
	content={[
		{
			image: '95_sky_logo_cartoonnetwork_w.png',
			text: 'Kinderunterhaltung voller Abenteuer und Action.'
		},
		{
			image: '94_sky_logo_boomerang.png',
			text: 'Die größten Cartoonstars aller Zeiten in Filmen und Serien.'
		},
		{
			image: '96_sky_logo_junior.png',
			text: 'Klassiker des Kinderfernsehens für die ganze Familie.'
		},
		{
			image: 'sky_logo_nickjr_b.png',
			text: 'Altersgerechte Unterhaltung für Vorschulkinder in brillantem HD.'
		},
		{
			image: 'sky_logo_nicktoons_w.png',
			text: 'Hochwertige Vorschul-, Cartoon- und Teenie-Serien für Kinder jeden Alters.'
		}
	].map((e) => ({
		...e,
		image: start + e.image
	}))}
/>
