<script lang="ts">
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
</script>

<div class="bg-slate-900 py-8 shade w-full flex flex-col items-center">
	<h1 class="gradient text-center glow mb-0">
		Alles von Sky inklusive Paramount+ und Netflix ab € 40 mtl.*
	</h1>
	<h2 class="no_gradient text-white text-center mt-0 mb-3">
		Bis zu 3 parallele Streams + € 100 Wunschgutschein*
	</h2>
	<img src="/images/visuals/sky_23-11_black-friday_header_l.avif" alt="" class="mb-10 w-3/4 max-w-[1000px]"/>

	<AboformularButton source="Black Friday Showcase"/>
</div>

<style>
	.glow {
		filter: drop-shadow(0 0 1.5rem #66a2b4);
	}
	.shade {
		background: linear-gradient(rgb(13, 19, 41), rgb(0, 0, 10));
	}
</style>
