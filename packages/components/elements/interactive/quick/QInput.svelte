<script lang="ts">
	export let name: string;
	export let value: string;
</script>

<div class="outer">
	<p>{name}</p>
	<input type="text" id={name} bind:value placeholder="Nothing here yet"/>
</div>

<style>
	.outer {
		display: flex;
		gap: 1rem;
	}
</style>
