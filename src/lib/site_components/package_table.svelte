<script>
	import Zubuchoption from '$lib/layout_components/zubuchoption.svelte';
</script>

<div class="main_container">
	<h2 class="title">Pakete & Preise in der Übersicht</h2>
	<table>
		<tr>
			<td colspan="4" />
			<td class="text_cell hd_entertainment">
				<div class="inner">
					<p>Alle Angebote inklusive Entertainment und HD</p>
					<img class="hd_logo" src="/images/specific/hd_logo.png" alt="" />
				</div>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td colspan="3" />
			<td class="text_cell">
				<p><b>Monat 1-12 nur<br />€ 12,50 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_cinema.png" alt="" /> </td>
			<td colspan="2" />
			<td class="text_cell">
				<p><b>Monat 1-12 nur<br />€ 22,50 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_sport.png" alt="" /> </td>
			<td colspan="2" />
			<td class="text_cell">
				<p><b>Monat 1-12 nur<br />€ 17,50 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_bundesliga.png" alt="" /> </td>
			<td colspan="2" />
			<td class="text_cell"
				><p><b>Monat 1-12 nur<br />€ 25,00 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>

			<td />
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_cinema.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_sport.png" alt="" /> </td>
			<td />
			<td class="text_cell"
				><p><b>Monat 1-12 nur<br />€ 27,50 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_cinema.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_bundesliga.png" alt="" /> </td>
			<td />
			<td class="text_cell"
				><p><b>Monat 1-12 nur<br />€ 35,00 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_sport.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_bundesliga.png" alt="" /> </td>
			<td />
			<td class="text_cell"
				><p><b>Monat 1-12 nur<br />€ 30,00 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
		<tr>
			<td> <img src="/images/square_packages/sky_entertainment.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_cinema.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_bundesliga.png" alt="" /> </td>
			<td> <img src="/images/square_packages/sky_sport.png" alt="" /> </td>
			<td class="text_cell"
				><p><b>Monat 1-12 nur<br />€ 40,00 mtl. </b></p>
				<p>12-Monats-Abo <br /> Danach mtl. kündbar</p>
			</td>
		</tr>
	</table>
	<div class="zubuchoptionen" id="zubuchoptionen">
		<h2 class="title">Zubuchoptionen</h2>
		<Zubuchoption
			text="<b>UHD + € 5,00 mtl. (für Sat oder Kabel-Empfang)</b>"
			image="/images/square_packages/sky_uhd.png"
		/>
		<Zubuchoption
			text="<b>DAZN jährlich + € 12,50 mtl. </b>oder<b> <br/> DAZN monatlich + € 14,99 mtl.</b>"
			image="/images/external/dazn.svg"
		/>
		<Zubuchoption
			text="<b>Multiscreen + € 10,00 mtl. <br/></b>Inkl. Sky Go Plus für 3 mobile Geräte,<br/> 2. Sky Q Receiver für einmalig € 49 oder 1 Sky Q Mini für einmalig € 29 (zur Leihe)"
			image="/images/square_packages/sky_multiscreen.png"
		/>
		<Zubuchoption
			text="<b>Sky Kids +  € 5,00 mtl.</b>"
			image="/images/square_packages/sky_kids.png"
		/>
		<Zubuchoption
			text="<b>trendSports + € 5,99 mtl.</b>"
			image="/images/external/trendsports.png"
		/>
		<Zubuchoption
			text="<b>18+ für Blue Movie € 0</b><br/> einmalige Versandpauschale 18+ PIN"
			image="/images/external/18_plus.png"
		/>
	</div>
</div>

<style lang="scss">
	@import '../shared/style/mixins.scss';

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
	.hd_logo {
		width: 11vw;
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
	.hd_entertainment {
		.inner {
			margin-left: auto;
		}
		img {
			min-width: min(100%, 150px);
		}
	}
</style>
