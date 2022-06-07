<script lang="ts">
	import {
		setPersistence,
		signInWithEmailAndPassword,
		browserLocalPersistence,
		onAuthStateChanged
	} from 'firebase/auth';
	import type { User } from 'firebase/auth';
	import { auth, firestore } from '$lib/firebase_vars';
	import { typed_entries, typed_from_entries } from 'functional-utilities';
	import Button from '$lib/components/elements/interactive/buttons/button.svelte';
	import { collection, onSnapshot, query } from 'firebase/firestore';

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

	let listening_for_status = false;
	let activity: Record<string, boolean> = {};
	onAuthStateChanged(auth, (u) => {
		if (u) {
			user = u;
			if (!listening_for_status) {
				listening_for_status = true;
				const activity_collection = collection(firestore, 'activity');
				onSnapshot(activity_collection, (snapshot) => {
					activity = typed_from_entries(
						snapshot.docs.map((doc) => [doc.id, doc.data().active as boolean])
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
</script>

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
					<div class="activity_element" class:inactive={!value}>
						<p>{name}</p>
						<p>{value ? 'active' : 'inactive'}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
{/if}

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
