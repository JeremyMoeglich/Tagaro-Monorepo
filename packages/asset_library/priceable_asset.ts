import { packages_assets } from './assets/packages';
import { zubuchoptionen_assets } from './assets/zubuchoptionen';
import type { Priceable_Asset } from './priceable_asset_types';
import { index_by } from 'functional-utilities';

export const priceable_assets: ReadonlyArray<Priceable_Asset> = [
	...packages_assets,
	...zubuchoptionen_assets
];
export const indexed_priceable_assets = index_by(priceable_assets, 'id');
