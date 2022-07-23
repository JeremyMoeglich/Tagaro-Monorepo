<script lang="ts">
	import IpLogRow from '$lib/components/templates/routes/admin/ip_log_row.svelte';
	import IpWatchlistRow from '$lib/components/templates/routes/admin/ip_watchlist_row.svelte';

	import { firestore } from '$lib/firebase_vars';

	import { onSnapshot, collection, limit, orderBy, query } from 'firebase/firestore';
	import { sortBy } from 'lodash-es';

	interface ip_log_type {
		createdAt: { seconds: number; nanoseconds: number };
		ip: string;
		source: string;
		uuid?: string;
	}

	let ip_logs: ip_log_type[];

	onSnapshot(
		query(collection(firestore, 'Ip_log'), orderBy('createdAt', 'desc'), limit(30)),
		(snapshot) => {
			ip_logs = sortBy(
				snapshot.docs.map((doc) => doc.data() as ip_log_type),
				(item) => item.createdAt.seconds
			);
		}
	);

	let ip_log_watchlist: string[];
	onSnapshot(query(collection(firestore, 'ip_log_watchlist')), (snapshot) => {
		console.log('update');
		ip_log_watchlist = snapshot.docs.map((doc) => doc.id);
	});

	function split_into_columns<T>(list: T[], per_column: number) {
		const result: T[][] = [];

		for (let i = 0; i < list.length; i += per_column) {
			result.push(list.slice(i, i + per_column));
		}

		return result;
	}

	$: columns = ip_logs ? split_into_columns(ip_logs, 10) : undefined;
</script>

{#if columns && ip_log_watchlist}
	<div class="main">
		<div class="box1">
			<h2>IP Log</h2>
			<div class="values">
				{#each columns as column}
					<div>
						{#each column as item}
							{#key ip_log_watchlist}
								<IpLogRow
									ip={item.ip}
									createdAt={item.createdAt}
									source={item.source}
									checked={ip_log_watchlist.includes(item.ip)}
									uuid={item?.uuid}
								/>
							{/key}
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<div class="box2">
			{#each ip_log_watchlist as ip}
				<IpWatchlistRow {ip} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.main {
		display: flex;
		align-items: center;
		gap: 50px;
	}
	.box1 {
		padding: 20px;
		background-color: rgb(232, 232, 240);
	}
	.values {
		display: flex;
		flex-direction: row;
	}
	h2 {
		text-align: center;
	}
</style>
