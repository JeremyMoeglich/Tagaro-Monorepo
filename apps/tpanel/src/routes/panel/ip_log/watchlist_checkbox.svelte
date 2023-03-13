<script lang="ts">
	import { firestore } from 'frontend/firebase';

	import { deleteDoc, doc, setDoc } from 'firebase/firestore';

	import Checkbox from 'svelte-checkbox';

	import type { watchlist_type } from './types';

	export let ip: string;
	export let uuid: string | undefined;
	export let watchlist: watchlist_type[];

	function is_checked(ip: string, watchlist: watchlist_type[]): boolean {
		return watchlist.some((entry) => entry.ip === ip);
	}

	async function change({ detail }: CustomEvent<boolean>): Promise<void> {
		const document = doc(firestore, 'ip_log_watchlist', ip);
		if (detail) {
			let obj: watchlist_type = { ip };
			if (uuid) obj.uuid = uuid;
			await setDoc(document, obj);
			checked = true;
		} else {
			await deleteDoc(document);
			checked = false;
		}
	}

	let checked = is_checked(ip, watchlist);

	$: checked = is_checked(ip, watchlist);
</script>

<div class="flex justify-center">
	<div class="bg-white rounded-md">
		<Checkbox size={'17px'} bind:checked on:change={change} />
	</div>
</div>
