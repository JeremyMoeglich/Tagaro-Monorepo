<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import SportOverview from '$lib/site_components/packages/overviews/sport_overview.svelte';
	import SportSenders from '$lib/site_components/packages/senders/sport_senders.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen.svelte';
</script>

<body>
	<div class="alignment">
		<SportOverview detailed={true} />
		<SportSenders />
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
