<script lang="ts">
	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import {
		max_combination_length,
		base_premium_package_combinations,
		type package_id
	} from 'asset_library/assets/packages';
	import Zubuchoptionen from './zubuchoptionen.svelte';
	//import AktivierungSentence from './aktivierung_sentence.svelte';
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';
	import { typed_entries } from 'functional-utilities';

	const col_amount = max_combination_length + 1;

	let rows: (string | readonly package_id[])[];
	$: rows = typed_entries(base_premium_package_combinations).flatMap(
		([base, { title, combinations }]) => [
			title,
			...combinations.map((combination) => [base, ...combination])
		]
	);

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
						<img src={make_url(`/images/assets/packages/square/${element}.webp`, dev)} alt="" />
					</div>
				{/each}
				<div class="cell text-cell" style:--row={row_index + 1} style:--col={col_amount}>
					<p>
						<b>
							{#if get_offer_note(row)}
								<mark class="nowrap">{@html get_offer_note(row)}</mark>
								<br />
							{/if}

							{@html get_price_string(row, 'jahr')}&nbsp;mtl.*
						</b>
					</p>
					<p class="small">
						im Jahres-Abo danach {@html get_price_string(row, 'monat')}&nbsp;mtl.* im Monats-Abo
					</p>
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

	$gap: 1rem;
	$col-gap: 1rem;
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--col_amount), 1fr);
		padding: 1rem;
		row-gap: 1rem;
		column-gap: $col-gap;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: rgb(226, 242, 255);
		border-radius: 10px;
		margin-left: 0px;
		margin-left: calc($gap - $col-gap);
		//border: 1px solid #ccc;
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
</style>
