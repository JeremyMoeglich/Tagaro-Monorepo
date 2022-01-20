import { base_packages, premiumpackages } from '$lib/scripts/universal/assets/packages';
import type { package_id } from '$lib/scripts/universal/assets/packages';
import { Priceable_Asset, priceable_assets, index_by } from './priceable_asset';
import type { Price } from './priceable_asset';
import type { priceable_asset_id } from './asset_ids';
import { map_object, sum } from './util';

const factor_jahr = 1;
const factor_monat = 1;

export const aktivierung = 29;
export const aktivierung_string = `€ ${aktivierung.toFixed(2).replace('.', ',')}`;

export const bonus = 20;
export const bonus_string = `€ ${bonus.toFixed(2).replace('.', ',')}`;


const price_table = map_object(index_by(priceable_assets, 'id'), (key: priceable_asset_id, value: Priceable_Asset<priceable_asset_id>) => ({
	key: key,
	value: value.price
}));

export function get_price(assets: Array<priceable_asset_id>): Price {
	return {
		jahr: sum(assets.map((v) => price_table[v].jahr)) * factor_jahr,
		monat: sum(assets.map((v) => price_table[v].monat)) * factor_monat
	};
}
export function get_price_string(
	assets: Array<priceable_asset_id>,
	subscription_time: keyof Price
): string {
	const price = get_price(assets);
	return '€ ' + price[subscription_time].toFixed(2).replace('.', ',');
}

//https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
function intersect(a: Array<unknown>, b: Array<unknown>): Array<unknown> {
	const setA = new Set(a);
	const setB = new Set(b);
	const intersection = new Set([...setA].filter((x) => setB.has(x)));
	return Array.from(intersection);
}

export function get_offer_note(packages: Array<package_id>): string {
	if (intersect(packages, premiumpackages).length > 0) {
		return 'Januar Sale 50%';
	}
}
