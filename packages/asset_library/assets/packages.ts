import { dynamic_to_static_assets } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';
import { index_by, typed_entries } from 'functional-utilities';
import type { base_package_set, premium_package_set } from '../offer_description';
import { clone } from 'lodash-es';

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

const sort_priorities: Record<package_id, number> = {
	entertainment: 0,
	entertainmentplus: 0,
	sport: 1,
	bundesliga: 2,
	cinema: 3
};

function sort_ids(ids: ReadonlyArray<package_id>): ReadonlyArray<package_id> {
	const cloned = clone(ids) as package_id[];
	return cloned.sort((a, b) => sort_priorities[a] - sort_priorities[b]);
}

const premium_combinations: ReadonlyArray<readonly premium_package_set[]> = [
	['sport'],
	['cinema'],
	['bundesliga'],
	['sport', 'bundesliga'],
	['cinema', 'sport'],
	['cinema', 'bundesliga'],
	['sport', 'bundesliga', 'cinema']
] as const;

export const base_premium_package_combinations: Readonly<
	Record<
		base_package_set,
		{
			combinations: ReadonlyArray<readonly premium_package_set[]>;
			title: string;
		}
	>
> = {
	entertainment: {
		title: 'Wählbare Pakete mit Sky Entertainment - 12 Monate Laufzeit, danach monatlich kündbar',
		combinations: [[], ...premium_combinations]
	},
	entertainmentplus: {
		title:
			'Wählbare Pakete mit Entertainment inklusive Netflix (Sky Ultimate TV)<br>12 Monate Laufzeit, danach monatlich kündbar',
		combinations: [[], ...premium_combinations]
	}
} as const;

export const package_combinations: ReadonlyArray<readonly package_id[]> = typed_entries(
	base_premium_package_combinations
)
	.flatMap(([base_package, { combinations }]) =>
		combinations.map((premium_packages) => [base_package, ...premium_packages])
	)
	.map((packages) => sort_ids(packages));

export const indexed_package_assets = index_by(packages_assets, 'id');

export const max_combination_length = Math.max(
	...package_combinations.map((combination) => combination.length)
);
