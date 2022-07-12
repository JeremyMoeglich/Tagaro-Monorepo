<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
</script>

<PackageTemplate
	title={'Cinema Paket - Jeden Tag ein neuer Film.'}
	points={[
		'Exklusive Top-Filme kurz nach dem Kino',
		'Große Filmvielfalt über alle Genres hinweg',
		'Alle Filme ohne Werbeunterbrechung',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		`UHD optional für ${get_price_string(['uhd'], 'jahr')} mtl.`
	]}
	image={'/images/assets/packages/normal/cinema.jpg'}
	price_asset_ids={['entertainmentplus', 'cinema']}
/>
