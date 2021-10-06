<script lang="ts">
	export let text: string;
	export let padding_x: string = '30px';
	export let padding_y: string = '20px';
	export let route: string = undefined;
	export let reversed: boolean = false;

	$: style = `padding: ${padding_y} ${padding_x};`;
</script>

<button class="outer">
	{#if route}
		<a href={route} {style} class={reversed ? "white" : "blue"}
		>
			{text}
		</a>
	{:else}
		<p {style}>
			{text}
		</p>
	{/if}
</button>

<style>
	a,
	p {
        display: block;
		padding: 20px 30px;
		max-width: 90vw;
		z-index: 0;
		text-decoration: none;
		margin: 0px;
		text-align: center;
	}
	.blue {
		background: linear-gradient(to bottom right, #49358d, #027fc7);
		color: white;
	}
	.white {
		background-color: white;
		color: #235dad;
	}
	.blue:hover {
		filter: brightness(150%) contrast(150%);
		box-shadow: inset;
		box-shadow: 0px 0px 47px -12px rgba(0, 0, 0, 0.69);
	}
	.white:hover {
		filter: brightness(70%) contrast(150%);
		box-shadow: inset;
		box-shadow: 0px 0px 47px -12px rgba(0, 0, 0, 0.69);
	}
</style>
