<script lang="ts">
	export let title: string;
	export let content: Array<{
		title: string;
		image: string;
	}>;
</script>

<body>
	<h2>{title}</h2>
	<div class="main_alignment">
		{#each content as element}
			<div class="sender_box">
				<h3>{element.title}</h3>
				<img src={element.image} alt="" />
			</div>
		{/each}
	</div>
</body>

<style>
	.main_alignment {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.sender_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		width: 7vw;
		min-width: 125px;
		background-color: #f2f2f2;
		border-radius: 5px;
	}
	h2,
	h3 {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}
	h2 {
		font-size: 35px;
	}
	h3 {
		font-size: 20px;
	}
	img {
		width: 100px;
		text-align: center;
		}
</style>
