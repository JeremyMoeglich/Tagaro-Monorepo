<script lang="ts">
	import { packages_assets, type package_id } from '$lib/scripts/universal/asset_library/assets/packages';
import Button from '../layout_components/button.svelte';
	import html2canvas from 'html2canvas'

	import MultiImageOverlay from '../layout_components/multi_image_overlay.svelte';

	const possible_packages = packages_assets.map((v) => v.id);

	function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

	function is_package(id: string): id is package_id {
		return includes(possible_packages, id);
	}

	let input_text = '';

	let chosen_strings: string[] = [];
	let valid_packages: package_id[] = [];

	$: input_text = input_text.toLowerCase()

	$: {
		chosen_strings = input_text.split(',').map((v) => v.trim());
		valid_packages = chosen_strings.filter(is_package);
	}

	let element: HTMLElement;
	let number = 2;
	let int_offset = 600;
	$: offset = (int_offset - 400) / 200;

	function capture() {
		html2canvas(element, {scale: number}).then((canvas) => {
			let a = document.createElement('a');
			a.href = canvas.toDataURL('image/png');
			a.download = 'image.png';
			a.click();
		});
	}
</script>

<div>
	<div bind:this={element} class="output">
		<MultiImageOverlay packages={valid_packages} offset_multiplier={offset} />
	</div>
	<p>Verfügbare Pakete: {possible_packages.join(', ')}</p>
	<div class="in_div">
		Pakete:
		<input type="text" class="package_input" bind:value={input_text} />
	</div>
	<div>
		{#each chosen_strings as str}
			{#if !is_package(str)}
				<div class="invalid">
					{str}
				</div>
			{/if}
		{/each}
	</div>
	<div class="in_div">
		Qualität:
		<input type="number" class="resolution_input" bind:value={number} />
	</div>
	<div class="in_div">
		Offset:
		<input type="range" min="0" max="800" class="slider" bind:value={int_offset}/>
	</div>
	<div on:click={capture} class="save_button">
		<Button text={'Save'} padding_y={'10px'} />
	</div>
</div>

<style lang="scss">
	.invalid {
		color: red;
	}
	.in_div {
		display: flex;
		gap: 10px;
		input {
			width: 100%;
		}
	}
	.save_button {
		margin-top: 10px;
	}
	.output {
		padding: 20px 100px;
	}
</style>
