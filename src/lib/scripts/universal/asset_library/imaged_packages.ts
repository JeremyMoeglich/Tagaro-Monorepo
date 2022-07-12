import { packages_assets } from './assets/packages';
import type { package_id } from './assets/packages';
import { indexed_priceable_assets } from './priceable_asset';

export type imaged_package_id = package_id | 'kids';
export const imaged_package_ids = [...packages_assets, indexed_priceable_assets.kids] as const;