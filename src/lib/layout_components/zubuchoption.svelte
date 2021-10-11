<script>
	export let image;
	//export let title;
	export let text;
</script>

<div class="main_alignment">
	<img src={image} alt="" />
	<p>{@html text}</p>
</div>

<style lang='scss'>
	img {
		width: min(100px, 33.33vw);
	}
	.main_alignment {
		display: flex;
		align-items: center;
		gap: 50px;
		background-color: rgb(231, 229, 229);
		max-width: fit-content;
		min-width: min(800px, 90vw);
		padding: 20px 40px;
		border-radius: 8px;
	}
	p {
		font-size: 17px;
	}
</style>
