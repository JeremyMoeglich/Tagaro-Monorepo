<script>
	import EmptySpacer from '$lib/site_components/empty_spacer.svelte';
</script>

<body>
	<EmptySpacer />
	<div class="center_alignment">
		<h1 class="title">Kontaktformular erfolgreich abgesendet</h1>
		<p><b>Wir melden uns bei Ihnen so schnell wie möglich!</b></p>
	</div>
	<EmptySpacer />
</body>

<style lang='scss'>
	.center_alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
