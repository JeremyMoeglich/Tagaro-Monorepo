<script lang="ts">
	import {
		setPersistence,
		signInWithEmailAndPassword,
		browserLocalPersistence,
		onAuthStateChanged
	} from 'firebase/auth';
	import type { User } from 'firebase/auth';
	import { auth, firestore } from 'frontend/firebase';
	import { typed_entries, typed_from_entries } from 'functional-utilities';
	import Button from 'components/elements/interactive/buttons/button.svelte';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { browser } from '$app/environment';

	const admin_email = 'info@tagaro.de';

	let password: string;

	let user: User;
	let error_message = '';

	async function login() {
		setPersistence(auth, browserLocalPersistence).then(() => {
			signInWithEmailAndPassword(auth, admin_email, password).catch((error) => {
				error_message = error.message;
			});
		});
	}

	interface activity_type {
		active: boolean;
		delay: number; //in minutes

		last: Date;
	}

	let listening_for_status = false;
	let activity: Record<string, activity_type> = {};
	onAuthStateChanged(auth, (u) => {
		if (u) {
			user = u;
			if (!listening_for_status) {
				listening_for_status = true;
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
			}
		}
	});

	const panels = {
		'IP Log': 'ip_log',
		'Paket Bild Generator': 'package_renderer',
		'Preis Liste': 'price',
		'Email Log': 'email_log'
	} as const;

	const layout_route = '/admin';

	let current_time: Date = new Date();
	if (browser) {
		setInterval(() => {
			current_time = new Date();
		}, 1000);
	}
</script>

<div>
	{#if !user}
		<form on:submit|preventDefault={login} class="login">
			<p>Password:</p>
			<input type="password" bind:value={password} />
			{#if error_message}
				<p style="color: red;">{error_message}</p>
			{/if}
			<Button text={'Login'} padding_y={'10px'} />
		</form>
	{:else}
		<div class="main">
			<div class="sidebar">
				<div class="sidebar_choices">
					{#each typed_entries(panels) as panel}
						{@const name = panel[0]}
						{@const relative_route = panel[1]}
						{@const route = `${layout_route}/${relative_route}`}
						<a href={route} class="sidebar_element">{name}</a>
					{/each}
				</div>
				<div class="activity">
					{#each typed_entries(activity) as [name, value]}
						{@const till_next = Math.round(
							value.delay * 60 - (current_time.getTime() - value.last.getTime()) / 1000
						)}
						<div class="activity_element" class:inactive={!value}>
							<p>{name}</p>
							<div>
								<p>
									{value.active ? (till_next > 0 ? 'active' : 'no response') : 'inactive'}
								</p>
								<p>
									{Math.max(till_next, 0)}s
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="content">
				<slot />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px;
		gap: 10px;
		background-color: rgb(218, 218, 218);
		width: fit-content;
		margin: 60px;
		margin-left: auto;
		margin-right: auto;
	}
	p {
		margin: 0px;
	}
	.sidebar_element {
		padding: 20px;
		background-color: rgb(232, 232, 240);
	}
	.sidebar {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: 100%;
		gap: 30px;
	}
	.activity {
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 220px;
	}
	.inactive {
		background-color: red !important;
		color: white;
	}
	.activity_element {
		display: flex;
		gap: 10px;
		padding: 10px;
		background-color: lightgreen;
	}
	.sidebar_choices {
		display: flex;
		flex-direction: column;
		width: fit-content;
	}
	.main {
		display: flex;
		align-items: center;
	}
	.content {
		padding: 50px;
	}
</style>
