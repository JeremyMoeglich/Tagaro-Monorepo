import { package_ids } from './assets/packages';

export const imaged_package_ids = [...package_ids, 'kids'] as const;
export type imaged_package_id = typeof imaged_package_ids[number];
