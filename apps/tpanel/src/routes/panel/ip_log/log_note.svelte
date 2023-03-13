<script lang="ts">
	import type { note_type } from './types';
	import {
		CheckmarkFilled,
		Debug,
		ErrorFilled,
		HelpFilled,
		WarningHexFilled
	} from 'carbon-icons-svelte';

	export let note: note_type;

	const color_table: Record<note_type, string> = {
		ban: 'red',
		dev: 'blue',
		loading: 'gray',
		warn: 'orange',
		unknown: 'green'
	};
</script>

<div class="outer" style:color={color_table[note]}>
	{#if note === 'ban'}
		<ErrorFilled />
	{:else if note === 'dev'}
		<Debug />
	{:else if note === 'loading'}
		<HelpFilled />
	{:else if note === 'warn'}
		<WarningHexFilled />
	{:else}
		<CheckmarkFilled />
	{/if}
</div>

<style>
	.outer {
		display: flex;
		align-items: center;
		gap: 3px;
		width: 100%;
		height: 100%;
	}
</style>
