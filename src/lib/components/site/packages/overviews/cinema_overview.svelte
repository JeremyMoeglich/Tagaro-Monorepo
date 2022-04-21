<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';

	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import GradientBadge from '../../../elements/gradient_badge.svelte';
	export let detailed = false;
</script>

<PackageTemplate
	title={'Cinema Paket - Jeden Tag ein neuer Film.'}
	points={[
		'Exklusive Top-Filme kurz nach dem Kino',
		'Große Filmvielfalt über alle Genres hinweg',
		'Alle Filme ohne Werbeunterbrechung',
		'#Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
		'#Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		'#UHD optional für € 5 mtl.'
	]}
	image={'/images/assets/packages/normal/cinema.jpg'}
	{detailed}
>
	<h3>12 Monate nur {get_price_string(['entertainmentplus', 'cinema'], 'jahr')} mtl.*</h3>
	<p>
		(im Jahres-Abo, danach {get_price_string(['entertainmentplus', 'cinema'], 'monat')} mtl. im Monats-Abo)
		<br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
	<GradientBadge>20% Rabatt sichern</GradientBadge>
</PackageTemplate>
