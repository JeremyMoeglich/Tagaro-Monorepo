<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import EntertainmentOverview from '$lib/site_components/packages/overviews/entertainment_overview.svelte';
	import EntertainmentSenders from '$lib/site_components/packages/senders/entertainment_senders.svelte';
</script>

<body>
	<div class="alignment">
		<EntertainmentOverview detailed={true} />
		<EntertainmentSenders />
		<Inklusive />
	</div>
</body>

<style lang="scss">
	@import url('/src/lib/style/mixins.scss');
	.alignment {
		margin-top: 90px;
	}
</style>
