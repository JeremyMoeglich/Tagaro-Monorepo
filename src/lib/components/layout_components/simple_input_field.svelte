<script lang="ts">
	export let text: string;
	export let name: string;
	export let required = true;
	export let type = 'text';
	export let multiline = false;
	export let autocomplete = 'on';
	export let validator: (v: string) => string = () => '';
	export let value = '';
	let error_message = '';
	function validate() {
		error_message = validator(value);
	}
</script>

<div class="main_container">
	<p>{text}</p>
	<div class="outer">
		{#if type === 'select'}
			<select {name} id={name}> <slot /></select>
		{:else if multiline}
			<textarea {name} {required} placeholder=" " {autocomplete} bind:value />
		{:else if type == 'text'}
			<input
				{name}
				type="text"
				{required}
				placeholder=" "
				{autocomplete}
				bind:value
				on:input={validate}
			/>
		{:else}
			<input {name} {type} {required} placeholder=" " {autocomplete} />
		{/if}
	</div>
	{#if error_message}
		<p class="error">{error_message}</p>
	{/if}
</div>

<style lang="scss">
	.outer {
		height: 45px;
		width: 300px;
	}
	input,
	textarea,
	select {
		width: 100%;
		height: 100%;
		max-width: 90vw;
		border: 1px solid black;
	}
	p {
		color: blue;
	}
	.error {
		color: red;
	}
</style>
