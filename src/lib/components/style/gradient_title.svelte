<script lang="ts">
	import GradientText from './gradient_text.svelte';

	export let margin_top = 50;
</script>

<h1 style:margin-top={`${margin_top}px`}><GradientText><slot /></GradientText></h1>

<style>
	h1 {
		text-align: center;
	}
</style>
