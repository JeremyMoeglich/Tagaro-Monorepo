<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import AllOverviews from '$lib/site_components/packages/overviews/all_overviews.svelte';
	import Overview2 from '$lib/site_components/packages/overviews/Overview2.svelte';
</script>

<div class="alignment">
	<Overview2 detailed />
	<Inklusive />
	<AllOverviews />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
