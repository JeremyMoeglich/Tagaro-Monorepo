<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import CinemaOverview from '$lib/site_components/packages/overviews/cinema_overview.svelte';
	import CinemaSenders from '$lib/site_components/packages/senders/cinema_senders.svelte';
</script>

<body>
	<div class="alignment">
		<CinemaOverview detailed={true} />
		<CinemaSenders />
		<Inklusive />
	</div>
</body>

<style>
	.alignment {
		margin-top: 90px;
	}
</style>
