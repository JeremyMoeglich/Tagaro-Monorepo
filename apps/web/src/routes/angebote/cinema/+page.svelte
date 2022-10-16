<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import CinemaOverview from 'components/complete/packages/overviews/cinema_overview.svelte';
	import CinemaSenders from 'components/complete/packages/senders/cinema_senders.svelte';
	//import Vertragsinfomationen from 'components/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
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
		padding: 40px;
	}
</style>
