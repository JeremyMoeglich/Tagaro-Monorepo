<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
</script>

<PackageOverview>
	<span slot="title">
		Fußball Bundesliga Paket - Die Heimat der Bundesliga – garantiert bis 2025.
	</span>
	<ul slot="points" class="points">
		<li>Alle Samstagsspiele der Bundesliga live und exklusiv</li>
		<li>Alle Spiele der 2. Bundesliga live</li>
		<li>Alle Relegationsspiele und der Supercup live</li>
		<li>Mit den Sky Konferenzen und Highlight-Videos kein Tor verpassen</li>
	</ul>
	<span slot="image">
		<img src="images/packages/sky_bundesliga.jpg" alt="" style="width: 100%;" />
	</span>
</PackageOverview>
