<script lang="ts">
	import { dev } from '$app/environment';

	export let title: string;
	let opened = dev ? true : false;

	function toggle_box() {
		opened = !opened;
	}
</script>

<div class="main_container">
	<button class="selectable" on:click={toggle_box} title={opened ? title : `${title} aufklappen`}>
		<p class="aufklappen">
			{opened ? title : `${title} aufklappen`}
		</p>
		<p class="pm gradient_text">
			{#if opened}
				-
			{:else}
				+
			{/if}
		</p>
	</button>
	{#if opened}
		<div class="main_text">
			<slot>This is empty</slot>
		</div>
	{/if}
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
	.main_text {
		max-width: 90%;
	}
</style>
