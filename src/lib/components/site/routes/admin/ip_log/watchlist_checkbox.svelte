<script lang="ts">
	import { firestore } from '$lib/firebase_vars';

	import { deleteDoc, doc, setDoc } from 'firebase/firestore';
	import Checkbox from 'svelte-checkbox';

	import type { watchlist_type } from './types';

	export let ip: string;
	export let uuid: string | undefined;
	export let watchlist: watchlist_type[];

    if (ip === '5.147.131.245') {
        debugger;
    }

	function is_checked(ip: string, watchlist: watchlist_type[]): boolean {
		return watchlist.some((entry) => entry.ip === ip);
	}

	async function change({ detail }: CustomEvent<boolean>): Promise<void> {
		const document = doc(firestore, 'ip_log_watchlist', ip);
		if (detail) {
			await setDoc(document, {
				ip,
				uuid
			});
			checked = true;
		} else {
			await deleteDoc(document);
			checked = false;
		}
	}

	let checked = is_checked(ip, watchlist);

    $: checked = is_checked(ip, watchlist);
</script>

<div class="checkbox">
	<Checkbox size={'17px'} bind:checked on:change={change} />
</div>

<style>
	.checkbox {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
