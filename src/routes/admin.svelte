<script lang="ts">
	import {
		getAuth,
		setPersistence,
		signInWithEmailAndPassword,
		browserLocalPersistence,
		onAuthStateChanged
	} from 'firebase/auth';
	import type { User } from 'firebase/auth';
	import { getFirestore } from 'firebase/firestore';
	import { initializeApp } from 'firebase/app';
	import IpLogOverview from '$lib/components/admin/Ip_log_overview.svelte';
	import Button from '$lib/components/layout_components/button.svelte';
	import PackageRenderer from '$lib/components/admin/package_renderer.svelte';

	const admin_email = 'info@tagaro.de';

	let password: string;

	let user: User;
	let error_message = '';

	const firebaseConfig = {
		apiKey: 'AIzaSyBxa3QjcGlcfzictoQpiT7iuIxf99ViVpM',
		authDomain: 'tagaro-346715.firebaseapp.com',
		projectId: 'tagaro-346715',
		storageBucket: 'tagaro-346715.appspot.com',
		messagingSenderId: '162148161041',
		appId: '1:162148161041:web:e4acb74e3b23b03b4c43b0',
		measurementId: 'G-SBNZSQV2MZ'
	} as const;

	const firebase_app = initializeApp(firebaseConfig);
	const firestore = getFirestore(firebase_app);

	const auth = getAuth();
	async function login() {
		setPersistence(auth, browserLocalPersistence).then(() => {
			signInWithEmailAndPassword(auth, admin_email, password).catch((error) => {
				error_message = error.message;
			});
		});
	}

	onAuthStateChanged(auth, (u) => {
		if (u) {
			user = u;
		}
	});
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
		<IpLogOverview {firestore} />
		<PackageRenderer />
	</div>
{/if}

<style>
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
	.main {
		display: flex;
		margin: 50px 20px;
		gap: 20px;
	}
	p {
		margin: 0px;
	}
</style>
