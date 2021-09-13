<script>
    import PackageOverview from "$lib/layout_components/package_overview.svelte";
</script>

<PackageOverview>
    <span slot="title">
        Test
    </span>
    <span slot="points">
        <li>Test</li>
        <li>Test2</li>
    </span>
    <span slot="image">
        <img src="images/packages/sky_bundesliga.jpg" alt="">
    </span>
</PackageOverview>