<script lang="ts">
	export let href: string;
	export let active: boolean;
</script>

{#if active}
	<a {href} class="active">
		<slot />
	</a>
{:else}
	<span>
		<slot />
	</span>
{/if}

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
