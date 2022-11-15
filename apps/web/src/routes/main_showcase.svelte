<script lang="ts">
	import ShowcaseTemplate from './showcase_template.svelte';
	import { bonus_string, get_savings_string } from 'asset_library/prices';

	const savings = get_savings_string(['entertainmentplus', 'cinema', 'sport', 'bundesliga']);
</script>

<ShowcaseTemplate
	title={`Das Beste von Sky für nur €&nbsp;30 mtl. inkl. €&nbsp;100 Amazon Gutschein von Sky`}
	primary_image={'/images/visuals/sky_22-11_cyberweek_text_l_v2.webp'}
	points={[
		`€&nbsp;100 Amazon Gutschein bei Buchung von mindestens Entertainment + 3 Pakete*`,
		`On top ${bonus_string} Bonus von uns und versandkostenfreie Lieferung*`,
		'Zusätzlich 500 PAYBACK Basis-Punkte. Oder über die PAYBACK App oder online weitere Punkte, <br />bei Aktivierung eines eCoupons vor Aboaufnahme'
	]}
	side_images={['/images/badges/dazn.svg']}
/>

<!-- <ShowcaseTemplate
	title={`Die beliebtesten Paketkombis mit bis zu ${savings} Sparvorteil`}
	points={[
		`Bis zu ${savings} Sparvorteil und Vorteilspreis für DAZN Jahresabo erhalten*`,
		'Zusätzlich 500 PAYBACK Punkte, wenn Sie sammeln*',
		`On top ${bonus_string} Bonus von uns und versandkostenfreie Lieferung*`,
		'Zusätzlich 500 PAYBACK Basis-Punkte. Oder über die PAYBACK App oder online weitere Punkte, <br />bei Aktivierung eines eCoupons vor Aboaufnahme'
	]}
	side_images={['/images/badges/dazn.svg']}
/> -->

<!-- <ShowcaseLayout
	title={'Nur für kurze Zeit: Jetzt Sky Wunschpakete buchen und einen Amazon Gutschein im Wert von bis zu €&nbsp;125* erhalten.'}
	points={[
		'Bei Buchung von Sky Entertainment + mind. 1 Paket oder Entertainment Plus ein €&nbsp;50 Amazon Gutschein on top*',
		'Bei Buchung von Sky Entertainment Plus + mind. 1 Paket ein €&nbsp;125 Amazon Gutschein on top*',
		'Zusätzlich €&nbsp;20 Bonus von uns und versandkostenfreie Lieferung*'
	]}
	side_images={['/images/external/amazon.webp']}
/> -->

<!-- <ShowcaseLayout
	title={'Spring Special: Buche zwei Sky Programmpakete und erhalte ein gratis* Samsung Tab A8 im Wert von €&nbsp;229'}
	primary_image={'/images/visuals/free_tablet_offer_image1.webp'}
	points={[
		'Bei Buchung von mindestens 2 Premiumpaketen Samsung A8 Tablet von Sky on top*',
		'Zusätzlich €&nbsp;20 Bonus von uns und versandkostenfreie Lieferung*'
	]}
	side_images={['/images/badges/keine_aktivierung.webp']}
/> -->

<!-- <ShowcaseTemplate
	title={'Jetzt Sky bestellen und 20% Rabatt sichern bei Buchung von Entertainment Plus + mindestens 1 Programmpaket*'}
	points={[
		'Ab Buchung von Entertainment Plus + 1 Paket <mark>20% Rabatt</mark>*',
		'Zusätzlich €&nbsp;20 Bonus von uns und versandkostenfreie Lieferung*'
	]}
	side_images={['/images/badges/keine_aktivierung.svg']}
/> -->
