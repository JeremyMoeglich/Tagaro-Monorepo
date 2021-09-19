<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
</script>

<PackageOverview>
	<span slot="title">
		DAZN über Sky. Live-Sport, Dokus und vieles mehr per App und TV-Sender.
	</span>
	<ul slot="points" class="points">
		<li>
			Mehr Top-Fußball mit allen Freitags- und Sonntagsspiele der Bundesliga, fast alle Live-Spiele
			und die Konferenz der UEFA Champions League sowie einer Reihe weiterer populärer Sportarten
			wie US-Sport, Tennis, Kampfsport und vielem mehr.
		</li>
		<li>
			Das Beste von DAZN auf zwei neuen DAZN TV-Sendern im Sky Programm (derzeit nicht verfügbar im
			Kabelnetz von Vodafone/Unitymedia)
		</li>
		<li>
			DAZN Top Events direkt neben deinem Sky Programm auf Sky Q. Nur mit einer Fernbedienung - ohne
			Hin- und Herschalten.
		</li>
		<li>Abrechnung und Kundenservice aus einer Hand. Sky ist dein Ansprechpartner.</li>
	</ul>
	<span slot="image">
		<img src="images/external/dazn_double.jpg" alt="" style="width: 100%;" />
	</span>
</PackageOverview>
