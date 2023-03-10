import type { Selector } from './selector';
import type { Asset, priceable_asset_id } from './asset_types';
import type { Sender } from './sender';
export interface Price {
	singular: number;
	monat: number;
	jahr: number;
}

export interface Priceable_Asset<T extends priceable_asset_id = priceable_asset_id>
	extends Asset<T> {
	price: Price;
	selector: Selector;
	senders: readonly Sender[];
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
