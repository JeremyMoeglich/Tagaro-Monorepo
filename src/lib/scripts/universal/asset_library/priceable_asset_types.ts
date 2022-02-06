import type { selector } from './selector';
import type { Asset, priceable_asset_id } from './asset_types';

export interface Price {
	monat: number;
	jahr: number;
}

export interface Priceable_Asset<T extends priceable_asset_id = priceable_asset_id>
	extends Asset<T> {
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
		selector: asset.selector ? asset.selector : { type: 'OR', descriptor: [] },
		price:
			typeof asset.price === 'number' ? { jahr: asset.price, monat: asset.price } : asset.price,
		note: asset.note,
		image: asset.image
	};
}
export function dynamic_to_static_assets<T extends priceable_asset_id>(
	assets: ReadonlyArray<Dynamic_Priceable_Asset<T>>
): ReadonlyArray<Priceable_Asset<T>> {
	return assets.map(dynamic_to_static_asset);
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
