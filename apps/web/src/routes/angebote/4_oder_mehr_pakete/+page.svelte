<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Overview4 from 'components/complete/packages/overviews/Overview4.svelte';
</script>

<div class="alignment">
	<Overview4 />
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
