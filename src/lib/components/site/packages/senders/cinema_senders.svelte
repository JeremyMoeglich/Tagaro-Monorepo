<script>
	import Senders from '$lib/components/layout/senders.svelte';
	const start = '/images/assets/packages/senders/cinema/';
</script>

<body>
	<Senders
		text="Sender im Cinema Paket:"
		content={[
			'sky_logo_sky-cinema-action_w.png',
			'sky_logo_sky-cinema-best-of_w.png',
			'sky_logo_sky-cinema-classics_w.png',
			'sky_logo_sky-cinema-family_w.png',
			'sky_logo_sky-cinema-fun_w.png',
			'sky_logo_sky-cinema-premieren-plus24_w.png',
			'sky_logo_sky-cinema-premieren_w.png',
			'sky_logo_sky-cinema-thriller_w.png',
			'sky_logo_wb-film-hd_b.png'
		].map((img) => start + img)}
	/>
</body>
