<script lang="ts">
	export let ip: string;
	export let createdAt: { seconds: number; nanoseconds: number };
	export let source: string;

	function createdAt_to_string(createdAt: { seconds: number; nanoseconds: number }) {
		const date = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000);
		return date.toLocaleString();
	}
</script>

<div>
	<p>IP - {ip}</p>
	<p>Time - {createdAt_to_string(createdAt)}</p>
	<p>Source - {source}</p>
</div>

<style>
	div {
		border: 1px solid rgb(168, 168, 168);
		background-color: rgb(255, 255, 255);
		padding: 10px 20px;
	}
	p {
		margin: 0;
		line-height: 100%;
	}
</style>
