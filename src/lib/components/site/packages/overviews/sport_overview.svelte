<script>
	import GradientBadge from '$lib/components/elements/gradient_badge.svelte';

	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	export let detailed = false;
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
</script>

<PackageTemplate
	title={'Sport Paket - Der beste Live-Sport.'}
	points={[
		'Alle Rennen der Formel 1 live - exklusiv auf Sky',
		'Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live',
		'Alle Spiele der Premier League exklusiv, davon 232 Spiele live',
		'Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv'
	]}
	image={'/images/assets/packages/normal/sport.jpg'}
	{detailed}
>
	<h3>12 Monate nur {get_price_string(['entertainment', 'sport'], 'jahr')} mtl.*</h3>
	<p>
		(im Jahres-Abo, danach {get_price_string(['entertainment', 'sport'], 'monat')} mtl. im Monats-Abo)
		<br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
	<GradientBadge>50% Rabatt auf Premiumpakete</GradientBadge>
</PackageTemplate>
