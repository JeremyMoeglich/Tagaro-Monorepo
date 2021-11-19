<script>
	import Button from '$lib/layout_components/button.svelte';
	import * as urls from '$lib/vars/urls';
	import { page } from '$app/stores';

	const chosen_route = $page.path == '/' ? 'https://fd10.formdesk.com/tagaromedienshopgbr/Sky-Bestellung-1' : urls.aboformular 

</script>

<a href={urls.aboformular}>
	<div class="inner_container">
		<div class="main_container">
			<h2 class="main_text">Jetzt Ihr Sky Abo individuell zusammenstellen!</h2>
			<Button text="Zum Aboformular" route={chosen_route} reversed />
		</div>
	</div>
</a>

<style lang="scss">
	.main_text {
		font-size: 33px;
		color: white;
		margin-left: 20px;
		text-align: center;
	}
	.inner_container {
		overflow: hidden;
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
		transition-duration: 300ms;
		& > * {
			margin-left: 5vw;
			margin-right: 5vw;
		}
		&:hover {
			transform: scale(1.05);
		}
	}
</style>
