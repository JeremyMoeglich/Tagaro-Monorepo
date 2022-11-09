<script lang="ts">
	export let href: string;
	export let active: boolean;
</script>

{#if active}
	<a {href} class="active wrapper">
		<slot />
	</a>
{:else}
	<span class="wrapper">
		<slot />
	</span>
{/if}

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	.wrapper {
		width: 100%;
	}
</style>
