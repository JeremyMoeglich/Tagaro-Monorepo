<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import SportOverview from '$lib/components/site/packages/overviews/sport_overview.svelte';
	import SportSenders from '$lib/components/site/packages/senders/sport_senders.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<SportOverview animated />
		<SportSenders />
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
