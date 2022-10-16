<script lang="ts">
	import Senders from '../../../layout/senders.svelte';
	const start = '/images/assets/packages/senders/entertainment/';
	export let tiny_title = false;
</script>

<div>
	<Senders
		{tiny_title}
		text="Sender im Entertainment Paket:"
		content={[
			'116_sky_logo_13thstreethd_w.png',
			//'117_sky_logo_entertainment_w.png',
			//'16_sky_logo_romancetv_w.png',
			'388_sky_logo_spiegelgeschichtehd_w.png',
			//'452_sky_logo_jukebox.png',
			//'52_sky_logo_motorvision_w.png',
			//'72_sky_logo_heimatkanal.png',
			'81_sky_logo_natgeochannelhd_w.png',
			'83_sky_logo_discovery-hd_w.png',
			'86_sky_logo_historyhd_w.png',
			//'94_sky_logo_boomerang.png',
			//'95_sky_logo_cartoonnetwork_w.png',
			'sky_logo_beateuhse-hd.png',
			//'sky_logo_crime-investigation_w.png',
			'sky_logo_natgeowild-hd_w.png',
			'sky_logo_sky-atlantic_w.png',
			'sky_logo_sky-comedy_w.png',
			'sky_logo_sky-crime_w.png',
			'sky_logo_sky-documentary_b.png',
			'sky_logo_sky-krimi_w.png',
			'sky_logo_sky-nature_b.png',
			'sky_logo_sky-one_w.png',
			//'sky_logo_spiegel-wissen.png',
			'sky_logo_syfyhd_w.png',
			'sky_logo_universalchannelhd_b.png',
			'sky_logo_wb-comedy-hd_b.png',
			'sky_logo_wb-serie-hd_b.png'
		].map((img) => start + img)}
	/>
</div>
