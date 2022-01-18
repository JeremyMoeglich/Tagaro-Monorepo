<script lang="ts">
	export let text: string;
	export let padding_x = '30px';
	export let padding_y = '20px';
	export let route: string | undefined = undefined;
	export let reversed = false;

	$: style = `padding: ${padding_y} ${padding_x};`;
</script>

<button class="outer">
	{#if route}
		<a href={route} {style} class={reversed ? 'white' : 'blue'}>
			{text}
		</a>
	{:else}
		<p {style} class={reversed ? 'white' : 'blue'}>
			{text}
		</p>
	{/if}
</button>

<style lang="scss">
	@import 'lib/style/mixins.scss';
	$blue_gradient: linear-gradient(to bottom right, #49358d, #027fc7);
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
	button {
		background: $blue_gradient;
		padding: 5px;
	}
	button:hover {
		transform: scale(1.05);
		transition-duration: 200ms;
		background-image: linear-gradient(
			142deg,
			rgba(253, 122, 29, 1) 0%,
			rgba(253, 29, 29, 1) 21%,
			rgba(194, 64, 159, 1) 51%,
			rgba(106, 92, 186, 1) 77%,
			rgba(29, 162, 253, 1) 100%
		);
	}
	.blue {
		background: $blue_gradient;
		color: white;
	}
	.white {
		background-color: white;
		color: #235dad;
	}
	.blue:hover {
		filter: brightness(150%);
		box-shadow: inset;
		box-shadow: 0px 0px 47px -12px rgba(0, 0, 0, 0.69);
	}
	.white:hover {
		box-shadow: inset;
		box-shadow: 0px 0px 47px -12px rgba(0, 0, 0, 0.69);
	}
</style>
