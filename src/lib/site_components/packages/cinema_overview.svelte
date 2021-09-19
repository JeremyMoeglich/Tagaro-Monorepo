<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
</script>

<PackageOverview>
	<span slot="title"> Cinema Paket - Jeden Tag ein neuer Film. </span>
	<ul slot="points" class="points">
		<li>Exklusive Top-Filme kurz nach dem Kino</li>
		<li>Große Filmvielfalt über alle Genres hinweg</li>
		<li>Alle Filme ohne Werbeunterbrechung</li>
	</ul>
	<span slot="image">
		<img src="images/packages/sky_cinema.jpg" alt="" style="width: 100%;" />
	</span>
</PackageOverview>
