<script lang="ts">
	import ClickableBox from './clickable_box.svelte';

	interface Box {
		image: string;
		text: string;
		disabled: boolean;
	}

	export let boxes: Array<Box>;
	export let multi_select: boolean = false;
	export let selected: Array<string> = undefined;
</script>

{#each boxes as box}
	<ClickableBox
		text={box.text}
		image={box.image}
		func={() => {
			if (multi_select) {
				selected = [...selected, box.text];
			} else {
				selected = [box.text];
			}
		}}
		selected={selected.includes(box.text)}
	/>
{/each}
