<script>
	import Meta from '../meta.svelte';
</script>

<Meta />

<div class="outer">
	<div class="back">
		<div class="tb">
			<h1 class="gradient_text">Service</h1>
		</div>
		<div class="tb">
			<h2 class="gradient_text">Hole dir Sky mit einem exklusivem Preisvorteil nach Hause!</h2>
		</div>
		<div class="side_alignment">
			<div>
				<p>
					Du möchtest gerne Sky bestellen und das bessere Fernsehen kennenlernen? Dann bist du bei
					TAGARO genau richtig. Wir vermitteln dir als Sky Onlinehändler Sky Verträge bereits seit
					2006.
				</p>
				<p>
					Dein Vorteil - Du erhältst dazu bei den meisten Angeboten eine Abschlussprämie (Cashback)
					und profitierst von einem schnellen und persönlichen Service bei allen Fragen.
				</p>
				<p>
					Mit persönlicher Betreuung und direkten Ansprechpartnern konnten wir bereits tausende
					Kunden über die Jahre von unserem Service überzeugen. Schaue dir gerne unsere Bewertungen
					u.a. bei eBay an.
				</p>
			</div>
			<div>
				<p>
					Mit wenigen Klicks auf unserer Seite gelangst du direkt zum passenden
					Sky-Abo-Bestellformular. Dort kannst du deinen Paketwunsch, deine Empfangsart sowie deine
					Anschrift direkt online eintragen. Das Formular ist SSL-geschützt für eine sichere
					Übertragung der sensiblen Daten.
				</p>
				<p>
					Nach erfolgreicher Anmeldung erhältst du von uns sowie von Sky direkt eine schriftliche
					Bestätigung deines Sky-Abonnements. Deine Unterlagen, die Smartcard sowie die bestellte
					Sky-Hardware erhältst du von Sky zugesendet. Die Ware ist in der Regel in 1-3 Tagen bei
					dir.
				</p>
				<p>
					Im Gegensatz zum stationären Handel kannst du dein Sky-Abonnement bei uns innerhalb von 14
					Tagen ab Vertragsschluss auch wieder widerrufen. Dieses Recht steht dir nur im
					Onlinehandel zu. Melde dich einfach rechtzeitig bei uns und wir leiten die Rückabwicklung
					ein.
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.outer {
		position: relative;
		z-index: 0;
	}
	p {
		color: white;
	}
	.back {
		padding-top: 40px;
	}
	.back::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/specific/header-2018.jpg');
		filter: brightness(23%) contrast(60%) sepia(100%) hue-rotate(190deg) saturate(300%);
		z-index: -5;
	}
	.side_alignment {
		display: flex;
		max-width: min(1000px, 85vw);
		padding: 20px 40px;
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}
	h1 {
		text-align: center;
		font-size: 42px;
		margin: 0px;
		padding: 20px;
		color: white;
	}
	.side_alignment > div {
		max-width: 50%;
		min-width: 50%;
		padding: 40px 20px;
	}
	h2 {
		color: white;
	}
	.tb {
		max-width: max-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>
