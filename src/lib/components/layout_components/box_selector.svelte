<script lang="ts">
	import type { asset_id } from '$lib/scripts/universal/asset_types';
	import ClickableBox from './clickable_box.svelte';

	interface Box {
		id: asset_id;
		image: string;
		text: string;
		disabled: boolean;
	}

	export let boxes: Array<Box>;
	export let multi_select = false;
	export let selected: Array<asset_id> = [];
</script>

<div class="boxes">
	{#each boxes as box}
		<ClickableBox
			text={box.text}
			image={box.image}
			func={() => {
				if (multi_select) {
					if (selected.includes(box.id)) {
						selected.splice(selected.indexOf(box.id), 1);
						selected = selected;
					} else {
						selected = [...selected, box.id];
					}
				} else {
					selected = [box.id];
				}
			}}
			selected={selected.includes(box.id)}
		/>
	{/each}
</div>

<style>
	.boxes {
		display: flex;
	}
</style>
