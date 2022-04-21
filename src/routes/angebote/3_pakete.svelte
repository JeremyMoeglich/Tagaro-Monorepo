<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import AllOverviews from '$lib/components/site/packages/overviews/all_overviews.svelte';
	import Overview3 from '$lib/components/site/packages/overviews/Overview3.svelte';
</script>

<div class="alignment">
	<Overview3 detailed />
	<Inklusive />
	<AllOverviews />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
