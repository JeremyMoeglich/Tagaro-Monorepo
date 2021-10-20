<script>
	import Inklusive from '$lib/site_components/inklusive.svelte';
	import BundesligaOverview from '$lib/site_components/packages/overviews/bundesliga_overview.svelte';
	import BundesligaSenders from '$lib/site_components/packages/senders/bundesliga_senders.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen.svelte';
</script>

<body>
	<div class="alignment">
		<BundesligaOverview detailed={true} />
		<BundesligaSenders />
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
