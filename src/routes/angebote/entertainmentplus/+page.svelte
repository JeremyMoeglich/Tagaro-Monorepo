<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
	import EntertainmentPlusOverview from '$lib/components/site/packages/overviews/entertainment_plus_overview.svelte';
</script>

<div>
	<div class="alignment">
		<EntertainmentPlusOverview animated />
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
