<script lang="ts">
	import * as shops_vars from '$lib/vars/urls';
</script>

<body>
	<div class="alignment">
		{#each shops_vars.shops as item}
			<a style="position: relative;" href={item.route}>
				<img src={`/images/specific/${item.name}_shop_preview.png`} alt="" />
				<p class="centered">
					<b>{item.name}</b>
				</p>
			</a>
		{/each}
	</div>
</body>

<style>
	.alignment {
		display: flex;
		justify-content: center;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		padding: 70px 0px;
		gap: 20px;
	}
	.centered {
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 100%);
	}
	a {
		max-width: 20vw;
		font-size: 30px;
		color: rgb(0, 0, 0);
		z-index: 0;
		max-width: fit-content;
		text-decoration: none;
		padding: 5px;
		background-color: gray;
		border-radius: 5px;
		transition-duration: 400ms;
	}
	a:hover {
		transform: scale(1.1, 1.1);
		background: rgb(253, 122, 29);
		background: linear-gradient(
			142deg,
			rgba(253, 122, 29, 1) 0%,
			rgba(253, 29, 29, 1) 21%,
			rgba(194, 64, 159, 1) 51%,
			rgba(106, 92, 186, 1) 77%,
			rgba(29, 162, 253, 1) 100%
		);
	}
	a:not(:hover) {
		filter: grayscale(100%);
	}
	img {
		width: 100%;
	}
</style>
