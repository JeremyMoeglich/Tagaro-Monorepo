<script lang="ts">
	import Button from '../elements/interactive/buttons/button.svelte';
</script>

<div class="outer_alignment">
	<a href="/angebote">
		<div class="alignment">
			<h2 class="gradient_text">Schnell und einfach Sky abonnieren!</h2>
			<p>
				Du möchtest gerne Sky bestellen und das bessere Fernsehen kennenlernen? Dann bist du bei
				TAGARO genau richtig. Wir vermitteln dir als Sky Onlinehändler Sky Verträge bereits seit
				2006. Viele Angebote gibt es zusätzlich mit einer Abschlussprämie.
			</p>
			<Button text={'Angebote & Pakete'} on_click={'/angebote'} />
		</div>
	</a>
</div>

<style lang="scss">
	a {
		text-decoration: none;
		color: black;
	}
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
		transition-duration: 300ms;
	}
	.alignment:hover {
		transform: scale(1.03);
	}
	h2 {
		font-size: 35px;
	}
	.outer_alignment {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 20px;
		gap: 20px;
	}
</style>
