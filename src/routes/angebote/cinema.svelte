<script>
	import Inklusive from '$lib/components/site/inklusive.svelte';
	import CinemaOverview from '$lib/components/site/packages/overviews/cinema_overview.svelte';
	import CinemaSenders from '$lib/components/site/packages/senders/cinema_senders.svelte';
	//import Vertragsinfomationen from '$lib/components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
	import EntertainmentSenders from '$lib/components/site/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<CinemaOverview animated />
		<CinemaSenders />
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
