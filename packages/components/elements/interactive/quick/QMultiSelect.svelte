<script lang="ts">
	export let name: string;
	export let selected: T[];
	export let options: ReadonlyArray<T>;

	type T = $$Generic<string>;
</script>

<div>
	<p>{name}</p>
	{#each options as option}
		<label>
			<input type="checkbox" bind:group={selected} value={option} />
			{option}
		</label>
	{/each}
</div>
