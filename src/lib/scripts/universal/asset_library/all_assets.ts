import { cable_receive_assets, receive_assets } from './assets/receive_type';
import { index_by_id } from './asset_types';
import type { Asset } from './asset_types';
import { priceable_assets } from './priceable_asset';

export const assets: ReadonlyArray<Asset> = [
	...priceable_assets,
	...receive_assets,
	...cable_receive_assets
];
export const indexed_assets = index_by_id(assets);
