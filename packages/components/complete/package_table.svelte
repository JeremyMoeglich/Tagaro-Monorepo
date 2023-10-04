<script lang="ts">
	import {
		get_offer_note,
		get_offer_price,
		get_price_string,
		to_price_string
	} from 'asset_library/prices';
	import {
		max_combination_length,
		base_premium_package_combinations,
		type package_id,
		showcased_combinations,
		indexed_package_assets
	} from 'asset_library/assets/packages';
	import Zubuchoptionen from './zubuchoptionen.svelte';
	//import AktivierungSentence from './aktivierung_sentence.svelte';
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';
	import { typed_entries } from 'functional-utilities';
	import { empty_offer } from 'asset_library/offer_description';

	const col_amount = max_combination_length + 1;

	function sorted(arr: readonly unknown[]): unknown[] {
		return [...arr].sort();
	}

	function is_combination(packages1: readonly package_id[], packages2: readonly package_id[]) {
		const s1 = sorted(packages1).join(',');
		const s2 = sorted(packages2).join(',');
		return s1 === s2;
	}

	const rows: (string | readonly package_id[])[] = typed_entries(
		base_premium_package_combinations
	).flatMap(([base, { title, combinations }]) => [
		title,
		...combinations
			.map((combination) => [base, ...combination])
			.filter((c) => showcased_combinations.some((p) => is_combination(c, p)))
	]);

	// let tables: Record<string, readonly (readonly package_id[])[]>;
	// $: tables = typed_from_entries(
	// 	typed_entries(base_premium_package_combinations).map(([base, { title, combinations }]) => {
	// 		[title, combinations.map((combination) => [base, ...combination])];
	// 	})
	// );
</script>

<div class="alignment">
	<!-- <h2 class="title ">Pakete & Preise in der Übersicht</h2> -->
	<div class="grid shadow-lg" style:--col_amount={col_amount}>
		{#each rows as row, row_index}
			{#if typeof row === 'string'}
				<div style:--row={row_index + 1} class="title_row">
					<h3 class="gray">{@html row}</h3>
				</div>
			{:else}
				{#each row as element, col_index}
					<div style:--col={col_index + 1} style:--row={row_index + 1} class="cell">
						<img src={make_url(indexed_package_assets[element].image.square, dev)} alt="" />
					</div>
				{/each}
				<div class="cell text-cell" style:--row={row_index + 1} style:--col={col_amount}>
					<div class="text-cell-inner">
						<p style="line-height: 23px;">
							<b>
								{#if get_offer_note(row)}
									<mark class="nowrap">{@html get_offer_note(row)}</mark>
									<br />
								{/if}

								{@html get_price_string(row, 'jahr')}&nbsp;mtl.*
							</b>
						</p>
						<p class="small">
							statt: {@html to_price_string(get_offer_price(empty_offer, row).jahr, true)} mtl. <br />
							(im Jahres-Abo, danach {@html get_price_string(row, 'monat')}&nbsp;mtl. im Monats-Abo)
						</p>
					</div>
				</div>
				<div class="background_box" style:--row={row_index + 1} />
			{/if}
		{/each}
	</div>
	<!-- <AktivierungSentence always_show={false} /> -->
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
	.title_row:nth-child(1) {
		margin: 0px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(var(--col_amount), 1fr);
		padding: 1rem;
		row-gap: 1rem;
		border: 1px solid #ccc;
		border-radius: 15px;
		width: 100%;
	}
	.background_box {
		grid-column: 1 / var(--col_amount);
		grid-row: var(--row);
		//border: 1px solid #ccc;
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
		padding: 0px;
		padding-left: 1rem;
		//border: 1px solid #ccc;
	}
	.text-cell-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: rgb(226, 242, 255);
		border-radius: 10px;
		width: 100%;
		height: 100%;
		padding-left: 5px;
		padding-right: 5px;
	}
	.title_row {
		grid-column: 1 / calc(var(--col_amount) + 1);
		grid-row: var(--row);
		margin: 0px;
		margin-top: 20px;
		text-align: center;
	}
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
		width: 100%;
	}
	h3 {
		font-size: 17px;
		margin: 0px;
	}
	.small {
		font-size: 13px;
		margin-top: 4px;
		line-height: 19px;
	}
</style>
