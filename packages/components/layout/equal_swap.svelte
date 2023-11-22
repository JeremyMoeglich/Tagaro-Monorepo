<script lang="ts">
	import { maybe_global } from 'functional-utilities';
	import { SvelteComponent, onMount, onDestroy } from 'svelte';
	
	export let components: (typeof SvelteComponent<{}>)[];
	export let active = 0;

	let elements: HTMLElement[] = [];
	let outer_ref: HTMLElement;
	let resizeObserver: ResizeObserver;

	function recalculate_size() {
		const { width, height } = elements.reduce(
			(acc, el) => {
				const { width, height } = el.getBoundingClientRect();
				return {
					width: Math.max(acc.width, width),
					height: Math.max(acc.height, height)
				};
			},
			{ width: 0, height: 0 }
		);
		outer_ref.style.width = `${width}px`;
		outer_ref.style.height = `${height}px`;
	}

	function setupListeners() {
		resizeObserver = new ResizeObserver(() => {
			recalculate_size();
		});

		elements.forEach((el) => {
			resizeObserver.observe(el);
		});

		maybe_global('window')?.addEventListener('resize', recalculate_size)
	}

	onMount(() => {
		setupListeners();
		recalculate_size();
	});

	onDestroy(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
		maybe_global('window')?.removeEventListener('resize', recalculate_size);
	});
</script>

<div class="outer" bind:this={outer_ref}>
	{#each components as component, i}
		<div class:active={i === active} class="inner" bind:this={elements[i]}>
			<svelte:component this={component} />
		</div>
	{/each}
</div>

<style>
	.outer {
		position: relative;
        height: 845px; 
	}
	.inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
	}
	.inner.active {
		visibility: visible;
	}
</style>
