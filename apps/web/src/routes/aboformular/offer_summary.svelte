<script lang="ts">
	import type { priceable_asset_id } from 'asset_library/asset_types';
	import type { category_id } from 'asset_library/categories';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';

	import { get_price_string } from 'asset_library/prices';
	import { enter_filter } from 'utils';

	export let pages: Array<Partial<Record<category_id, boolean>>>;
	export let current_page: number;
	export let selected_priceable_assets: ReadonlyArray<priceable_asset_id>;
	export let verbose: boolean;

	function page_back() {
		current_page--;
	}

	function page_continue() {
		if (Object.values(pages[current_page]).reduce((a, b) => a && b)) {
			current_page++;
			verbose = false;
		} else {
			verbose = true;
			const id = Object.keys(pages[current_page]).find((key) => !pages[current_page][key]);
			document.getElementById(id).scrollIntoView();
		}
	}
</script>

<div class="alignment">
	<div class="left">
		{#if current_page > 0}<div>
				<div on:click={page_back} on:keypress={enter_filter(page_back)} class="back">
					<p>Zurück</p>
				</div>
			</div>{/if}
		<div class="prices">
			Total: {get_price_string(selected_priceable_assets, 'jahr')} mtl.
			<br />
			Nach Verlängerung: {get_price_string(selected_priceable_assets, 'monat')} mtl.
		</div>
		<div class="asset_images">
			{#each selected_priceable_assets as asset}
				<img
					src={indexed_priceable_assets[asset].image}
					alt={indexed_priceable_assets[asset].name}
				/>
			{/each}
		</div>
	</div>
	<div>
		<div on:click={page_continue} on:keypress={enter_filter(page_continue)} class="continue">
			<p>Weiter</p>
		</div>
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		padding: 20px 40px;
		background-color: rgb(255, 255, 255);
		width: 100vw;
		box-shadow: 0px -5px 20px -15px black;
		flex-wrap: wrap;
		max-height: 30vh;
		overflow-y: scroll;
	}
	.left {
		display: flex;
		gap: 30px;
		align-items: center;
		flex-direction: row;
	}
	.prices {
		font-size: larger;
	}
	.continue,
	.back {
		padding: 20px 20px;
		border-radius: 3px;
		background-color: blue;
		color: white;
		p {
			pointer-events: none;
			margin: 0px;
		}
		&:hover {
			background-color: rgb(93, 93, 255);
		}
	}
	.asset_images {
		display: flex;
		align-items: center;
		gap: 10px;
		img {
			width: 80px;
		}
		flex-wrap: wrap;
	}
</style>
