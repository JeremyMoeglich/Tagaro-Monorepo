<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import SportOverview from '$lib/site_components/packages/overviews/sport_overview.svelte';
	import SportSenders from '$lib/site_components/packages/senders/sport_senders.svelte';
</script>

<body>
	<div class="alignment">
		<SportOverview detailed={true} />
		<SportSenders />
		<Inklusive />
	</div>
</body>

<style lang="scss">
	@import url('/src/lib/style/mixins.scss');
	.alignment {
		margin-top: 90px;
	}
</style>
