<script>
	import Inklusive from '$lib/components/site_components/inklusive.svelte';
	import SportOverview from '$lib/components/site_components/packages/overviews/sport_overview.svelte';
	import SportSenders from '$lib/components/site_components/packages/senders/sport_senders.svelte';
	import EntertainmentSenders from '$lib/components/site_components/packages/senders/entertainment_senders.svelte';
</script>

<body>
	<div class="alignment">
		<SportOverview detailed={true} />
		<SportSenders />
		<EntertainmentSenders />
		<Inklusive />
	</div>
</body>

<style lang="scss">
	.alignment {
		margin-top: 90px;
		margin-bottom: 90px;
	}
</style>
