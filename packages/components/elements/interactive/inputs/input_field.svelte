<script lang="ts">
	export let box_height = 45;
	export let text: string;
	export let name: string;
	export let required = true;
	export let type = 'text';
	export let multiline = false;
	export let autocomplete = 'on';
	export let value = '';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="main_container">
	{#if multiline}
		<textarea
			{name}
			style={'min-height: ' +
				box_height +
				'px;max-height: ' +
				box_height +
				'px;' +
				'margin-top: ' +
				(box_height / 2 + 30) +
				'px;'}
			{required}
			placeholder=" "
			{autocomplete}
			bind:value
		/>
	{:else}
		<input
			{name}
			use:typeAction
			style={'min-height: ' +
				box_height +
				'px;max-height: ' +
				box_height +
				'px;' +
				'margin-top: ' +
				(box_height / 2 + 30) +
				'px;'}
			{required}
			placeholder=" "
			{autocomplete}
			bind:value
		/>
	{/if}
	<p style={'top: calc(' + box_height + 'px / 2 - 12px);'}>{text}</p>
</div>

<style lang="scss">
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
		pointer-events: none;
	}
	input,
	textarea {
		transition-duration: 300ms;
		border-width: 3px;
		border: rgb(37, 124, 255) solid;
		background-color: white;
		outline: 0px;
		min-width: 100%;
		resize: none;
	}
	:not(:is(input, textarea):focus, :not(:is(input, textarea):placeholder-shown)) {
		margin-top: 0px !important;
		border-color: transparent;
		background-color: #e6e6e6;
	}
	input:focus,
	:is(:is(input, textarea):focus, :not(:is(input, textarea):placeholder-shown)) ~ p {
		color: rgb(0, 15, 245);
	}
</style>
