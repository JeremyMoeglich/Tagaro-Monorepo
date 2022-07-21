<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import BundesligaOverview from '$lib/components/site/packages/overviews/bundesliga_overview.svelte';
	import BundesligaSenders from '$lib/components/site/packages/senders/bundesliga_senders.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<BundesligaOverview animated />
		<BundesligaSenders />
		<EntertainmentSenders />
		<Inklusive />
	</div>
</div>

<style lang="scss">
	.alignment {
		margin-top: 90px;
		margin-bottom: 90px;
	}
</style>
