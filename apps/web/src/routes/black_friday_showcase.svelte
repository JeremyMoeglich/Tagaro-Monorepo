<script lang="ts">
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
</script>

<div class="bg-white w-full flex flex-col items-center showcase_size">
	<h1 class="text-center glow mb-0 pt-12">
		Alles von Sky inklusive Paramount+ und Netflix für € 40 mtl.*
	</h1>
	<h2 class="no_gradient text-center mt-0 mb-3">
		Bis zu 3 parallele Streams und UHD bei Sat- & Kabel-Empfang inklusive*
	</h2>
	<img src="/images/visuals/xmas_special.png" alt="" class="mb-10 w-3/4 max-w-[800px]" />

	<div class="flex items-center justify-center pb-8 gap-12">
		<img src="/images/badges/xmas.png" alt="" class="w-40 h-40" />
		<ul class="leading-7 text-xl">
			<li>✓ Alles von Sky inkl. Paramount+ und Netflix für € 40 mtl. statt € 64 mtl.</li>
			<li>✓ Inklusive Sky Go Plus mit 3 parallelen Streams</li>
			<li>✓ Optional: UHD im Wert von € 60 im ersten Jahr</li>
			<li>✓ 500 PAYBACK Basis Punkte</li>
			<li>✓ Ersparnis: € 348 im ersten Jahr</li>
		</ul>
	</div>

	<AboformularButton
		source="Xmas Special Showcase"
		route="https://fd10.formdesk.com/tagaro/Sky-Bestellung-6"
	/>
</div>

<style>
	.glow {
		filter: drop-shadow(0 0 1.5rem #66a2b4);
	}
</style>
