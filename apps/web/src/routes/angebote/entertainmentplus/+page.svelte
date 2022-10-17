<script lang="ts">
	import Inklusive from 'components/complete/inklusive.svelte';
	import EntertainmentSenders from 'components/complete/packages/senders/entertainment_senders.svelte';
	import EntertainmentPlusOverview from 'components/complete/packages/overviews/entertainment_plus_overview.svelte';
</script>

<div>
	<div class="alignment">
		<EntertainmentPlusOverview animated show_price />
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
