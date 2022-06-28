<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';

	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import GradientBadge from '../../../elements/gradient_badge.svelte';
	export let detailed = false;
</script>

<PackageTemplate
	title={'Fußball Bundesliga Paket - Die Heimat der Bundesliga - garantiert bis 2025.'}
	points={[
		'Alle Samstagsspiele der Bundesliga live und exklusiv',
		'Alle Spiele der 2. Bundesliga live',
		'Alle Relegationsspiele und der Supercup live',
		'Mit den Sky Konferenzen und Highlight-Videos kein Tor verpassen'
	]}
	image={'/images/assets/packages/normal/bundesliga.jpg'}
	{detailed}
	price_asset_ids={['entertainmentplus', 'bundesliga']}
/>
