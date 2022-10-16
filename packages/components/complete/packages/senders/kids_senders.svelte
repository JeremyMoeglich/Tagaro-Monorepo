<script lang="ts">
	import Senders from '../../../layout/senders.svelte';
	const start = '/images/assets/packages/senders/kids/';
	export let tiny_title = false;
</script>

<div>
	<Senders
		{tiny_title}
		text="Sender im Kids Paket:"
		content={[
			'94_sky_logo_boomerang.png',
			'95_sky_logo_cartoonnetwork_w.png',
			'96_sky_logo_junior.png',
			'sky_logo_nickjr_b.png',
			'sky_logo_nicktoons_w.png'
		].map((img) => start + img)}
	/>
</div>
