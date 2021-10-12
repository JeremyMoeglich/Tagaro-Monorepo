<script>
	import Button from '$lib/layout_components/button.svelte';
</script>

<div class="alignment">
	<h2>Schnell und einfach Sky abonnieren!</h2>
	<p>
		Sie möchten gerne Sky bestellen und das bessere Fernsehen kennenlernen? Dann sind Sie bei TAGARO
		genau richtig. Wir vermitteln Ihnen als autorisierter Sky-Onlinehändler Sky-Verträge bereits
		seit 2006. Viele Angebote gibt es exklusiv und mit Abschlussprämie.
	</p>
	<Button text={'Angebote & Pakete'} route={'/sky_angebote'} />
</div>

<style lang="scss">
	@import '../style/global.scss';
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 1000px;
		padding: 70px 20px;
		margin-left: auto;
		margin-right: auto;
		gap: 20px;
	}
	h2 {
		font-size: 35px;
		@include gradient-text;
	}
</style>
