<article class="input_field">
	<div class="floating_text">Test</div>
	<input class="text_input" type="text" />
</article>

<style>
	.text_input {
		min-height: 40px;
		min-width: 200px;
	}
	.input_field {
		position: relative;
		min-width: fit-content;
		max-width: fit-content;
		min-height: fit-content;
	}
	.floating_text {
		position: absolute;
		transition-duration: 200ms;
	}
	.input_field:hover {
		bottom: 100px;
		transition-duration: 200ms;
	}
</style>
