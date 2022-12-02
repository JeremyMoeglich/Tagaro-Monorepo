import { cable_receive_assets, receive_assets } from './assets/receive_type';
import type { Asset, asset_id } from './asset_types';
import { priceable_assets } from './priceable_asset';
import { index_by } from 'functional-utilities';

export const assets: ReadonlyArray<Asset> = [
	...priceable_assets,
	...receive_assets,
	...cable_receive_assets
];
export const indexed_assets = index_by(assets, 'id');

export function sort_assets<T extends asset_id>(array: ReadonlyArray<T>): Array<T> {
	const assets = array.map((id) => indexed_assets[id]);
	assets.sort((a, b) => a.sort_priority - b.sort_priority);
	return assets.map((asset) => asset.id as T);
}
