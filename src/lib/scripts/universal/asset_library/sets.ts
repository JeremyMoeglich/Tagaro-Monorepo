import { typed_from_entries } from 'functional-utilities';
import { packages_assets } from './assets/packages';
import type { package_id } from './assets/packages';

import type { offer_set } from './offer_description';

export const asset_sets: Record<offer_set, ReadonlyArray<package_id>> = {
	all: packages_assets.map((v) => v.id),
	base: ['entertainment', 'entertainmentplus'],
	premium: ['cinema', 'sport', 'bundesliga'],
	...typed_from_entries(packages_assets.map((v) => [v.id, [v.id]]))
} as const;
