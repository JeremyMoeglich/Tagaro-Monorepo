<script>
	import Senders from '$lib/components/layout/senders.svelte';
	const start = '/images/assets/packages/senders/kids/';
</script>

<body>
	<Senders
		text="Sender im Bundesliga Paket:"
		content={[
			'94_sky_logo_boomerang.png',
			'95_sky_logo_cartoonnetwork_w.png',
			'96_sky_logo_junior.png',
			'sky_logo_nickjr_b.png',
			'sky_logo_nicktoons_w.png'
		].map((img) => start + img)}
	/>
</body>
