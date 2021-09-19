<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
</script>

<PackageOverview>
	<span slot="title"> Sport Paket - Der beste Live-Sport. </span>
	<ul slot="points" class="points">
		<li>Alle Rennen der Formel 1 live – exklusiv auf Sky</li>
		<li>Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live</li>
		<li>Alle Spiele der Premier League exklusiv, davon 232 Spiele live</li>
		<li>
			Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv
		</li>
	</ul>
	<span slot="image">
		<img src="images/packages/sky_sport.jpg" alt="" style="width: 100%;" />
	</span>
</PackageOverview>
