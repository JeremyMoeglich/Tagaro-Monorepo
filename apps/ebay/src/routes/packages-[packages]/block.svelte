<script lang="ts">
	import Line from 'components/elements/line.svelte';

	export let title: string;
</script>

<div class="max-w-6xl ml-auto mr-auto">
	<h3 class=" title font-bold text-3xl text-center gradient_text">{title}</h3>
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
