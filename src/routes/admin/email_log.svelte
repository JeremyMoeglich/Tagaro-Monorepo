<script lang="ts">
	import { firestore } from '$lib/firebase_vars';

	import { collection } from 'firebase/firestore';
	import { orderBy } from 'firebase/firestore';
	import { limit } from 'firebase/firestore';

	import { query } from 'firebase/firestore';

	import { onSnapshot } from 'firebase/firestore';
	import { pass_back } from 'functional-utilities';
	import { sortBy } from 'lodash-es';

	interface email_log_type {
		email: string;
		timestamp: Date;
		source: string;
		title: string;
	}

	let email_log: email_log_type[] = [];

	onSnapshot(
		query(collection(firestore, 'email_log'), orderBy('timestamp', 'desc'), limit(30)),
		(snapshot) => {
			console.log(snapshot.docs.map((doc) => doc.data()));
			email_log = sortBy(
				snapshot.docs.map((doc) => {
                    const data = doc.data()
                    data.timestamp = new Date(data.timestamp.seconds * 1000)
                    return data as email_log_type
                }),
				(item) => item.timestamp
			);
		}
	);
</script>

<div class="outer">
	<h2>Email Log</h2>
	<div class="values">
		{#each email_log as item}
			<div>
				<p>
					{item.email} - {item.source} - {item.title} - {item.timestamp.toLocaleString('de-De')}
				</p>
			</div>
		{/each}
	</div>
</div>
