<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import KidsOverview from '$lib/components/site/packages/overviews/kids_overview.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
	//import Vertragsinfomationen from '$lib/components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
	import KidsSenders from '$lib/components/site/packages/senders/kids_senders.svelte';
</script>

<div>
	<div class="alignment">
		<KidsOverview animated />
		<KidsSenders />
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
