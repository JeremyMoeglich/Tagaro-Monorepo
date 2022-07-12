import { dynamic_to_static_assets } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';
import { index_by } from 'functional-utilities';

export const package_ids = [
	'entertainment',
	'entertainmentplus',
	'sport',
	'cinema',
	'bundesliga'
] as const;

export type package_id = typeof package_ids[number];

const packages_image_location = '/images/assets/packages/square/';

export const packages_assets: ReadonlyArray<Priceable_Asset<package_id>> = dynamic_to_static_assets(
	[
		{
			id: 'entertainment',
			price: { jahr: 14.5, monat: 17, singular: 0 },
			name: 'Entertainment',
			note: '[TODO]',
			image: `${packages_image_location}entertainment.webp`
		},
		{
			id: 'entertainmentplus',
			price: { jahr: 20, monat: 25, singular: 0 },
			name: 'Entertainment Plus',
			note: '[TODO]',
			image: `${packages_image_location}entertainmentplus.webp`
		},
		{
			id: 'cinema',
			price: { jahr: 10, monat: 12.5, singular: 0 },
			name: 'Cinema',
			note: '[TODO]',
			image: `${packages_image_location}cinema.webp`
		},
		{
			id: 'sport',
			price: { jahr: 5.5, monat: 8, singular: 0 },
			name: 'Sport',
			note: '[TODO]',
			image: `${packages_image_location}sport.webp`
		},
		{
			id: 'bundesliga',
			price: { jahr: 12.5, monat: 15, singular: 0 },
			name: 'Bundesliga',
			note: '[TODO]',
			image: `${packages_image_location}bundesliga.webp`
		}
	]
);

export const package_combinations: ReadonlyArray<ReadonlyArray<package_id>> = [
	['entertainment'],
	['entertainmentplus'],
	['entertainment', 'cinema'],
	['entertainmentplus', 'cinema'],
	['entertainment', 'sport'],
	['entertainmentplus', 'sport'],
	['entertainment', 'bundesliga'],
	['entertainmentplus', 'bundesliga'],
	['entertainment', 'cinema', 'sport'],
	['entertainmentplus', 'cinema', 'sport'],
	['entertainment', 'cinema', 'bundesliga'],
	['entertainmentplus', 'cinema', 'bundesliga'],
	['entertainment', 'sport', 'bundesliga'],
	['entertainmentplus', 'sport', 'bundesliga'],
	['entertainment', 'sport', 'bundesliga', 'cinema'],
	['entertainmentplus', 'sport', 'bundesliga', 'cinema']
] as const;

export const indexed_package_assets = index_by(packages_assets, 'id');
