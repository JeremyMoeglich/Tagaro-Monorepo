<script lang="ts">
	export let text: string;
	export let content: Array<string>;
</script>

<body>
	<h2>{text}</h2>
	<div class="main_alignment">
		{#each content as element}
			<div class="sender_box">
				<img src={element} alt="" />
			</div>
		{/each}
	</div>
</body>

<style lang='scss'>
	.main_alignment {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		width: 1300px;
		max-width: 85vw;
		margin-left: auto;
		margin-right: auto;
		gap: 25px;
	}
	.sender_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		width: 7vw;
		min-width: 125px;
	}
	h2 {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}
	h2 {
		font-size: 35px;
	}
	img {
		width: 100px;
		max-height: 60px;
		object-fit: contain;
		text-align: center;
		gap: 20px;
	}
</style>
