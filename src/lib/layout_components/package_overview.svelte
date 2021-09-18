<article class="package_overview">
	<div class="alignment">
		<div class="description">
			<h2 class="title">
				<slot name="title">
					<span class="missing">Unknown title</span>
				</slot>
			</h2>
			<ul class="points">
				<slot name="points">
					<li class="missing">No Points given</li>
				</slot>
			</ul>
		</div>

		<div class="image">
			<slot name="image">
				<span class="missing">Unknown image</span>
			</slot>
		</div>
	</div>
</article>

<style>
	.alignment {
		display: flex;
		min-width: 80vw;
		margin-right: 10vw;
		margin-left: 10vw;
		gap: 50px;
		justify-content: space-between;
	}
	.title {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.points {
		display: flex;
		flex-direction: column;
		gap: 20px;
		list-style: none;
		list-style-image: "/plus_char.svg";
		margin-left: 0;
		padding-left: 0;
		font-size: 20px;
		
	}

	
	.image {
		max-width: 30vw;
	}
</style>
