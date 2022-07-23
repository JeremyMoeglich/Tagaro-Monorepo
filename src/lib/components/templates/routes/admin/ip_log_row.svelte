<script lang="ts">
	import { firestore } from '$lib/firebase_vars';

	import { deleteDoc, doc, setDoc } from 'firebase/firestore';

	import Checkbox from 'svelte-checkbox';

	export let ip: string;
	export let createdAt: { seconds: number; nanoseconds: number };
	export let source: string;
	export let uuid: string | undefined = undefined;

	function createdAt_to_string(createdAt: { seconds: number; nanoseconds: number }) {
		const date = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000);
		return date.toLocaleString();
	}
	export let checked: boolean;

	async function change({ detail }: CustomEvent<boolean>): Promise<void> {
		const document = doc(firestore, 'ip_log_watchlist', ip);
		if (detail) {
			await setDoc(document, {});
			checked = true;
		} else {
			await deleteDoc(document);
			checked = false;
		}
	}
</script>

<div class="main">
	<div>
		<p>IP - {ip}</p>
		<p>Time - {createdAt_to_string(createdAt)}</p>
		<p>Source - {source}</p>
		{#if uuid}
			<p>UUID - {uuid}</p>
		{/if}
	</div>
	{#if checked !== undefined}
		<div>
			<Checkbox size={'26px'} bind:checked on:change={change} />
		</div>
	{/if}
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		gap: 20px;
		border: 1px solid rgb(168, 168, 168);
		background-color: rgb(255, 255, 255);
		padding: 10px 20px;
		min-height: 64px;
	}
	p {
		margin: 0;
		line-height: 100%;
	}
</style>
