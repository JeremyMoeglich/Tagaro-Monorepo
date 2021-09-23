<script>
	export let box_height;
	export let text;
	export let name;
</script>

<div class="main_container">
	<input
		{name}
		type="text"
		style={'min-height: ' +
			box_height +
			'px;max-height: ' +
			box_height +
			'px;' +
			'margin-top: ' +
			(box_height / 2 + 30) +
			'px;'}
	/>
	<p style={'top: calc(' + box_height + 'px / 2 - 12px);'}>{text}</p>
</div>

<style>
	.main_container {
		position: relative;
		width: 100%;
	}
	p {
		position: absolute;
		left: 20px;
		margin-top: 0px;
		margin-bottom: 0px;
		transition-duration: 300ms;
		z-index: 1;
	}
	input {
		transition-duration: 300ms;
		border-width: 3px;
		border-color: transparent;
		outline: 0px;
		background-color: rgb(172, 184, 199);
		min-width: 100%;
	}
	:not(input:focus) {
		margin-top: 0px !important;
	}
	input:focus {
		border-color: rgb(37, 124, 255);
		background-color: white;
	}
	input:blank {
		background-color: black;
	}
	input:focus ~ p {
		color: rgb(0, 15, 245);
	}
</style>
