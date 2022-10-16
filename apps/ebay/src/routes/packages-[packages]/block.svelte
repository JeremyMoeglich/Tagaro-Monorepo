<script lang="ts">
	import Line from '../../../../../packages/components/elements/line.svelte';

	export let title: string;
</script>

<div class="max-w-6xl ml-auto mr-auto">
	<h3 class="gradient_text title font-bold text-3xl text-center">{title}</h3>
	<div class="block_content">
		<slot />
	</div>
</div>
<Line />

<style lang="scss">
	.block_content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 30px 0px;
	}
</style>
