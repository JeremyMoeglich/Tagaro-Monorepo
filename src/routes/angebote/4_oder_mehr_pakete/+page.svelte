<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import AllOverviews from '$lib/components/site/packages/overviews/all_overviews.svelte';
	import Overview4 from '$lib/components/site/packages/overviews/Overview4.svelte';
</script>

<div class="alignment">
	<Overview4 />
	<Inklusive />
	<AllOverviews />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
