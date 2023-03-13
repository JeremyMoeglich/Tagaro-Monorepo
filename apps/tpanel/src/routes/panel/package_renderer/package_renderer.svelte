<script lang="ts">
	import { packages_assets } from 'asset_library/assets/packages';
	import type { package_id } from 'asset_library/assets/packages';

	import html2canvas from 'html2canvas';
	import MultiImageOverlay from 'components/generators/multi_image_overlay.svelte';
	import Button from 'components/elements/interactive/buttons/button.svelte';
	import { enter_filter } from 'utils';
	import { panic } from 'functional-utilities';

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

	$: input_text = input_text.toLowerCase();

	$: {
		chosen_strings = input_text.split(',').map((v) => v.trim());
		valid_packages = chosen_strings.filter(is_package);
	}

	let element: HTMLElement;
	let number = 2;
	let int_offset = 600;
	$: offset = (int_offset - 400) / 200;

	function capture() {
		html2canvas(element, { scale: number, allowTaint: true, useCORS: true }).then((canvas) => {
			let a = document.createElement('a');
			a.href = canvas.toDataURL('image/png');
			a.download = 'image.png';
			a.click();
		});
	}

	function add_package(id: package_id) {
		input_text = input_text.trim();
		if (!input_text.endsWith(',') && input_text.length > 0) {
			input_text += ', ';
		}
		input_text += id;
	}
</script>

<div>
	<div bind:this={element} class="output">
		<MultiImageOverlay packages={valid_packages} offset_multiplier={offset} />
	</div>
	<div class="possible_packages_container">
		<h4>Verfügbare Pakete:</h4>
		{#each possible_packages.slice(0, -1) as id}
			<p on:click={() => add_package(id)} on:keypress={enter_filter(() => add_package(id))}>
				{id},
			</p>
		{/each}
		<p
			on:click={() => add_package(possible_packages.at(-1) ?? panic('No last element'))}
			on:keypress={enter_filter(() =>
				add_package(possible_packages.at(-1) ?? panic('No last element'))
			)}
		>
			{possible_packages.at(-1)}
		</p>
	</div>
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
		<input type="range" min="0" max="800" class="slider" bind:value={int_offset} />
	</div>
	<div class="buttons">
		<div on:click={capture} on:keypress={enter_filter(capture)} class="save_button">
			<Button text={'Save'} padding_y={'10px'} />
		</div>
		<div
			on:click={() => {
				input_text = '';
			}}
			on:keypress={enter_filter(() => {
				input_text = '';
			})}
		>
			<Button text={'Reset'} padding_y={'10px'} />
		</div>
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
	.output {
		padding: 20px 150px;
		min-height: 357px;
	}
	.possible_packages_container {
		display: flex;
		align-items: center;
		gap: 5px;

		p {
			cursor: pointer;
			&:hover {
				color: #00ff00;
			}
		}
	}
	.buttons {
		display: flex;
		margin-top: 10px;
		gap: 10px;
		align-items: center;
	}
</style>
