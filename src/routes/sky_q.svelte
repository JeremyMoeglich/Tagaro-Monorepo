<script>
	import Button from '$lib/layout_components/button.svelte';
	import AllOverviews from '$lib/site_components/packages/overviews/all_overviews.svelte';
	import AlleBuchbar from '$lib/site_components/alle_buchbar.svelte';
	import * as urls from '$lib/vars/urls';
</script>

<div class="alignment">
	<h1>Sky Q ist da - Alles in einem auf allen Geräten</h1>
	<h2>Schauen Sie ihr Sky Programm auf bis zu 5 Geräten gleichzeitig</h2>

	<p>
		Mit Ihrem Sky Abonnement erhalten Sie auch Zugang zu Sky Q. Damit schauen Sie Ihr Programm
		zuhause und unterwegs mit Sky Go und können bis zu 5 Geräte gleichzeitig nutzen (3 TVs und 3
		mobile Geräte). Voraussetzung ist die Multiscreen Option für zzgl. € 10 mtl. zu ihrem
		Wunschabonnement. Zusätzlich mit Multiscreen erhalten Sie einen Sky Q Mini Receiver für einmalig
		€ 29 oder einen 2. Sky Q Receiver für einmalig € 49.
	</p>

	<img src="/images/visuals/skyq_header_4.png" alt="" />

	<div class="side_alignment">
		<div>
			<h3>Sky Q - einfach das beste Fernseherlebnis</h3>
			<div>
				<h4>Alles in einem</h4>
				<ul>
					<li>alle Sky und Free TV Sender</li>
					<li>Tausende Filme und Serien auf Abruf (Sky On Demand)</li>
				</ul>
			</div>
			<div>
				<h4>Neu mit Sky Q:</h4>
				<ul>
					<li>Mediatheken von ARD und ZDF sowie Smart-TV-Apps sind in der Sky Q App integriert</li>
					<li>Eigene Aufnahmen können Sie auf Ihrem Sky Receiver speichern</li>
					<li>Sky Q App kann im jeweiligen App Store heruntergeladen werden</li>
				</ul>
			</div>
			<div>
				<h4>Nichts mehr verpassen</h4>
				<ul>
					<li>Bereits laufende Sendungen ganz einfach von vorne starten</li>
					<li>Laufendes Programm pausieren oder aufnehmen</li>
					<li>Verpasste Sendungen der letzten Woche auf Abruf</li>
				</ul>
			</div>
			<div>
				<h4>Einzigartige Qualität</h4>
				<ul>
					<li>Ultra-HD</li>
				</ul>
			</div>
			<div>
				<h4>Persönlicher, einfacher, komfortabler</h4>
				<ul>
					<li>Nahtlos Folge für Folge Ihrer Lieblingsserie schauen</li>
					<li>Schauen Sie weiter, wo Sie zuletzt aufgehört haben - auf jedem der 5 Geräte</li>
					<li>Ganz einfach finden, was Sie sehen möchten</li>
				</ul>
			</div>
			<div>
				<h4>Auf all deinen Geräten</h4>
				<ul>
					<li>Zuhause und unterwegs schauen</li>
					<li>Schauen Sie Ihr Wunschprogramm auf bis zu 5 Geräten gleichzeitig</li>
				</ul>
			</div>
		</div>
		<img src="/images/visuals/skyq_vorteile_3.png" alt="" />
	</div>
	<div class="btn">
		<Button text="Jetzt Ihr Sky Wunschabo mit Sky Q zusammenstellen" route={urls.aboformular} />
	</div>
</div>
<AlleBuchbar />
<AllOverviews />

<style lang="scss">
	@import '../lib/style/global.scss';
	.btn {
		width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
	h1,
	h2,
	h3,
	h4 {
		@include gradient-text;
	}
	h1,
	h2 {
		text-align: center;
	}
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1500px;
		width: 85vw;
		margin-left: auto;
		margin-right: auto;
		margin-top: 40px;
	}
	.side_alignment {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		padding-bottom: 30px;
	}
	ul {
		line-height: 250%;
	}
	.side_alignment > img {
		height: 1000px;
		max-width: 85vw;
	}
</style>
