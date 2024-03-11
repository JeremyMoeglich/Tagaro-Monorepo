<script lang="ts">
	import Button from 'components/elements/interactive/buttons/button.svelte';

	import FormButton from 'components/elements/interactive/buttons/form_button.svelte';
	import { tabindex } from 'frontend/tabindex';
</script>

<FormButton source={'Footer_bar'} route={$tabindex === 0 ? "https://fd10.formdesk.com/tagaro/Sky-Bestellung-5" : undefined}>
	<div class="inner_container">
		<div class="main_container">
			<h2 class="main_text no_gradient">Jetzt Ihr Sky Abo individuell zusammenstellen!</h2>
			<Button text="Zum Aboformular" reversed={true} />
		</div>
	</div>
</FormButton>

<style lang="scss">
	.main_text {
		font-size: 33px;
		color: white;
		margin-left: 20px;
		text-align: center;
	}
	.inner_container {
		overflow: hidden;
		width: 100%;
	}
	.main_container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		width: 100%;
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
