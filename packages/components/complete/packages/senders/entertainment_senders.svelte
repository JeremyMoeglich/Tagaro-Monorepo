<script lang="ts">
	import Senders from '../../../layout/senders.svelte';
	const start = '/images/assets/packages/senders/entertainment/';
	export let tiny_title = false;
</script>

<div>
	<Senders
		{tiny_title}
		title="Sender im Entertainment Paket:"
		content={[
			{ image: 'sky_logo_sky-one_w.png', text: 'Serien und Shows für beste Unterhaltung' },
			{
				image: 'sky_logo_sky-atlantic_w.png',
				text: 'Herausragende Serien als exklusive Deutschland Premieren'
			},
			{
				image: 'sky_logo_sky-krimi_w.png',
				text: 'Die beliebtesten Kommissare und Detektive im Dauereinsatz'
			},
			{
				image: 'sky_logo_sky-showcase_b.png',
				text: 'Sky Showcase – Dein neuer Sender für alle Entertainment-Highlights. Ab 4. August'
			},
			{
				image: 'sky_logo_sky-nature_b.png',
				text: 'Atemberaubende Formate über die Wunder und die Schönheit unserer Natur'
			},
			{
				image: 'sky_logo_sky-documentary_b.png',
				text: 'Dokumentarfilme und Serien, die herausfordern, fesseln und unterhalten'
			},
			{
				image: 'sky_logo_sky-comedy_w.png',
				text: 'Der Gute-Laune-Sender mit beliebten Sitcoms und Comedy-Serien aus den USA.'
			},
			{
				image: 'sky_logo_sky-crime_w.png',
				text: 'Sky Crime ist das Zuhause für alle Fans von Hochspannung und True Crime.'
			},
			{
				image: '116_sky_logo_13thstreethd_w.png',
				text: 'Internationale Crime-Serien und Thriller'
			},
			{
				image: 'sky_logo_wb-comedy-hd_b.png',
				text: 'Die beliebtesten Sitcoms und Comedy-Serien aus den USA'
			},
			{
				image: 'sky_logo_wb-serie-hd_b.png',
				text: 'Internationale Top-Serien und preisgekrönte Eigenproduktionen'
			},
			{
				image: 'sky_logo_syfyhd_w.png',
				text: 'Für Fans von Abenteuer, Mystery, Fantasy und Science-Fiction.'
			},
			{
				image: 'sky_logo_universalchannelhd_b.png',
				text: 'Für alle Film-und Serienfans von Comedy bis Drama'
			},
			{
				image: 'sky_logo_natgeowild-hd_w.png',
				text: 'Faszinierende Dokumentationen aus Natur und Tierwelt'
			},
			{
				image: '83_sky_logo_discovery-hd_w.png',
				text: 'Packende Dokumentationen zu Abenteuer, Technik und Wissenschaft'
			},
			{
				image: '81_sky_logo_natgeochannelhd_w.png',
				text: 'Für Entdecker - mit spannenden Dokumentationen'
			},
			{
				image: '86_sky_logo_historyhd_w.png',
				text: 'Dokumentationen über besondere Menschen und Ereignisse mit preisgekrönten Eigenproduktionen'
			},
			{
				image: '388_sky_logo_spiegelgeschichtehd_w.png',
				text: 'Weltgeschichte mit packenden Dokumentationen über Ereignisse, Menschen und Momente des 20. Jahrhunderts'
			}
			//{image:'117_sky_logo_entertainment_w.png'},
			//{image:'16_sky_logo_romancetv_w.png'},
			//{image:'452_sky_logo_jukebox.png'},
			//{image:'52_sky_logo_motorvision_w.png'},
			//{image:'72_sky_logo_heimatkanal.png'},
			//{image:'94_sky_logo_boomerang.png'},
			//{image:'95_sky_logo_cartoonnetwork_w.png'},
			//{ image: 'sky_logo_beateuhse-hd.png' }
			//{image:'sky_logo_crime-investigation_w.png'},
			//{image:'sky_logo_spiegel-wissen.png'},
		].map((e) => ({
			...e,
			image: start + e.image
		}))}
	/>
</div>
