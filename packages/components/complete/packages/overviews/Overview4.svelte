<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	import { get_price_string } from 'asset_library/prices';
</script>

<PackageTemplate
	show_price
	show_slot={false}
	title={'4 Sky Pakete oder mehr - Großartige Unterhaltung aus allen Bereichen'}
	points={[
		'Programmvielfalt mit zahlreichen hochwertigen deutschen Pay-TV Sendern im Entertainment Paket',
		'Nationaler oder internationaler Live-Sport im Fußball-Bundesliga oder Sport Paket',
		'Sky Entertainment + Cinema + Sport + Bundesliga inkl. HD',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		`UHD optional für ${get_price_string(['uhd'], 'jahr')} mtl.`,
		`Sky Kids optional für ${get_price_string(['kids'], 'jahr')} mtl.`
	]}
	price_asset_ids={['entertainmentplus', 'cinema', 'sport', 'bundesliga']}
/>
