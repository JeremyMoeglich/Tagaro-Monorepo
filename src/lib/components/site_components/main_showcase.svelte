<script lang="ts">
	import ShowcaseLayout from '$lib/components/layout_components/showcase_layout.svelte';
	import { bonus_string } from '$lib/scripts/universal/prices';
</script>

<ShowcaseLayout
	title={'Jetzt Sky Wunschpakete buchen und im Januar Sale 50% auf Cinema, Bundesliga und Sport erhalten'}
	points={[
		'50% auf die Pakete Cinema, Fußball Bundesliga und/oder Sport erhalten*',
		`On top ${bonus_string} Bonus von uns und versandkostenfreie Lieferung*`
	]}
	side_images={['/images/badges/50p.png']}
	primary_image={'/images/visuals/januar_sale.webp'}
/>
