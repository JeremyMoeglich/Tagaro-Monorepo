<script lang="ts">
	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import { package_combinations } from 'asset_library/assets/packages';
	import Zubuchoptionen from './zubuchoptionen.svelte';
	import AktivierungSentence from './aktivierung_sentence.svelte';
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';

	const max_combination = package_combinations.reduce((a, b) => {
		return a > b.length ? a : b.length;
	}, 0);
	const col_amount = max_combination + 1;

	const titles = {
		0: 'Wählbare Pakete mit Sky Entertainment - 12 Monate Laufzeit, danach monatlich kündbar',
		5: 'Wählbare Pakete mit Entertainment inklusive Netflix (Sky Ultimate TV) - 12 Mon. Laufzeit, danach monatlich kündbar'
	};

	let rows: (string | typeof package_combinations[number])[];
	$: rows = (() => {
		const sorted_titles: [number, string][] = Object.entries(titles)
			.map(([key, value]) => [parseInt(key), value] as [number, string])
			.sort((a, b) => a[0] - b[0]);
		const rows: (string | typeof package_combinations[number])[] = [];
		const remaining_combinations = [...package_combinations];
		let current_row = 0;
		while (remaining_combinations.length > 0) {
			if (sorted_titles.length === 0) {
				rows.push(remaining_combinations.shift());
				continue;
			}
			if (current_row === sorted_titles[0][0]) {
				rows.push(sorted_titles.shift()[1]);
			} else {
				rows.push(remaining_combinations.shift());
			}
			current_row++;
		}
		return rows;
	})();
</script>

<div>
	<!-- <h2 class="title gradient_text">Pakete & Preise in der Übersicht</h2> -->
	<div class="grid shadow-lg" style:--col_amount={col_amount}>
		{#each rows as row, row_index}
			{#if typeof row === 'string'}
				<div style:--row={row_index + 1} class="title_row">
					<h3>{row}</h3>
				</div>
			{:else}
				{#each row as element, col_index}
					<div style:--col={col_index + 1} style:--row={row_index + 1} class="cell">
						<img src={make_url(`/images/assets/packages/square/${element}.webp`, dev)} alt="" />
					</div>
				{/each}
				<div class="cell text-cell" style:--row={row_index + 1} style:--col={col_amount}>
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
				</div>
				<div class="background_box" style:--row={row_index + 1} />
			{/if}
		{/each}
	</div>
	<AktivierungSentence always_show={false} />
	<Zubuchoptionen />
</div>

<style lang="scss">
	.cell {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-column: var(--col);
		grid-row: var(--row);
		width: 100%;
		max-height: 150px;
		padding: min(calc(30% - 30px), 7px);
		z-index: 2;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--col_amount), 1fr);
		grid-template-rows: repeat(auto);
		padding: 1rem;
		grid-gap: 1rem;
		border: 1px solid #ccc;
		border-radius: 15px;
	}
	.background_box {
		grid-column: 1 / var(--col_amount);
		grid-row: var(--row);
		border: 1px solid #ccc;
		border-radius: 10px;
		z-index: 1;
		background: rgb(255, 255, 255);
		background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(236, 238, 238) 100%);
	}
	img {
		max-width: 100%;
		max-height: 100%;
		aspect-ratio: 1 / 1;
	}
	.text-cell {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: rgb(226, 242, 255);
		border-radius: 10px;
		border: 1px solid #ccc;
	}
	.title_row {
		grid-column: 1 / calc(var(--col_amount) + 1);
		grid-row: var(--row);
		font-size: large;
		margin: 0px;
		text-align: center;
	}
</style>
