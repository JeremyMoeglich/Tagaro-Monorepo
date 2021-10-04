<script lang="ts">
	export let text: string;
	export let padding_x: string = '30px';
	export let padding_y: string = '20px';
	export let route: string = undefined;
	export let reversed: boolean = false;

	$: style = `padding: ${padding_y} ${padding_x};`;
</script>

<div class="outer">
	{#if route}
		<a href={route} {style}>
			{text}
		</a>
	{:else}
		<p {style}>
			{text}
		</p>
	{/if}
</div>

<style>
	a,
	p {
        display: block;
		padding: 20px 30px;
		background: linear-gradient(to bottom right, #49358d, #027fc7);
		color: white;
		z-index: 0;
		max-width: fit-content;
		text-decoration: none;
		margin: 0px;
	}
</style>
