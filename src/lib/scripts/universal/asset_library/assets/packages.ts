import { dynamic_to_static_assets } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';
import { index_by } from 'functional-utilities';

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

export const indexed_package_assets = index_by(packages_assets, 'id');
