import { index_by_id } from '../asset_types';
import { dynamic_to_static_asset, apply_to_price } from '../priceable_asset';
import type { Dynamic_Priceable_Asset } from '../priceable_asset';

enum package_id_enum {
	entertainment,
	entertainmentplus,
	cinema,
	sport,
	bundesliga
}

export type package_id = keyof typeof package_id_enum;

export const packages_assets = (() => {
	const dynamic_packages: Array<Dynamic_Priceable_Asset<package_id>> = [
		{
			id: 'entertainment',
			price: { jahr: 14.5, monat: 17 },
			text: 'Entertainment',
			note: '[TODO]'
		},
		{
			id: 'entertainmentplus',
			price: { jahr: 20, monat: 25 },
			text: 'Entertainment-Plus',
			note: '[TODO]'
		},
		{
			id: 'cinema',
			price: { jahr: 10, monat: 12.5 },
			text: 'Cinema',
			note: '[TODO]'
		},
		{
			id: 'sport',
			price: { jahr: 5.5, monat: 8 },
			text: 'Sport',
			note: '[TODO]'
		},
		{
			id: 'bundesliga',
			price: { jahr: 12.5, monat: 15 },
			text: 'Bundesliga',
			note: '[TODO]'
		}
	];
	return dynamic_packages.map(dynamic_to_static_asset);
})();

export const base_packages: Array<package_id> = ['entertainment', 'entertainmentplus'];
export const premiumpackages: Array<package_id> = ['cinema', 'sport', 'bundesliga'];

packages_assets.map((v) => {
	if (premiumpackages.includes(v.id)) {
		v = apply_to_price(v, 'jahr', 0.5);
	}
	return v;
});

export const indexed_package_assets = index_by_id(packages_assets);
