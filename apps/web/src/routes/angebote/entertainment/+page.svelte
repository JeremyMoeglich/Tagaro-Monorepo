<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import EntertainmentOverview from 'components/complete/packages/overviews/entertainment_overview.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
	//import Vertragsinfomationen from 'components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
</script>

<div>
	<div class="alignment">
		<EntertainmentOverview animated show_price />
		<EntertainmentSenders />
		<Inklusive version={"tagaro"} />
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
