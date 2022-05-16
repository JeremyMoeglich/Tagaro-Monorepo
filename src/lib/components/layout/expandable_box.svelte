<script>
	import GradientText from '../style/gradient_text.svelte';

	export let title;
	let opened = false;

	function toggle_box() {
		opened = !opened;
	}
</script>

<div class="main_container">
	<button class="selectable" on:click={toggle_box} title={opened ? title : `${title} aufklappen`}>
		<p class="aufklappen">
			{opened ? title : `${title} aufklappen`}
		</p>
		<p class="pm">
			<GradientText>
				{#if opened}
					-
				{:else}
					+
				{/if}
			</GradientText>
		</p>
	</button>
	{#if opened}
		<div class="main_text">
			<slot name="main_text">This is empty</slot>
		</div>
	{/if}
</div>

<style lang="scss">
	@import 'lib/style/gradient_text.scss';
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
	.main_text :global(ul) {
		list-style: none;
		line-height: 150%;
		padding-left: 0px;
	}
	.main_text :global(h3) {
		@include gradient-text;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.main_text :global(.slot > h3) {
		background: linear-gradient(to right, rgb(245, 0, 0) 0%, rgb(255, 0, 106) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
