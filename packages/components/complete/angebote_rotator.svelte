<script lang="ts">
	import { sort_assets } from 'asset_library/all_assets';
	import { get_title } from 'asset_library/title';
	import { showcased_combinations, type package_id } from 'asset_library/assets/packages';
	import WrappingElements from '../layout/wrapping_elements.svelte';

	function get_route(ids: package_id[]): string {
		return `/angebote/${sort_assets(ids).join('_')}`;
	}

	const components: ReadonlyArray<{
		title: string;
		package_ids: package_id[];
		route: string;
	}> = showcased_combinations.map((ids) => ({
		title: get_title(ids),
		package_ids: ids,
		route: get_route(ids)
	}));
</script>

<WrappingElements {components} title={`Aktuelle Angebote`} />
