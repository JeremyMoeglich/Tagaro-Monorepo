import type { selector } from './selector';
import type { asset_id, priceable_asset_id } from './asset_ids';
import { packages } from './assets/packages';
import { zubuchoptionen } from './assets/zubuchoptionen';
export interface Price {
	monat: number;
	jahr: number;
}

export interface Asset<T extends asset_id> {
	id: T;
	text: string;
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

export function index_by<T extends priceable_asset_id, K extends keyof Priceable_Asset<T>>(
	assets: Array<Priceable_Asset<T>>,
	key: K
): Record<K, Priceable_Asset<T>> {
	return Object.fromEntries(
		assets.map((asset) => {
			return [asset[key], asset];
		})
	);
}

export const priceable_assets: Array<Priceable_Asset<priceable_asset_id>> = [...packages, ...zubuchoptionen]