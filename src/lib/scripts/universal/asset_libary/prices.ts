import { premiumpackages } from '$lib/scripts/universal/asset_libary/assets/packages';
import type { package_id } from '$lib/scripts/universal/asset_libary/assets/packages';
import { indexed_priceable_assets } from './priceable_asset';
import type { Price } from './priceable_asset_types';
import type { priceable_asset_id } from './asset_types';
import { map_object, sum } from '../util';

const factor_jahr = 1;
const factor_monat = 1;

function to_price_string(v: number): string {
	let str = '€ ' + v.toFixed(2).replace('.', ',');
	if (str.endsWith(',00')) {
		str = str.slice(0, -3);
	}
	return str;
}

export const aktivierung = 29;
export const aktivierung_string = to_price_string(aktivierung);

export const bonus = 20;
export const bonus_string = to_price_string(bonus);

const price_table = map_object(indexed_priceable_assets, (key, value) => ({
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
	return to_price_string(get_price(assets)[subscription_time]);
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
