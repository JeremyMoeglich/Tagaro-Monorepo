<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	export let detailed = false;
</script>

<PackageTemplate
	title={'DAZN über Sky. Live-Sport, Dokus und vieles mehr per App und TV-Sender.'}
	points={[
		'Mehr Top-Fußball mit allen Freitags- und Sonntagsspiele der Bundesliga, fast alle Live-Spiele und die Konferenz der UEFA Champions League sowie einer Reihe weiterer populärer Sportarten wie US-Sport, Tennis, Kampfsport und vielem mehr.',

		'Das Beste von DAZN auf zwei neuen DAZN TV-Sendern im Sky Programm (derzeit nicht verfügbar im Kabelnetz von Vodafone/Unitymedia)',

		'DAZN Top Events direkt neben deinem Sky Programm auf Sky Q. Nur mit einer Fernbedienung - ohne Hin- und Herschalten.',

		'Abrechnung und Kundenservice aus einer Hand. Sky ist dein Ansprechpartner.'
	]}
	image={'/images/external/dazn_double.jpg'}
	{detailed}
/>
