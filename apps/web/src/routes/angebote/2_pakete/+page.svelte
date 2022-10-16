<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Overview2 from 'components/complete/packages/overviews/Overview2.svelte';
</script>

<div class="alignment">
	<Overview2 />
	<Inklusive />
	<AllOverviews ebay_version={false} />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
