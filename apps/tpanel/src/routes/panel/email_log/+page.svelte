<script lang="ts">
	import { firestore } from 'frontend/firebase';
	import { collection } from 'firebase/firestore';
	import { orderBy } from 'firebase/firestore';
	import { limit } from 'firebase/firestore';
	import { query } from 'firebase/firestore';
	import { onSnapshot } from 'firebase/firestore';
	import { sortBy } from 'lodash-es';

	interface email_log_type {
		email: string;
		timestamp: Date;
		source: string;
		title: string;
	}

	let email_log: email_log_type[] = [];

	onSnapshot(
		query(collection(firestore, 'email_log'), orderBy('timestamp', 'desc'), limit(16)),
		(snapshot) => {
			console.log(snapshot.docs.map((doc) => doc.data()));
			email_log = sortBy(
				snapshot.docs.map((doc) => {
					const data = doc.data();
					data.timestamp = new Date(data.timestamp.seconds * 1000);
					return data as email_log_type;
				}),
				(item: { timestamp: Date }) => item.timestamp
			);
		}
	);
</script>

<div class="flex flex-col justify-center items-center w-full h-full">
	<table class="table text-sm text-slate-300 table-zebra table-compact">
		<thead>
			<tr>
				<th>Email</th>
				<th>Source</th>
				<th>Timestamp</th>
				<th>Title</th>
			</tr>
		</thead>
		<tbody>
			{#each email_log as item}
				<tr>
					<td>
						{item.email}
					</td>
					<td>
						{item.source}
					</td>
					<td>
						{item.timestamp.toLocaleString('de-De')}
					</td>
					<td>
						{item.title}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

