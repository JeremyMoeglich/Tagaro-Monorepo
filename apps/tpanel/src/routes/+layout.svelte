<script lang="ts">
	import { expire } from 'open_constants';
	import { z } from 'zod';
	import cookie from 'cookiejs';
	import type { User } from 'firebase/auth';
	import { auth } from 'frontend/firebase';
	import {
		setPersistence,
		signInWithEmailAndPassword,
		browserLocalPersistence,
		onAuthStateChanged
	} from 'firebase/auth';

	import 'config/app.css';
	import 'config/global.scss';
	import Panel from './panel.svelte';

	const admin_email = 'info@tagaro.de';
	let firebase_user: User | undefined;

	export let data: {
		logged_in: boolean;
	};

	let password = '';
	let error = '';

	async function login() {
		const res = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				password
			})
		});

		if (res.ok) {
			const firebase_promise = setPersistence(auth, browserLocalPersistence).then(() => {
				signInWithEmailAndPassword(auth, admin_email, password).catch(() => {
					error = 'Incorrect password (firebase)';
					return false;
				});
				return true;
			});

			const { token } = z
				.object({
					token: z.string()
				})
				.parse(await res.json());
			cookie.set('token', token, expire.cookie_config);

			if (await firebase_promise) {
				data.logged_in = true;
			}
		} else {
			error = 'Incorrect password (api)';
		}
	}

	onAuthStateChanged(auth, (u) => {
		if (u) {
			firebase_user = u;
		}
	});
</script>

<div class="h-screen overflow-y-scroll overflow-x-auto bg-slate-600">
	{#if data.logged_in && firebase_user}
		<Panel>
			<slot />
		</Panel>
	{:else}
		<div class="flex flex-col items-center justify-center w-full h-full">
			<div
				class="flex flex-col items-center justify-center w-full max-w-md p-4 space-y-4 bg-white rounded-md shadow-md"
			>
				<h1 class="text-2xl font-bold gradient_text">Login</h1>
				<input
					type="password"
					class="input w-full input-bordered caret-white text-white"
					bind:value={password}
					placeholder="Password"
				/>
				<button class="btn btn-primary btn-block" on:click={login}> Login </button>
				{#if error}
					<p class="text-red-500">{error}</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
