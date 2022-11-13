<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import KidsOverview from 'components/complete/packages/overviews/kids_overview.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
	//import Vertragsinfomationen from 'components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
	import KidsSenders from 'components/complete/packages/senders/kids_senders.svelte';
</script>

<div>
	<div class="alignment">
		<KidsOverview animated show_price />
		<KidsSenders />
		<EntertainmentSenders />
		<Inklusive />
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 90px;
		margin-bottom: 90px;
		padding: 40px;
	}
</style>
