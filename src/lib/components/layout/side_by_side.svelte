<script lang="ts">
	export let primary: 'left' | 'right';
</script>

<div class="outer" class:reversed={primary === 'right'}>
	<div class:primary={primary === 'left'} class:secondary={primary !== 'left'}>
		<slot name="left" />
	</div>
	<div class:primary={primary === 'right'} class:secondary={primary !== 'right'}>
		<slot name="right" />
	</div>
</div>

<style>
	.outer {
		display: flex;
		line-height: 200%;
		max-width: 85vw;
		margin-left: auto;
		margin-right: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
	}
	.reversed {
		flex-wrap: wrap-reverse;
	}
	.primary {
		max-width: 800px;
	}
	.secondary {
		width: 600px;
	}
</style>
