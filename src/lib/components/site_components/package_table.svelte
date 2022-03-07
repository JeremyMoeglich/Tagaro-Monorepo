<script lang="ts">
	import Zubuchoption from '$lib/components/layout_components/zubuchoption.svelte';
	import { get_offer_note, get_price_string } from '$lib/scripts/universal/prices';
	import type { package_name } from '$lib/scripts/universal/packages';

	type table_layout = Array<Array<package_name>>;

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
					<td> <img src="/images/square_packages/{element}.png" alt="" /> </td>
				{/each}
				{#if row.length < 4}
					<td colspan={4 - row.length} />
				{/if}
				<td class="text_cell">
					<p>
						<b
							>{get_price_string(row, 'jahr')} mlt. im Jahres-Abo{#if get_offer_note(row)}
								<br />({get_offer_note(row)}),
							{:else},
							{/if}</b
						>
					</p>
					<p>danach {get_price_string(row, 'monat')} mlt. im Monats-Abo</p>
				</td>
			</tr>
		{/each}
	</table>
	<div class="zubuchoptionen" id="zubuchoptionen">
		<h2 class="title">Zubuchoptionen</h2>
		<Zubuchoption
			text="<b>UHD + € 5 mtl. (für Sat oder Kabel-Empfang)</b>"
			image="/images/square_packages/uhd.png"
		/>
		<Zubuchoption
			text="<b>DAZN jährlich + € 12,50 mtl. </b>oder<b> <br/> DAZN monatlich + € 14,99 mtl.</b>"
			image="/images/external/dazn.svg"
		/>
		<Zubuchoption
			text="<b>Multiscreen + € 10 mtl. <br/></b>Inkl. Sky Go Plus für 3 mobile Geräte,<br/> 2. Sky Q Receiver für einmalig € 49 oder 1 Sky Q Mini für einmalig € 29 (zur Leihe)"
			image="/images/square_packages/multiscreen.png"
		/>
		<Zubuchoption text="<b>Sky Kids +  € 5 mtl.</b>" image="/images/square_packages/kids.png" />
		<Zubuchoption
			text="<b>trendSports + € 5,99 mtl.</b>"
			image="/images/external/trendsports.png"
		/>
		<Zubuchoption
			text="<b>18+ für Blue Movie € 0</b><br/> einmalige Versandpauschale 18+ PIN"
			image="/images/external/18_plus.png"
		/>
		<Zubuchoption
			text="<b>Netflix Standard-Abo, HD/2 Streams + € 5 mtl.</b> oder <br/> <b>Netflix Premium-Abo, UHD/4 Streams + € 10 mtl.</b>"
			image="/images/badges/NetflixSDHD.png"
		/>
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
