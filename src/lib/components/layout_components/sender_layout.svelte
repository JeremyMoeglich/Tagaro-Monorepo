<script lang="ts">
	export let text: string;
	export let content: Array<string>;
</script>

<body>
	<div class="top_margin">
		<h2>{text}</h2>
		<div class="main_alignment">
			{#each content as element}
				<div class="sender_box">
					<img src={element} alt="" />
				</div>
			{/each}
		</div>
	</div>
</body>

<style lang="scss">
	@import 'lib/shared/style/mixins.scss';
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
	.top_margin {
		margin-top: 70px;
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
		@include gradient-text;
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
