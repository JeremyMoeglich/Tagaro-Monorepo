<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount, afterUpdate } from 'svelte';

	export let title: string;
	let opened = dev ? true : false;
	let content: HTMLElement;
	let height = 0;

	function toggle_box() {
		opened = !opened;
		if (opened) {
			height = content.scrollHeight;
		} else {
			height = 0;
		}
	}

	onMount(() => {
		if (opened) {
			height = content.scrollHeight;
		}
	});

	afterUpdate(() => {
		if (opened) {
			height = content.scrollHeight;
		}
	});
</script>

<div class="main_container">
	<button class="selectable" on:click={toggle_box} title={opened ? title : `${title} aufklappen`}>
		<p class="aufklappen">
			{opened ? title : `${title} aufklappen`}
		</p>
		<p class="pm">
			{#if opened}
				-
			{:else}
				+
			{/if}
		</p>
	</button>
	<div class="wrapper" bind:this={content} style={`max-height: ${height}px`}>
		<div class="main_text" class:closed={!opened}>
			<slot>This is empty</slot>
		</div>
	</div>
</div>

<style lang="scss">
	.main_container {
		min-width: min(1000px, 90%);
		max-width: min-content;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
		border-radius: 5px;
		border: 2px solid;
		border-color: rgb(231, 229, 229);
		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		button:hover {
			.aufklappen {
				color: rgb(64, 64, 175);
			}
		}
	}
	.pm {
		font-size: 35px;
		margin: 0;
		padding: 0;
	}
	.selectable {
		min-width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper {
		max-width: 90%;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.5s ease;
	}

	.main_text {
		padding: 1em;
		opacity: 1;
		transition: filter 0.4s ease;
	}

	.wrapper:after {
		content: '';
		display: block;
		height: 0;
		visibility: hidden;
	}

	.closed {
		filter: blur(10px);
		transition: filter 1s ease;
	}
</style>
