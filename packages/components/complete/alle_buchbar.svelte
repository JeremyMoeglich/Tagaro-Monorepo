<script lang="ts">
	import LineSpacer from '../elements/line.svelte';
	const space = '50px';
</script>

<LineSpacer {space} />
<div>
	<h1 class="centered_text gradient_text">Alle Sky Pakete flexibel buchbar</h1>
	<p class="styled_p centered_text">
		Erhalte hier dein Sky Abonnement mit versandkostenfreier Lieferung. <br />
		Wähle deine Wunschpakete individuell aus Sky Entertainment, Cinema, Sport und/oder Fußball-Bundesliga.
	</p>
</div>
<LineSpacer {space} />

<style lang="scss">
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
