<script lang="ts">
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
</script>

<div class="bg-white w-full flex flex-col items-center showcase_size">
	<div class="flex flex-wrap items-center justify-center pt-[60px] gap-[50px]">
		<img src="/images/badges/sky_signature.svg" alt="" class="w-[150px]" />
		<div>
			<h1 class="text-center glow mb-0">
				Alles von Sky inklusive Paramount+ und Netflix für € 40 mtl.*
			</h1>
			<h2 class="no_gradient text-center mt-0 mb-3">
				Bis zu 3 parallele Streams und UHD bei Sat- & Kabel-Empfang inklusive*
			</h2>
		</div>
	</div>
	<a href="https://fd10.formdesk.com/tagaro/Sky-Bestellung-5" class="mb-5 mt-[3px] w-3/4">
		<img src="/images/visuals/sky_24-01_best-deals_entplus-cin-buli-spo.avif" alt="" class=" ml-auto mr-auto w-full max-w-[800px] image" />
	</a>

	<div class="flex items-center justify-center pb-8 gap-12">
		<img src="/images/badges/keine_aktivierung.svg" alt="" class="w-40 h-40 xmas_image" />
		<ul class="leading-7 text-[18px]">
			<li>✓ Alles von Sky inkl. Paramount+ und Netflix für € 40 mtl. statt € 64 mtl.</li>
			<li>✓ Inklusive Sky Go Plus mit 3 parallelen Streams</li>
			<li>✓ 500 PAYBACK Basis Punkte</li>
			<li>✓ Ersparnis: € 348 im ersten Jahr</li>
		</ul>
	</div>

	<AboformularButton
		source="Xmas Special Showcase"
		route="https://fd10.formdesk.com/tagaro/Sky-Bestellung-5"
	/>
</div>


<style>
	@media (max-width: 677px) {
		.xmas_image {
			display: none;
		}
	}
	.image:hover {
		transform: scale(1.02);
	}
	.image {
		transition-duration: 300ms;
	}
</style>