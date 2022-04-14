import { index_by_id } from '../asset_types';
import { apply_to_price, dynamic_to_static_assets } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';

enum package_id_enum {
	entertainment,
	entertainmentplus,
	cinema,
	sport,
	bundesliga
}

export type package_id = keyof typeof package_id_enum;

const packages_image_location = '/images/assets/packages/square/';

export const packages_assets: ReadonlyArray<Priceable_Asset<package_id>> = dynamic_to_static_assets(
	[
		{
			id: 'entertainment',
			price: { jahr: 14.5, monat: 17, singular: 0 },
			name: 'Entertainment',
			note: '[TODO]',
			image: `${packages_image_location}entertainment.png`
		},
		{
			id: 'entertainmentplus',
			price: { jahr: 20, monat: 25, singular: 0 },
			name: 'Entertainment Plus',
			note: '[TODO]',
			image: `${packages_image_location}entertainmentplus.png`
		},
		{
			id: 'cinema',
			price: { jahr: 10, monat: 12.5, singular: 0 },
			name: 'Cinema',
			note: '[TODO]',
			image: `${packages_image_location}cinema.png`
		},
		{
			id: 'sport',
			price: { jahr: 5.5, monat: 8, singular: 0 },
			name: 'Sport',
			note: '[TODO]',
			image: `${packages_image_location}sport.png`
		},
		{
			id: 'bundesliga',
			price: { jahr: 12.5, monat: 15, singular: 0 },
			name: 'Bundesliga',
			note: '[TODO]',
			image: `${packages_image_location}bundesliga.png`
		}
	]
);

export const base_packages: ReadonlyArray<package_id> = [
	'entertainment',
	'entertainmentplus'
] as const;

export const premiumpackages: ReadonlyArray<package_id> = [
	'cinema',
	'sport',
	'bundesliga'
] as const;

packages_assets.map((v) => {
	if (premiumpackages.includes(v.id)) {
		v = apply_to_price(v, 'jahr', 1);
	}
	return v;
});

export const indexed_package_assets = index_by_id<package_id, Priceable_Asset<package_id>>(
	packages_assets
);
