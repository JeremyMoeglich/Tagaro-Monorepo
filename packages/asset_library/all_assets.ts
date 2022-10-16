import { cable_receive_assets, receive_assets } from './assets/receive_type';
import type { Asset } from './asset_types';
import { priceable_assets } from './priceable_asset';
import { index_by } from 'functional-utilities';

export const assets: ReadonlyArray<Asset> = [
	...priceable_assets,
	...receive_assets,
	...cable_receive_assets
];
export const indexed_assets = index_by(assets, 'id');
