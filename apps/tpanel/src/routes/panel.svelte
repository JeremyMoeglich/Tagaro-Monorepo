<script lang="ts">
	import Activity from './activity.svelte';
	import { page } from '$app/stores';
	import { typed_entries } from 'functional-utilities';

	const panels = {
		ip_log: 'IP Log',
		package_renderer: 'Paket Bild Generator',
		price: 'Preis Liste',
		email_log: 'Email Log',
		email_gen: 'Email Generator'
	} as const;

	function get_current_page(path: string): keyof typeof panels | 'home' {
		const match = path.match(/\/panel\/(.*)/);
		if (match) {
			return match[1] as keyof typeof panels;
		} else {
			return 'home';
		}
	}

	let current_page = get_current_page($page.url.pathname);

	$: current_page = get_current_page($page.url.pathname);
</script>

<div class="flex h-full">
	<div class="w-72 h-full bg-slate-800 flex flex-col items-center py-4">
		<div class="border-[1px] p-3 border-slate-700 rounded-lg">
			<h3 class="text-blue-400">Activity</h3>
			<Activity />
		</div>
		<div class="flex flex-col gap-2 mt-4 w-full">
			{#each typed_entries(panels) as [id, name]}
				<a
					href={`/panel/${id}`}
					class="flex items-center gap-2 px-6 py-1 hover:bg-slate-700 text-gray-400 w-full"
					class:active={current_page === id}
				>
					{name}
				</a>
			{/each}
		</div>
	</div>
	<div class="w-full max-h-full overflow-hidden">
		<slot />
	</div>
</div>

<style>
	.active {
		background-color: rgba(68, 66, 180, 0.336);
	}
</style>
