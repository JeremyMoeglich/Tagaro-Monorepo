<script lang="ts">
	import { hasProperty } from 'functional-utilities';

	export let box_height = 45;
	export let text: string;
	export let name: string;
	export let required = true;
	export let type = 'text';
	export let multiline = false;
	export let autocomplete = 'on';
	export let value = '';

	function onInput(target: EventTarget) {
		if (!hasProperty(target, 'value')) {
			console.error('input_field: onInput: target.value is undefined');
			return;
		}
		if (typeof target.value !== 'string') {
			console.error('input_field: onInput: target.value is not a string');
			return;
		}
		value = target.value;
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
			on:change={(e) => onInput(e.target)}
		/>
	{:else}
		<input
			{name}
			{type}
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
		/>
	{/if}
	<p style={'top: calc(' + box_height + 'px / 2 - 12px);'}>{text}</p>
</div>

<style lang="scss">
	@import 'lib/style/gradient_text.scss';
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
