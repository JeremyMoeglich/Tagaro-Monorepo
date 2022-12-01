<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import CinemaOverview from 'components/complete/packages/overviews/cinema_overview.svelte';
	import CinemaSenders from 'components/complete/packages/senders/cinema_senders.svelte';
	//import Vertragsinfomationen from 'components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<CinemaOverview animated show_price />
		<CinemaSenders />
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
