<script lang="ts">
	import { sort_assets } from 'asset_library/all_assets';
	import { showcased_combinations, type package_id } from 'asset_library/assets/packages';
	import WrappingElements from '../layout/wrapping_elements.svelte';

	function get_route(ids: package_id[]): string {
		return `/angebote/${sort_assets(ids).join('-')}`;
	}

	const components: ReadonlyArray<{
		package_ids: package_id[];
		route: string;
	}> = showcased_combinations.map((ids) => ({
		package_ids: ids,
		route: get_route(ids)
	}));
</script>

<WrappingElements {components} title={`Aktuelle Angebote`} />
