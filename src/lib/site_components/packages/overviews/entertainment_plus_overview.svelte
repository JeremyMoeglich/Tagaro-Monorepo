<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	export let detailed = false;
</script>

<PackageOverview
	title={'Entertainment Plus Paket - Alle Sky Serien und Netflix.'}
	points={[
		'Jetzt Netflix als Upgrade zu jedem Abo hinzubuchbar. Einfach im Bestellvorgang "Abonnement mit Netflix" auswählen',

		'Erweitere Dein Entertainment Paket um Netflix - zum Vorteilspreis',
		'Inklusive Netflix-Standard-Abo (HD, 2 Streams)',
		'Bereits Netflix-Kunde? Einfach Dein bestehendes Netflix Konto mitnehmen'
	]}
	image={'/images/packages/sky_entertainment-plus.jpg'}
	{detailed}
>
	<h3>12 Monate nur € 20,00 mtl.*</h3>
	<p>
		(im Jahres-Abo, danach € 25,00 mtl. im Monats-Abo) <br />
		Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
	</p>
</PackageOverview>
