<script lang="ts">
	import ShowcaseLayout from '$lib/components/layout_components/showcase_layout.svelte';
	//import { bonus_string } from '$lib/scripts/universal/prices';
</script>

<!-- <ShowcaseLayout
	title={'Jetzt Sky Wunschpakete buchen und im Winter Sale 50% auf Cinema, Bundesliga und Sport erhalten'}
	points={[
		'50% auf die Pakete Cinema, Fußball Bundesliga und/oder Sport erhalten*',
		`On top ${bonus_string} Bonus von uns und versandkostenfreie Lieferung*`
	]}
	side_images={['/images/badges/50p.png']}
	primary_image={'/images/visuals/winter_sale.webp'}
/> -->

<ShowcaseLayout
	title={'Nur für kurze Zeit: Jetzt Sky Wunschpakete buchen und einen Amazon Gutschein im Wert von bis zu € 125* erhalten.'}
	points={[
		'Bei Buchung von Sky Entertainment + mind. 2 Pakete oder Entertainment Plus + mind. 1 Paket ein € 75 Amazon Gutschein on top*',
		'Bei Buchung von Sky Entertainment + mind. 3 Pakete ein € 125 Amazon Gutschein on top*',
		'Zusätzlich € 20 Bonus von uns und versandkostenfreie Lieferung*'
	]}
	side_images={['/images/external/amazongiftcard.png']}
/>