<script lang="ts">
	import { browser } from '$app/env';
    import dateFormat from 'dateformat';

	const currentdate = new Date();

	export let enddate: Date;
	export let format: string;

	let hidden = false;

	if (currentdate > enddate) {
		hidden = true;
	} else if (browser) {
		const diff_ms = enddate.getTime() - currentdate.getTime();
		setTimeout(() => {
			hidden = true;
		}, diff_ms);
	}
</script>

{#if !hidden}
	{format.replaceAll(
		'%',
		dateFormat(enddate, 'd.m')
	)}
{/if}
