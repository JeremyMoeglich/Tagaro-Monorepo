<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Overview4 from 'components/complete/packages/overviews/Overview4.svelte';
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
