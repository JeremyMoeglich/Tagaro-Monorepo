import { index_by_id } from './asset_types';
import { packages_assets } from './assets/packages';
import { zubuchoptionen_assets } from './assets/zubuchoptionen';
import type { Priceable_Asset } from './priceable_asset_types';

export const priceable_assets: ReadonlyArray<Priceable_Asset> = [
	...packages_assets,
	...zubuchoptionen_assets
];
export const indexed_priceable_assets = index_by_id(priceable_assets);
