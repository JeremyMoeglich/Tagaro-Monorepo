<script>
	export let title;
	let opened = false;

	function toggle_box() {
		opened = !opened;
	}
</script>

<div class="main_container">
	<button class="selectable" on:click={toggle_box} title={opened ? title : `${title} aufklappen`}>
		<p>
			{opened ? title : `${title} aufklappen`}
		</p>
		<p class="pm gradient-text">
			{#if opened}
				-
			{:else}
				+
			{/if}
		</p>
	</button>
	{#if opened}
		<div class="main_text gradient-text">
			<slot name="main_text">This is empty</slot>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../style/global.scss';
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
	}
	.main_text :global(h3) {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
	}
</style>
