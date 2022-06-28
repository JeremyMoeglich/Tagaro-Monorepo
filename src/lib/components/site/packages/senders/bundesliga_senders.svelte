<script>
	import Senders from '$lib/components/layout/senders.svelte';
	const start = '/images/assets/packages/senders/bundesliga/';
</script>

<body>
	<Senders
		text="Sender im Bundesliga Paket:"
		content={[
			'sky_logo_eurosport2-hd_w.png',
			'sky_logo_eurosport360-hd_w.webp',
			'sky_logo_sky-sport-bundesliga-1.png',
			'sky_logo_sky-sport-bundesliga-10.png',
			'sky_logo_sky-sport-bundesliga-2.png',
			'sky_logo_sky-sport-bundesliga-3.png',
			'sky_logo_sky-sport-bundesliga-4.png',
			'sky_logo_sky-sport-bundesliga-5.png',
			'sky_logo_sky-sport-bundesliga-6.png',
			'sky_logo_sky-sport-bundesliga-7.png',
			'sky_logo_sky-sport-bundesliga-8.png',
			'sky_logo_sky-sport-bundesliga-9.png',
			'sky_logo_sky-sport-bundesliga-uhd.png'
		].map((img) => start + img)}
	/>
</body>
