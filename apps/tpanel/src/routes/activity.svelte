<script lang="ts">
	import { collection, onSnapshot } from 'firebase/firestore';
	import { firestore } from 'frontend/firebase';
	import { typed_from_entries } from 'functional-utilities';
	import { onDestroy, onMount } from 'svelte';
	import Timer from 'components/elements/timer.svelte';
	import dayjs from 'dayjs';

	interface activity_type {
		active: boolean;
		delay: number; //in minutes
		last: Date;
	}
	let activity: Record<string, activity_type> = {};
	let activity_snapshot: ReturnType<typeof onSnapshot> | undefined;

	onMount(() => {
		const activity_collection = collection(firestore, 'activity');
		onSnapshot(activity_collection, (snapshot) => {
			activity = typed_from_entries(
				snapshot.docs.map((doc) => [
					doc.id,
					(() => {
						const data = doc.data();
						data.last = new Date(data.last.seconds * 1000);
						return data as activity_type;
					})()
				])
			);
		});
	});

	onDestroy(() => {
		activity_snapshot && activity_snapshot();
	});
</script>

<div class="flex flex-col w-min whitespace-nowrap gap-2">
	{#each Object.entries(activity) as [name, { active, delay, last }]}
		<div class="flex items-center border-slate-700 border-[1px] rounded-lg py-1 px-2 shadow-md">
			{#if active}
				<div class="w-3 h-3 bg-green-500 rounded-full mr-2" />
			{:else}
				<div class="w-3 h-3 bg-red-500 rounded-full mr-2" />
			{/if}
			<div class="flex-1">
				<div class="text-sm font-medium text-gray-400">{name}</div>
				<div class="text-xs text-gray-500">
					{active ? 'active' : 'inactive'}
					{#if active}
						<span class="mx-1">|</span>
						{delay.toFixed(2)} minutes
						<span class="mx-1">|</span>
						<Timer date={dayjs(last).add(delay, 'minute').toDate()} />
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
