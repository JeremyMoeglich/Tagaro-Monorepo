<script lang="ts">
	import { aktivierung, aktivierung_string } from 'asset_library/prices';

	export let always_show = true;
</script>

{#if aktivierung <= 0}
	{#if always_show}
		<p>Es fällt <b>keine einmalige Gebühr</b> durch Sky an. Sie sparen €&nbsp;29.</p>
	{/if}
{:else}
	<p>
		Zu allen Angeboten kommt durch Sky eine <b
			>einmalige Gebühr in Höhe von {@html aktivierung_string}</b
		>
		hinzu. Diese wird zusammen mit der ersten monatlichen Programmgebühr abgebucht.
	</p>
{/if}
