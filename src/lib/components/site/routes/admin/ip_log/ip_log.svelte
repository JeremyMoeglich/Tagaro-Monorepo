<script lang="ts">
	import { firestore } from '$lib/firebase_vars';
	import {
		onSnapshot,
		collection,
		limit,
		orderBy,
		query,
		where,
		getDocs
	} from 'firebase/firestore';
	import { isEqual } from 'lodash-es';
	import { sortBy } from 'lodash-es';
	import LogNote from './log_note.svelte';
	import type { note_type, watchlist_type } from './types';
	import WatchlistCheckbox from './watchlist_checkbox.svelte';

	interface timestamp {
		seconds: number;
		nanoseconds: number;
	}

	interface log_type {
		createdAt: timestamp;
		ip: string;
		source: string;
		uuid?: string;
		developement_flag?: boolean;
	}

	interface processed_log_type extends log_type {
		note: note_type;
	}

	function id_from_timestamp(timestamp: timestamp): string {
		return timestamp_to_date(timestamp).toISOString();
	}

	function timestamp_to_date(timestamp: timestamp) {
		return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
	}

	function get_date_offset(date1: Date, date2: Date) {
		const diff = date1.getTime() - date2.getTime();
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		return diffDays;
	}

	let ip_logs: log_type[] = [];
	onSnapshot(
		query(collection(firestore, 'Ip_log'), orderBy('createdAt', 'desc'), limit(30)),
		(snapshot) => {
			ip_logs = sortBy(
				snapshot.docs.map((doc) => doc.data() as log_type),
				(item) => item.createdAt.seconds
			);
		}
	);

	let log_watchlist: watchlist_type[] = [];
	onSnapshot(query(collection(firestore, 'ip_log_watchlist')), (snapshot) => {
		log_watchlist = snapshot.docs.map((doc) => {
			const data = doc.data();
			if (data?.ip) {
				return data as watchlist_type;
			} else {
				return { ip: doc.id };
			}
		});
	});
	const note_cache: Record<string, note_type> = {};

	let processed_ip_logs: processed_log_type[] = [];
	$: log_watchlist,
		ip_logs,
		(() => {
			processed_ip_logs = [];
			Array.from(ip_logs.entries()).forEach(async ([index, log]) => {
				processed_ip_logs.push({
					...log,
					note: 'loading'
				});
				if (log?.developement_flag ?? false) {
					processed_ip_logs[index].note = 'dev';
					return;
				}
				for (const watchlist_item of log_watchlist) {
					if (watchlist_item.ip === log.ip || (watchlist_item.uuid === log.uuid && log.uuid)) {
						processed_ip_logs[index].note = 'ban';
						return;
					}
				}
				if (note_cache?.[id_from_timestamp(log.createdAt)]) {
					processed_ip_logs[index].note = note_cache[id_from_timestamp(log.createdAt)];
					return;
				}
				const col = collection(firestore, 'Ip_log');
				const docs_queries = [query(col, where('ip', '==', log.ip))];
				if (log?.uuid) {
					docs_queries.push(query(col, where('uuid', '==', log.uuid)));
				}
				const found_docs = (
					await Promise.all(
						docs_queries.map(async (docs_query) => {
							return (await getDocs(docs_query)).docs.map((doc) => doc.data() as log_type);
						})
					)
				).flat();
				for (const found_doc of found_docs) {
					const date1 = timestamp_to_date(log.createdAt);
					const date2 = timestamp_to_date(found_doc.createdAt);
					const date_offset = get_date_offset(date1, date2);
					if (date_offset > 7) {
						processed_ip_logs[index].note = 'warn';
						note_cache[id_from_timestamp(log.createdAt)] = 'warn';
						return;
					}
				}
				processed_ip_logs[index].note = 'unknown';
				note_cache[id_from_timestamp(log.createdAt)] = 'unknown';
			});
		})();
</script>

<div class="outer">
	<table>
		<thead>
			<tr>
				<th>Note</th>
				<th>IP</th>
				<th>UUID</th>
				<th>Source</th>
				<th>Time</th>
				<th>Watch</th>
			</tr>
		</thead>
		<tbody>
			{#each processed_ip_logs as log}
				<tr>
					<td><LogNote note={log.note} /></td>
					<td>{log.ip}</td>
					<td>{log?.uuid?.replaceAll('-', '') ?? 'None'}</td>
					<td>{log.source}</td>
					<td>{timestamp_to_date(log.createdAt).toLocaleString('de-DE')}</td>
					{#if !isEqual(log_watchlist, [])}
						<td><WatchlistCheckbox ip={log.ip} uuid={log?.uuid} watchlist={log_watchlist} /></td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="watchlist_items">
		{#each log_watchlist as watchlist_item}
			<div class="watchlist_item">
				<div class="left">
					<div>
						{watchlist_item.ip}
					</div>
					{#if watchlist_item?.uuid}
						<div>
							{watchlist_item.uuid}
						</div>
					{/if}
				</div>
				<div>
					<WatchlistCheckbox
						ip={watchlist_item.ip}
						uuid={watchlist_item.uuid}
						watchlist={log_watchlist}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.outer {
		display: flex;
		gap: 20px;
		align-items: center;
	}
	.watchlist_item {
		display: flex;
		gap: 20px;
		align-items: center;
		& > .left {
			display: flex;
			flex-direction: column;
		}
	}
	.watchlist_items {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
