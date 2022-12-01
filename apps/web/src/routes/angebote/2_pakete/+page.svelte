<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Overview2 from 'components/complete/packages/overviews/Overview2.svelte';
</script>

<div class="alignment">
	<Overview2 />
	<Inklusive version={"tagaro"} />
	<AllOverviews ebay_version={false} />
</div>

<style lang="scss">
	.alignment {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 90px;
	}
</style>
