<script lang="ts">
	export let name: string;
	export let selected: T;
	export let options: ReadonlyArray<T>;

	type T = $$Generic<string>;
</script>

<div class="outer">
	<p>{name}</p>
	<select id={name} bind:value={selected}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>

<style>
	.outer {
		display: flex;
		gap: 1rem;
	}
</style>
