<script lang="ts">
	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import { package_combinations } from 'asset_library/assets/packages';
	import Zubuchoption from '../templates/element/zubuchoption.svelte';
	import AktivierungSentence from './aktivierung_sentence.svelte';
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';

	export let simple = false;
</script>

<div class="main_container" style:background-color={simple ? 'transparent' : '#f2f2f2'}>
	<h2 class="title gradient_text">Pakete & Preise in der Übersicht</h2>
	<div class="table_outer">
		<table>
			{#each package_combinations as row}
				<tr>
					{#each row as element}
						<td>
							<img src={make_url(`/images/assets/packages/square/${element}.webp`, dev)} alt="" />
						</td>
					{/each}
					{#if row.length < 4}
						<td colspan={4 - row.length} />
					{/if}
					<td class="text_cell">
						<p>
							<b>
								{#if get_offer_note(row)}
									<mark class="nowrap">{get_offer_note(row)}</mark> <br />
								{/if}
								{get_price_string(row, 'jahr')}&nbsp;mtl.*
							</b>
						</p>
						<p class="small">
							im Jahres-Abo danach {get_price_string(row, 'monat')}&nbsp;mtl.* im Monats-Abo
						</p>
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<AktivierungSentence always_show={false} />
	<div class="spacer" />
	<h2 class="title gradient_text">Zubuchoptionen</h2>
	<div class="zubuchoptionen" id="zubuchoptionen">
		<Zubuchoption image="/images/assets/zubuchoptionen/uhd.png">
			<b>UHD + {get_price_string(['uhd'], 'jahr')} mtl. (für Sat oder Kabel-Empfang)</b>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/dazn.svg">
			<b>DAZN jährlich + {get_price_string(['dazn_yearly'], 'jahr')} mtl. </b>oder<b>
				<br /> DAZN monatlich + {get_price_string(['dazn_monthly'], 'monat')} mtl.</b
			>
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/multiscreen.png">
			<b>Multiscreen + {get_price_string(['multiscreen'], 'jahr')} mtl. <br /></b> Inkl. Sky Go Plus
			für 3 mobile Geräte, 2. Sky Q Receiver für einmalig € 49, 1-2 Sky Q Mini für je einmalig € 29 (zur
			Leihe oder OHNE zusätzliche Hardware)
		</Zubuchoption>
		<Zubuchoption image="/images/assets/zubuchoptionen/NetflixSDHD.png">
			<b
				>Netflix Standard-Abo, HD/2 Streams + {get_price_string(['netflixstandard'], 'jahr')} mtl.</b
			>
			oder <br />
			<b>Netflix Premium-Abo, UHD/4 Streams + {get_price_string(['netflixpremium'], 'jahr')} mtl.</b
			>
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
	</div>
</div>

<style lang="scss">
	.small {
		font-size: 15px;
		line-height: 19px;
	}
	.main_container {
		display: flex;
		padding-top: 50px;
		padding-bottom: 50px;
		flex-direction: column;
		align-items: center;
	}
	.spacer {
		height: 80px;
	}
	.zubuchoptionen {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 50px;
	}
	:global(.zubuchoptionen > *) {
		width: 50%;
	}
	.nowrap {
		white-space: nowrap;
	}
	.title {
		text-align: center;
		font-size: 1.875rem;
		font-weight: bold;
		margin-bottom: 20px;
	}
	img {
		width: min(100%, 100px);
		padding: 5px;
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
		padding: 20px;
	}
	.table_outer {
		border: 1px solid rgb(201, 201, 201);
		border-radius: 0.75rem;
		overflow: hidden;
		box-shadow: 0px 15px 40px rgb(206, 206, 206);
	}
</style>
