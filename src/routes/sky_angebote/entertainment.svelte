<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import EntertainmentOverview from '$lib/site_components/packages/overviews/entertainment_overview.svelte';
	import EntertainmentSenders from '$lib/site_components/packages/senders/entertainment_senders.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen.svelte';
</script>

<body>
	<div class="alignment">
		<EntertainmentOverview detailed={true} />
		<EntertainmentSenders />
		<Inklusive />
		<Vertragsinfomationen />
	</div>
</body>

<style lang="scss">
	.alignment {
		margin-top: 90px;
		margin-bottom: 90px;
	}
</style>
