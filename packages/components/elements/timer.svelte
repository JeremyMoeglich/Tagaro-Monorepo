<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let date: Date;

	// Count down to the date

	let time = date.getTime() - Date.now();

	let interval: ReturnType<typeof setInterval> | undefined;

	onMount(() => {
		interval = setInterval(() => {
			time = date.getTime() - Date.now();
		}, 1000);
	});

	onDestroy(() => {
		interval && clearInterval(interval);
	});
</script>

{#if time > 0}
	{#if time > 1000 * 60 * 60 * 24}
		{Math.floor(time / (1000 * 60 * 60 * 24))}d
	{:else if time > 1000 * 60 * 60}
		{Math.floor(time / (1000 * 60 * 60))}h
	{:else if time > 1000 * 60}
		{Math.floor(time / (1000 * 60))}m
	{:else}
		{Math.floor(time / 1000)}s
	{/if}
{:else}
	0s
{/if}
