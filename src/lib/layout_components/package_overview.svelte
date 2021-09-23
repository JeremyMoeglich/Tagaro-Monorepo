<script>
	export let title;
	export let points;
	export let image;
</script>

<div class="package_overview">
	<div class="alignment">
		<div class="description">
			<h2 class="title">{title}</h2>
			<ul class="points">
				{#each points as point}
					<li>{point}</li>
				{/each}
			</ul>
		</div>

		<img src={image} alt="" class="image" />
	</div>
</div>

<style>
	.alignment {
		display: flex;
		min-width: 70vw;
		margin-right: 10vw;
		margin-left: 10vw;
		gap: calc(10vw - 80px);
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.title {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.points {
		list-style-image: url('/images/plus_char.svg');
		font-size: 19px;
	}

	.image {
		width: max(min(30vw, 340px), 200px);
	}
	.description {
		min-width: max(340px, 25vw);
		max-width: min-content;
	}
</style>
