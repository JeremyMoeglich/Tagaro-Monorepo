<script lang="ts">
	import { onSnapshot, collection, limit, orderBy, query, Firestore } from 'firebase/firestore';
	import { sortBy } from 'lodash-es';
	import IpLogRow from './ip_log_row.svelte';

	let data: Record<string, any>[] = [];

	export let firestore: Firestore;

	onSnapshot(
		query(collection(firestore, 'Ip_log'), orderBy('createdAt', 'desc'), limit(20)),
		(snapshot) => {
			data = sortBy(
				snapshot.docs.map((doc) => doc.data()),
				(item) => item.createdAt.seconds
			);
		}
	);
</script>

<div class="main">
	<h2>IP Log</h2>
	<div class="values">
		{#each data as obj}
			<IpLogRow ip={obj.ip} source={obj.source} createdAt={obj.createdAt} />
		{/each}
	</div>
</div>

<style>
	.main {
		padding: 20px;
		background-color: rgb(232, 232, 240);
	}
	.values {
		flex-wrap: wrap;
		display: flex;
		flex-direction: column;
		max-height: 750px;
		width: 550px;
	}
	h2 {
		text-align: center;
	}
</style>
