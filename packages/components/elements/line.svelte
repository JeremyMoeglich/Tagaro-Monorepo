<script lang="ts">
	export let space = '10px';
</script>

<div class="spacer" style:--space={space} />

<style>
	.spacer {
		height: 1px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(172, 172, 172, 1) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		width: 100%;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--space);
		margin-bottom: var(--space);
	}
</style>
