<script>
	export let box_height;
	export let text;
</script>

<div class="main_container">
	<input type="text" style={'min-height: ' + box_height + 'px;max-height: ' + box_height + 'px;'} />
	<p>{text}</p>
</div>

<style>
	.main_container {
		position: relative;
	}
	p {
		position: absolute;
		bottom: calc(50% - 1ex);
		left: 20px;
		margin-top: 0px;
		margin-bottom: 0px;
		transition-duration: 300ms;
	}
	input {
		margin-top: 0px;
		transition-duration: 300ms;
	}

	input:focus ~ p {
		bottom: calc(100% - 40px)
	}
	input:focus {
		margin-top: 50px;
	}
</style>
