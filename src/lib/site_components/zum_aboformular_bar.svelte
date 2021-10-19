<script>
	import Button from '$lib/layout_components/button.svelte';
	import * as urls from '$lib/vars/urls';
</script>

<a href={urls.aboformular}>
	<div class="main_container">
		<h2 class="main_text">Jetzt Ihr Sky Abo individuell zusammenstellen!</h2>
		<Button text="Zum Aboformular" route={urls.aboformular} reversed />
	</div>
</a>

<style lang="scss">
	.main_text {
		font-size: 33px;
		color: white;
		margin-left: 20px;
		text-align: center;
	}
	a {
		text-decoration: none;
	}
	.main_container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		width: calc(100% - 60px);
		padding: 30px;
		min-height: 80px;
		background: linear-gradient(to right, #49358d, #027fc7);
	}
	.main_container > * {
		margin-left: 5vw;
		margin-right: 5vw;
	}
</style>
