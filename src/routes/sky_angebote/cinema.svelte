<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import CinemaOverview from '$lib/site_components/packages/overviews/cinema_overview.svelte';
	import CinemaSenders from '$lib/site_components/packages/senders/cinema_senders.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen.svelte';
	import EntertainmentSenders from '$lib/site_components/packages/senders/entertainment_senders.svelte';
</script>

<body>
	<div class="alignment">
		<CinemaOverview detailed={true} />
		<CinemaSenders />
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
