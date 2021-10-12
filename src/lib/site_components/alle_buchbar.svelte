<script>
	import LineSpacer from './line_spacer.svelte';
</script>

<LineSpacer />
<div>
	<h1 class="gradient_text centered_text">Alle Sky Pakete flexibel buchbar</h1>
	<p class="styled_p centered_text">
		Erhalten Sie hier Ihr Sky Abonnement mit versandkostenfreier Lieferung. <br />
		Wählen Sie Ihre Wunschpakete individuell aus Sky Entertainment, Cinema, Sport und/oder Fußball-Bundesliga.
	</p>
</div>
<LineSpacer />

<style lang="scss">
	@import url('/src/lib/style/global.scss');

	.centered_text {
		text-align: center;
		max-width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
	.styled_p {
		line-height: 30px;
		font-size: 18px;
	}
</style>
