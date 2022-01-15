<script>
	import Inklusive from '$lib/components/site_components/inklusive.svelte';
	import BundesligaOverview from '$lib/components/site_components/packages/overviews/bundesliga_overview.svelte';
	import BundesligaSenders from '$lib/components/site_components/packages/senders/bundesliga_senders.svelte';
	import EntertainmentSenders from '$lib/components/site_components/packages/senders/entertainment_senders.svelte';
</script>

<body>
	<div class="alignment">
		<BundesligaOverview detailed={true} />
		<BundesligaSenders />
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
