<script lang="ts">
	import AllOverviews from '../../../../../packages/components/complete/all_overviews.svelte';
	import AlleBuchbar from 'components/complete/alle_buchbar.svelte';
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
	import VertragsinfomationenBox from '../../../../../packages/components/complete/vertragsinfomationen_box.svelte';
	import { get_price_string } from 'asset_library/prices';
	import Meta from '../meta.svelte';
	import { nspace } from 'open_constants';
</script>

<Meta />


<div class="outer">
	<div class="alignment">
		<h1 class="gradient_text">Sky Q ist da - Alles in einem auf allen Geräten</h1>
		<h2 class="gradient_text">Schaue dein Sky Programm auf bis zu 5 Geräten gleichzeitig</h2>

		<p>
			Mit deinem Sky Abonnement erhältst du auch Zugang zu Sky Q. Damit schaust du dein Programm
			zuhause und unterwegs mit Sky Go und können bis zu 5 Geräte gleichzeitig nutzen (3 TVs und 3
			mobile Geräte). Voraussetzung ist die Multiscreen Option für zzgl. {@html get_price_string(
				['multiscreen'],
				'jahr'
			)} mtl. zu deinem Wunschabonnement. Zusätzlich mit Multiscreen erhältst du einen Sky Q Mini Receiver
			für einmalig €{@html nspace}39 oder einen 2. Sky Q Receiver für einmalig €{@html nspace}49.
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
						<li>
							Mediatheken von ARD und ZDF sowie Smart-TV-Apps sind in der Sky Q App integriert
						</li>
						<li>Eigene Aufnahmen können kannst du auf deinem Sky Receiver speichern</li>
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
						<li>Nahtlos Folge für Folge deiner Lieblingsserie schauen</li>
						<li>Schaue weiter, wo du zuletzt aufgehört hast - auf jedem der 5 Geräte</li>
						<li>Ganz einfach finden, was du sehen möchtest</li>
					</ul>
				</div>
				<div>
					<h4>Auf all deinen Geräten</h4>
					<ul>
						<li>Zuhause und unterwegs schauen</li>
						<li>Schaue dein Wunschprogramm auf bis zu 5 Geräten gleichzeitig</li>
					</ul>
				</div>
			</div>
			<img src="/images/visuals/skyq_vorteile_3.png" alt="" />
		</div>
		<div class="button">
			<AboformularButton
				text={'Jetzt dein Sky Wunschabo mit Sky Q zusammenstellen'}
				source={'Sky_Q_button'}
			/>
		</div>
	</div>
	<AlleBuchbar />
	<AllOverviews ebay_version={false} />
	<div class="box">
		<VertragsinfomationenBox />
	</div>
</div>

<style lang="scss">
	.button {
		width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
	.box {
		margin: 50px 0;
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
