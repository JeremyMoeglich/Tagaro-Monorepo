<script lang="ts">
	export let name: string;
	export let active: boolean;
</script>

<div class="outer">
	<p>{name}</p>
	<input type="checkbox" bind:checked={active} />
</div>

<style>
	.outer {
		display: flex;
		gap: 1rem;
	}
</style>
