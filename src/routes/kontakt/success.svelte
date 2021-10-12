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

<style lang="scss">
	@import '../../lib/style/mixins.scss';
	.center_alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title {
		@include gradient-text;
	}
</style>
