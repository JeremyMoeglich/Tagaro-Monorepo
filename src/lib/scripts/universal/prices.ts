import { base_packages, premiumpackages } from '$lib/scripts/universal/packages';
import type { package_name } from '$lib/scripts/universal/packages';
import type { zubuchoption_id } from './zubuchoption_id';
import { zubuchoptionen_price } from './zubuchoptionen';
import { Dynamic_Priceable_Asset, Priceable_Asset } from './priceable_interface';
import type { Price } from './priceable_interface';

const packages: Record<package_name, Price> = {
	entertainment: { jahr: 14.5, monat: 17 },
	entertainmentplus: { jahr: 20, monat: 25 },
	cinema: { jahr: 10, monat: 12.5 },
	sport: { jahr: 5.5, monat: 8 },
	bundesliga: { jahr: 12.5, monat: 15 }
};

base_packages.forEach((v) => {
	package_prices[v];
});
premiumpackages.forEach((v) => {
	package_prices[v].jahr /= 2;
});

function sum(values: Array<number>): number {
	let total = 0;
	values.forEach((v) => (total += v));
	return total;
}

const factor_jahr = 1;
const factor_monat = 1;

export const aktivierung = 29;
export const aktivierung_string = `€ ${aktivierung.toFixed(2).replace('.', ',')}`;

export const bonus = 20;
export const bonus_string = `€ ${bonus.toFixed(2).replace('.', ',')}`;

export type priceable = package_name | zubuchoption_id;
const price_table: Record<priceable, Price> = {
	...package_prices,
	...Object.fromEntries(
		Object.entries(zubuchoptionen_price).map(([key, value]) => [key, { jahr: value, monat: value }])
	)
};

export function get_price(assets: Array<priceable>): Price {
	return {
		jahr: sum(assets.map((v) => price_table[v].jahr)) * factor_jahr,
		monat: sum(assets.map((v) => price_table[v].monat)) * factor_monat
	};
}
export function get_price_string(assets: Array<priceable>, subscription_time: keyof Price): string {
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

export function get_offer_note(packages: Array<package_name>): string {
	if (intersect(packages, premiumpackages).length > 0) {
		return 'Januar Sale 50%';
	}
}
