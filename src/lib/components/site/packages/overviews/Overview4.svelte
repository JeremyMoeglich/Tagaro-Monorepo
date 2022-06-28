<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	export let detailed = false;
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import GradientBadge from '../../../elements/gradient_badge.svelte';
</script>

<PackageTemplate
	title={'4 Sky Pakete oder mehr - Großartige Unterhaltung aus allen Bereichen'}
	points={[
		'Programmvielfalt mit zahlreichen hochwertigen deutschen Pay-TV Sendern im Entertainment Paket',
		'Nationaler oder internationaler Live-Sport im Fußball-Bundesliga oder Sport Paket',
		'Sky Entertainment + Cinema + Sport + Bundesliga inkl. HD',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		'UHD optional für € 5 mtl.',
		'Sky Kids optional für € 5 mtl.'
	]}
	{detailed}
	price_asset_ids={['entertainmentplus', 'cinema', 'sport', 'bundesliga']}
/>
