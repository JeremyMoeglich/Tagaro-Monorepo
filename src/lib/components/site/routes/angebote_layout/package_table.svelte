<script lang="ts">
	import { get_offer_note, get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import { package_combinations } from '$lib/scripts/universal/asset_library/assets/packages';
	import Zubuchoption from '$lib/components/templates/element/zubuchoption.svelte';
</script>

<div class="main_container">
	<h2 class="title">Pakete & Preise in der Übersicht</h2>
	<table>
		{#each package_combinations as row}
			<tr>
				{#each row as element}
					<td> <img src={`/images/assets/packages/square/${element}.webp`} alt="" /> </td>
				{/each}
				{#if row.length < 4}
					<td colspan={4 - row.length} />
				{/if}
				<td class="text_cell">
					<p>
						<b
							>{get_price_string(row, 'jahr')} mtl. im Jahres-Abo{#if get_offer_note(row)}<br
								/><mark>{get_offer_note(row)}</mark>,
							{:else},
							{/if}</b
						>
					</p>
					<p>danach {get_price_string(row, 'monat')} mtl. im Monats-Abo</p>
				</td>
			</tr>
		{/each}
	</table>
	<div class="zubuchoptionen" id="zubuchoptionen">
		<h2 class="title">Zubuchoptionen</h2>
		<Zubuchoption image="/images/assets/zubuchoptionen/uhd.png">
			<b>UHD + {get_price_string(['uhd'], 'jahr')} mtl. (für Sat oder Kabel-Empfang)</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/dazn.svg">
			<b>DAZN jährlich + {get_price_string(['dazn_yearly'], 'jahr')} mtl. </b>oder<b>
				<br /> DAZN monatlich + {get_price_string(['dazn_monthly'], 'monat')} mtl.</b
			>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/multiscreen.png">
			<b>Multiscreen + {get_price_string(['multiscreen'], 'jahr')} mtl. <br /></b>Inkl. Sky Go Plus
			für 3 mobile Geräte,<br /> 2. Sky Q Receiver für einmalig € 49 oder 1 Sky Q Mini für einmalig €
			29 (zur Leihe)
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/kids.png">
			<b>Sky Kids + {get_price_string(['kids'], 'jahr')} mtl.</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/trendsports.png">
			<b>trendSports + {get_price_string(['trendsports'], 'jahr')} mtl.</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/plus18.png">
			<b>18+ für Blue Movie € 0</b><br /> einmalige Versandpauschale 18+ PIN
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/NetflixSDHD.png">
			<b
				>Netflix Standard-Abo, HD/2 Streams + {get_price_string(['netflixstandard'], 'jahr')} mtl.</b
			>
			oder <br />
			<b>Netflix Premium-Abo, UHD/4 Streams + {get_price_string(['netflixpremium'], 'jahr')} mtl.</b
			>
		</Zubuchoption>
	</div>
</div>

<style lang="scss">
	@import 'lib/style/gradient_text.scss';

	.main_container {
		background-color: #f2f2f2;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.zubuchoptionen {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 50px;
	}
	.title {
		@include gradient-text;
		text-align: center;
		font-size: 35px;
	}
	img {
		width: min(100%, 100px);
	}

	td {
		padding: 20px;
		$pad: max(min(34px, 7vw - 90px), 0px);
		padding-left: $pad;
		padding-right: $pad;
	}
	tr {
		border-bottom: 1px solid #ccc;
	}
	table {
		border-collapse: collapse;
		width: min(100%, 1300px);
		margin-left: auto;
		margin-right: auto;
	}
	.text_cell {
		border-left: 1px solid #ccc;
		text-align: center;
		line-height: 25px;
		min-width: min(170px, 30vw);
		max-width: 10vw;
	}
</style>
