<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Overview3 from 'components/complete/packages/overviews/Overview3.svelte';
</script>

<div class="alignment">
	<Overview3 />
	<Inklusive />
	<AllOverviews />
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
	}
</style>
