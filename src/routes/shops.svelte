<script lang="ts">
	import * as shops_vars from '$lib/vars/urls';
</script>

<body>
	<div class="alignment">
		{#each shops_vars.shops as item}
			<a style="position: relative;" href={item.route}>
				<img src={`/images/specific/${item.name.toLowerCase()}_shop_preview.png`} alt="" />
				<p class="centered gradient">
					<b>{item.name}</b>
				</p>
			</a>
		{/each}
	</div>
	<div class="text">
		<h2>Sky Angebote auf den großen Marktplätzen</h2>
		<p>
			Weitere Vorteilsangebote von Sky erhalten Sie in unserem eBay- und Hood-Shop. Bestellen Sie
			hier bequem über Ihren bestehenden eBay- oder Hood-Zugang und füllen im Anschluss unser
			Aboformular für Ihre Sky Paketwahl aus, das wir Ihnen nach dem Kauf zusenden.
		</p>
	</div>
</body>

<style lang="scss">
	@import '../lib/style/mixins.scss';
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
	img:not(:hover) {
		filter: grayscale(100%);
	}
	img {
		width: 100%;
		transition-duration: 400ms;
	}
	.gradient {
		@include gradient-text;
	}
	.text {
		margin-bottom: 100px;
		h2 {
			@include gradient-text;
			text-align: center;
		}
		p {
			width: 1000px;
			max-width: 80vw;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
