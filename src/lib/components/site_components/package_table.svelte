<script lang="ts">
	import Zubuchoption from '$lib/components/layout_components/zubuchoption.svelte';
	import { get_offer_note, get_price_string } from '$lib/scripts/universal/asset_library/prices';
	import type { package_id } from '$lib/scripts/universal/asset_library/assets/packages';

	type table_layout = ReadonlyArray<Array<package_id>>;

	const table: table_layout = [
		['entertainment'],
		['entertainmentplus'],
		['entertainment', 'cinema'],
		['entertainmentplus', 'cinema'],
		['entertainment', 'sport'],
		['entertainmentplus', 'sport'],
		['entertainment', 'bundesliga'],
		['entertainmentplus', 'bundesliga'],
		['entertainment', 'cinema', 'sport'],
		['entertainmentplus', 'cinema', 'sport'],
		['entertainment', 'cinema', 'bundesliga'],
		['entertainmentplus', 'cinema', 'bundesliga'],
		['entertainment', 'sport', 'bundesliga'],
		['entertainmentplus', 'sport', 'bundesliga'],
		['entertainment', 'sport', 'bundesliga', 'cinema'],
		['entertainmentplus', 'sport', 'bundesliga', 'cinema']
	];
</script>

<div class="main_container">
	<h2 class="title">Pakete & Preise in der Übersicht</h2>
	<table>
		{#each table as row}
			<tr>
				{#each row as element}
					<td> <img src={`/images/assets/packages/square/${element}.png`} alt="" /> </td>
				{/each}
				{#if row.length < 4}
					<td colspan={4 - row.length} />
				{/if}
				<td class="text_cell">
					<p>
						<b
							>{get_price_string(row, 'jahr')} mtl. im Jahres-Abo{#if get_offer_note(row)}<br
								/>({get_offer_note(row)}),
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
			<b>UHD für € 4 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark></b> oder<br />
			<b> € 5 mtl. mit Entertainment (für Sat oder Kabel-Empfang)</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/dazn.svg">
			<b>DAZN jährlich + € 24,99 mtl. </b>oder<b> <br /> DAZN monatlich + € 29,99 mtl.</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/multiscreen.png">
			<b>Multiscreen für € 8 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark></b><br /> oder € 10 mtl. mit Entertainment
			(Inkl. Sky Go Plus für 3 mobile Geräte, 2. Sky Q Receiver für einmalig € 49, 1 Sky Q Mini für einmalig
			€ 29 oder OHNE zusätzliche Hardware)
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/kids.png">
			<b>Sky Kids Zubuchung für € 4 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark></b><br /> oder € 5 mtl.
			mit Entertainment
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/trendsports.png">
			<b>trendSports + € 5,99 mtl.</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/plus18.png">
			<b>18+ für Blue Movie € 0</b><br /> einmalige Versandpauschale 18+ PIN
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/NetflixSDHD.png">
			<b>Netflix Standard-Abo, HD/2 Streams für € 4 mtl.</b> ab Entertainment Plus + 1 Paket <mark>(20%
			Rabatt)</mark> oder € 5 mtl. mit Entertainment <br />
			<b>Netflix Premium-Abo, UHD/4 Streams für € 8 mtl.</b> ab Entertainment Plus + 1 Paket <mark>(20% Rabatt)</mark>
			oder € 10 mtl. mit Entertainment
		</Zubuchoption>
	</div>
</div>

<style lang="scss">
	@import 'lib/style/mixins.scss';

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
