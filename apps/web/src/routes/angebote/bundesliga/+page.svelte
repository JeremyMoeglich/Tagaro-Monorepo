<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import BundesligaOverview from 'components/complete/packages/overviews/bundesliga_overview.svelte';
	import BundesligaSenders from 'components/complete/packages/senders/bundesliga_senders.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<BundesligaOverview animated show_price />
		<BundesligaSenders />
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
