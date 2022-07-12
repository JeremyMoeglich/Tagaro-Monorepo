<script>
	import Senders from '$lib/components/layout/senders.svelte';
	const start = '/images/assets/packages/senders/sport/';
</script>

<body>
	<Senders
		text="Sender im Sport Paket:"
		content={[
			'sky_logo_sky-sport-uhd.png',
			'sky_logo_sky-sport-f1.png',
			'sky_logo_eurosport2-hd_w.png',
			'sky_logo_eurosport360-hd_w.webp',
			'sky_logo_sky-sport-1.png',
			'sky_logo_sky-sport-2.png',
			'sky_logo_sky-sport-3.png',
			'sky_logo_sky-sport-4.png',
			'sky_logo_sky-sport-5.png',
			'sky_logo_sky-sport-6.png',
			'sky_logo_sky-sport-7.png',
			'sky_logo_sky-sport-8.png',
			'sky_logo_sky-sport-9.png',
			'sky_logo_sky-sport-10.png',
			'sky_logo_sky-sport-11.png',
			'sky_logo_sky-sport-austria.png'
		].map((img) => start + img)}
	/>
</body>
