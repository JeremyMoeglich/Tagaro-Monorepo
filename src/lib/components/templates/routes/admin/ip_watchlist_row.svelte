<script lang="ts">
	import { firestore } from '$lib/firebase_vars';

	import { deleteDoc, doc } from 'firebase/firestore';

	export let ip: string;


	function disable() {
		const document = doc(firestore, 'ip_log_watchlist', ip);
		deleteDoc(document);
	}
</script>

<div class="main">
	<div>
		<p>IP - {ip}</p>
	</div>
	<div class="disable" on:click={disable}><p>-</p></div>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		gap: 20px;
		border: 1px solid rgb(168, 168, 168);
		background-color: rgb(255, 255, 255);
		padding: 10px 20px;
	}
	p {
		margin: 0;
		line-height: 100%;
	}
	.disable {
		display: flex;
		cursor: pointer;
		color: rgb(89, 0, 255);
		--size: 50px;
		font-size: calc(var(--size) * 0.8);
		font-weight: bold;
		justify-content: center;
		align-items: center;
		border-radius: 10%;
		width: var(--size);
		height: var(--size);
		background-color: rgb(224, 224, 224);
	}
    .disable:hover {
        background-color: rgb(198, 187, 211);
    }
	.disable p {
		padding-bottom: 10px;
	}
</style>
