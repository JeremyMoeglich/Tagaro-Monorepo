import type { selector } from './selector';
import type { Asset, priceable_asset_id } from './asset_types';
import { index_by_id } from './asset_types';
import { packages_assets } from './assets/packages';
import { zubuchoptionen_assets } from './assets/zubuchoptionen';
export interface Price {
	monat: number;
	jahr: number;
}

export interface Priceable_Asset<T extends priceable_asset_id> extends Asset<T> {
	price: Price;
	selector: selector;
}

export interface Dynamic_Priceable_Asset<T extends priceable_asset_id> extends Asset<T> {
	price: number | Price;
	selector?: selector;
}

export function dynamic_to_static_asset<T extends priceable_asset_id>(
	asset: Dynamic_Priceable_Asset<T>
): Priceable_Asset<T> {
	return {
		text: asset.text,
		id: asset.id,
		selector: asset.selector ? asset.selector : [],
		price: typeof asset.price === 'number' ? { jahr: asset.price, monat: asset.price } : asset.price
	};
}

export function priceable_asset_to_asset<T extends priceable_asset_id>(
	asset: Priceable_Asset<T>
): Asset<T> {
	return {
		id: asset.id,
		text: asset.text
	};
}

export function apply_to_price<T extends priceable_asset_id>(
	asset: Priceable_Asset<T>,
	timeframe: keyof Price | 'all',
	factor: number
): Priceable_Asset<T> {
	if (timeframe === 'all') {
		asset.price = Object.fromEntries(
			Object.entries(asset.price).map((key, value) => [key, value * factor])
		);
	} else {
		asset.price[timeframe] *= factor;
	}
	return asset;
}

export const priceable_assets: Array<Priceable_Asset<priceable_asset_id>> = [
	...packages_assets,
	...zubuchoptionen_assets
];
export const indexed_priceable_assets = index_by_id(priceable_assets);
