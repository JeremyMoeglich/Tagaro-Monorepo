<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import BundesligaOverview from '$lib/site_components/packages/overviews/bundesliga_overview.svelte';
	import BundesligaSenders from '$lib/site_components/packages/senders/bundesliga_senders.svelte';
</script>

<body>
	<div class="alignment">
		<BundesligaOverview detailed={true} />
		<BundesligaSenders />
		<Inklusive />
	</div>
</body>

<style lang="scss">
	@import url('/src/lib/style/mixins.scss');
	.alignment {
		margin-top: 90px;
	}
</style>
