<script lang="ts">
	import ExpandableBox from '../layout/expandable_box.svelte';
	import Vertragsinfomationen from './vertragsinfomationen.svelte';
	// import BlackFridayVertragsinfomationen from './black_friday_vertragsinfomationen.svelte';
	// import Tabs from '../layout/tabs.svelte';
	// import { tabindex } from 'frontend/tabindex';
</script>

<ExpandableBox title={'*Vertragsinformationen'}>
	<!-- <Tabs tabs={[
		{
			component: BlackFridayVertragsinfomationen,
			name: 'Sky Top-Deal für Komplett'
		},
		{
			component: Vertragsinfomationen,
			name: 'Top-Deal Angebote mit weniger Paketen'
		}
	]} bind:active={$tabindex}/> -->
	<Vertragsinfomationen />
</ExpandableBox>
