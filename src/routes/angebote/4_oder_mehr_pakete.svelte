<script>
	import Inklusive from '$lib/components/site_components/inklusive.svelte';
	import AllOverviews from '$lib/components/site_components/packages/overviews/all_overviews.svelte';
	import Overview4 from '$lib/components/site_components/packages/overviews/Overview4.svelte';
</script>

<div class="alignment">
	<Overview4 detailed />
	<Inklusive />
	<AllOverviews />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
