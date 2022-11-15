<script lang="ts">
	import Senders from '../../../layout/senders.svelte';
	const start = '/images/assets/packages/senders/bundesliga/';
</script>

<Senders
	title="Sender im Bundesliga Paket:"
	content={[
		{
			image: 'sky_logo_sky-sport-buli-hd.png',
			text: 'Eine Bundesliga Begegnung pro Spieltag in brillanter HD-Qualität'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-uhd.png',
			text: 'Eine Bundesliga Begegnung pro Spieltag in brillanter Ultra-HD-Qualität'
		},
		{
			image: 'sky_logo_sky-sport-buli.png',
			text: 'Sky Sport Bundesliga. Hier ist die Fußball-Bundesliga zu Hause'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-1.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-2.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-3.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-4.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-5.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-6.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-7.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-8.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-9.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		},
		{
			image: 'sky_logo_sky-sport-bundesliga-10.png',
			text: 'Insgesamt 572 Spiele der Bundesliga und der 2. Bundesliga live und in HD.'
		}
		//'sky_logo_eurosport2-hd_w.png',
		//'sky_logo_eurosport360-hd_w.webp',
	].map((e) => ({
		...e,
		image: start + e.image
	}))}
/>
