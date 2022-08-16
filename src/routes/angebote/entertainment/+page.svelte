<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import EntertainmentOverview from '$lib/components/site/packages/overviews/entertainment_overview.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
	//import Vertragsinfomationen from '$lib/components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
</script>

<div>
	<div class="alignment">
		<EntertainmentOverview animated />
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
