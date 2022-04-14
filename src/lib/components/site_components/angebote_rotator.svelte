<script lang="ts">
	import WrappingElements from '$lib/components/layout_components/wrapping_elements.svelte';
	import type { package_id } from '$lib/scripts/universal/asset_library/assets/packages';
	import { bonus_string } from '$lib/scripts/universal/asset_library/prices';

	const components: ReadonlyArray<{
		title: string;
		package_ids: package_id[];
		route: string;
	}> = [
		{
			title: `2 Sky Pakete nach Wahl + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `sport`],
			route: `/angebote/2_pakete`
		},
		{
			title: `Sky Entertainment Paket + ${bonus_string} Prämie`,
			package_ids: [`entertainment`],
			route: `/angebote/entertainmentplus`
		},
		{
			title: `3 Sky Pakete nach Wahl + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `sport`, `cinema`],
			route: `/angebote/3_pakete`
		},

		{
			title: `Alle 4 Sky Pakete + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `cinema`, `sport`, `bundesliga`],
			route: `/angebote/4_oder_mehr_pakete`
		},

		{
			title: `Entertainment Plus + Cinema Paket + ${bonus_string} Prämie`,
			package_ids: [`entertainmentplus`, `cinema`],
			route: `/angebote/cinema`
		},

		{
			title: `Entertainment + Sport Paket + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `sport`],
			route: `/angebote/sport`
		},

		{
			title: `Entertainment + Fußball Bundesliga Paket + ${bonus_string} Prämie`,
			package_ids: [`entertainment`, `bundesliga`],
			route: `/angebote/bundesliga`
		}
	];
</script>

<WrappingElements {components} title={`Aktuelle Angebote`} />
