<script>
	import LineSpacer from './line_spacer.svelte';
</script>

<LineSpacer />
<div>
	<h1 class="blue_gradient_text centered_text">Alle Sky Pakete flexibel buchbar</h1>
	<p class="styled_p centered_text">
		Erhalten Sie hier Ihr Sky Abonnement mit versandkostenfreier Lieferung. <br />
		Wählen Sie Ihre Wunschpakete individuell aus Sky Entertainment, Cinema, Sport und/oder Fußball-Bundesliga.
	</p>
</div>
<LineSpacer />

<style lang='scss'>
	.blue_gradient_text {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
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
