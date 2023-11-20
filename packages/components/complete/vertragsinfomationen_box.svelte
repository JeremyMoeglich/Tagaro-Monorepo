<script lang="ts">
	import ExpandableBox from '../layout/expandable_box.svelte';
	import Vertragsinfomationen from './vertragsinfomationen.svelte';
	import BlackFridayVertragsinfomationen from './black_friday_vertragsinfomationen.svelte';
	import Tabs from '../layout/tabs.svelte';
	import { tabindex } from 'frontend/tabindex';
</script>

<ExpandableBox title={'*Vertragsinformationen für Neukunden'}>
	<Tabs tabs={[
		{
			component: BlackFridayVertragsinfomationen,
			name: 'Black Friday'
		},
		{
			component: Vertragsinfomationen,
			name: 'Normal'
		}
	]} bind:active={$tabindex}/>
</ExpandableBox>
