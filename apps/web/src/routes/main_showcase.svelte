<script lang="ts">
	import ShowcaseTemplate from './showcase_template.svelte';
	import { bonus_string, get_price_string } from 'asset_library/prices';

	//const savings = get_savings_string(['entertainmentplus', 'cinema', 'sport', 'bundesliga']);
</script>

<ShowcaseTemplate
	redirect_url={'/angebote/entertainmentplus-cinema-sport-bundesliga'}
	hide_left={true}
	points={[
		`€ 20 Bonus von TAGARO nach ca. 8 Wochen auf dein Konto*`,
		`Zusätzlich 500 PAYBACK Basis-Punkte. Oder über die PAYBACK App oder online weitere Punkte, bei Aktivierung eines eCoupons vor Aboaufnahme`,
		`Sicher dir alles von Sky und spare bis zu € 96 im ersten Jahr*`
	]}
	top_margin={20}
>
	<span slot="subtitle0">
		z.B. Entertainment Plus für {@html get_price_string(['entertainmentplus'], 'jahr')} mtl. oder alle Sky
		Pakete inkl. Paramount+ für
		{@html get_price_string(['entertainment', 'cinema', 'bundesliga', 'sport'], 'jahr')} mtl.*
	</span>
	<span slot="subtitle1">
		Bei Vermittlung über TAGARO zusätzlich mit einem Bonus über {@html bonus_string()}* <br> Alle Angebote vom langjährigen Onlinehändler mit schneller und zuverlässiger Bearbeitung.
	</span>
	<span slot="subtitle2"></span>
</ShowcaseTemplate>
