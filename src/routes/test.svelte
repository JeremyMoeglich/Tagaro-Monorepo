<script>
	import PackageOverview from '$lib/layout_components/package_overview.svelte';
	import InputField from '$lib/layout_components/input_field.svelte';
	import PackageTable from '$lib/site_components/package_table.svelte';
</script>

<PackageOverview>
	<span slot="title">
		This is a random sentence to test a title - ok i don't know what to write
	</span>
	<ul slot="points" class="points">
		<li>Point1</li>
		<li>Point2</li>
		<li>Some longer Point, i don't know what to write again</li>
		<li>ok</li>
		<li>Some very very very long text which doesn't make sense but is atleast very very long</li>
	</ul>
	<span slot="image">
		<img src="images/packages/sky_bundesliga.jpg" alt="" style="width: 100%;" />
	</span>
</PackageOverview>

<p>This is the end of that</p>

<InputField />

<PackageTable />
