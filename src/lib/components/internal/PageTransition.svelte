<!-- PageTransition.svelte -->
<script>
	import { fly } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ x: -5, duration: 100, delay: 100 }} out:fly={{ x: 5, duration: 100 }}>
		<slot />
	</div>
{/key}
