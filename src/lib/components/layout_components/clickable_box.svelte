<script lang="ts">
	export let image: string;
	export let text: string;
	export let func: () => unknown;
	export let selected: boolean;
</script>
<button on:click={func} class:selected>
	<img src={image} alt={text} />
	<p>{text}</p>
</button>

<style lang="scss">
	button {
		padding: 20px;
		width: 200px;

		&:hover {
			background-color: rgb(247, 159, 171);
		}
		&.selected {
			background-color: rgb(78, 87, 219);
			&:hover {
				background-color: rgb(113, 122, 241);
			}
		}
	}
</style>
