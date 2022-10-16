<script lang="ts">
	export let title: string;
</script>

<div class="max-w-4xl ml-auto mr-auto">
	<h3 class="gradient_text font-bold">{title}</h3>
	<div class="block_content">
		<slot />
	</div>
</div>

<style lang="scss">
	.block_content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 30px 0px;
	}
</style>
