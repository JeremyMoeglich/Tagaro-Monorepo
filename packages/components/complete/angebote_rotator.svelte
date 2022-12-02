<script lang="ts">
	import type { package_id } from 'asset_library/assets/packages';
	import { bonus_string } from 'asset_library/prices';
	import WrappingElements from '../layout/wrapping_elements.svelte';

	const components: ReadonlyArray<{
		title: string;
		package_ids: package_id[];
		route: string;
	}> = [
		{
			title: `Entertainment + Sport + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `sport`],
			route: `/angebote/legacy/sport`
		},
		{
			title: `Entertainment Plus Paket inkl. Netflix + ${bonus_string} Prämie`,
			package_ids: [`entertainmentplus`],
			route: `/angebote/legacy/entertainmentplus`
		},
		{
			title: `Entertainment + Sport + Bundesliga + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `sport`, `bundesliga`],
			route: `/angebote/legacy/sport_bundesliga`
		},

		{
			title: `Entertainment Plus inkl. Netflix + 3 Pakete + ${bonus_string} Prämie`,
			package_ids: [`entertainmentplus`, `cinema`, `sport`, `bundesliga`],
			route: `/angebote/legacy/4_oder_mehr_pakete`
		},

		{
			title: `Entertainment Plus inkl. Netflix + Cinema Paket + ${bonus_string} Prämie`,
			package_ids: [`entertainmentplus`, `cinema`],
			route: `/angebote/legacy/cinema`
		},


		{
			title: `Entertainment + Fußball Bundesliga + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `bundesliga`],
			route: `/angebote/legacy/bundesliga`
		}
	];
</script>

<WrappingElements {components} title={`Aktuelle Angebote`} />
