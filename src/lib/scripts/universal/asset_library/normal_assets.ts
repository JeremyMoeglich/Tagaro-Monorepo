import { packages_assets } from './assets/packages';
import type { package_id } from './assets/packages';
import { indexed_priceable_assets } from './priceable_asset';

export type normal_package_id = package_id | 'kids';
export const normal_package_ids = [...packages_assets, indexed_priceable_assets.kids] as const;