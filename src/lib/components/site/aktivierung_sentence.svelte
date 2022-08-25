<script>
	import { aktivierung, aktivierung_string } from '$lib/scripts/universal/asset_library/prices';

	export let always_show = true;
</script>

{#if aktivierung <= 0}
	{#if always_show}
		<p>Es fällt <b>keine Aktivierungsgebühr</b> durch Sky an. Sie sparen € 29.</p>
	{/if}
{:else}
	<p>
		Zu allen Angeboten kommt durch Sky eine <b
			>einmalige Aktivierungsgebühr in Höhe von {aktivierung_string}</b
		>
		hinzu. Diese wird zusammen mit der ersten monatlichen Programmgebühr abgebucht.
	</p>
{/if}
