<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import SportOverview from 'components/complete/packages/overviews/sport_overview.svelte';
	import SportSenders from 'components/complete/packages/senders/sport_senders.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
</script>

<div>
	<div class="alignment">
		<SportOverview animated show_price />
		<SportSenders />
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
