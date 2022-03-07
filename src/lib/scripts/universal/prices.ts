import type { package_name } from '$lib/scripts/universal/packages';

export interface PackagePrice {
	monat: number;
	jahr: number;
}

const package_prices: Record<package_name, PackagePrice> = {
	entertainment: { jahr: 14.5, monat: 17 },
	entertainmentplus: { jahr: 20, monat: 25 },
	cinema: { jahr: 10, monat: 12.5 },
	sport: { jahr: 5.5, monat: 8 },
	bundesliga: { jahr: 12.5, monat: 15 }
};

const base_packages: ReadonlyArray<package_name> = ['entertainment', 'entertainmentplus'];
const premiumpackages: ReadonlyArray<package_name> = ['cinema', 'sport', 'bundesliga'];

base_packages.forEach((v) => {
	package_prices[v];
});
premiumpackages.forEach((v) => {
	package_prices[v].jahr;
});

function sum(values: Array<number>): number {
	let total = 0;
	values.forEach((v) => (total += v));
	return total;
}

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

export function get_price(packages: Array<package_name>): PackagePrice {
	return {
		jahr: sum(packages.map((v) => package_prices[v].jahr)) * factor_jahr,
		monat: sum(packages.map((v) => package_prices[v].monat)) * factor_monat
	};
}
export function get_price_string(
	packages: Array<package_name>,
	subscription_time: keyof PackagePrice
): string {
	const price = get_price(packages);
	return to_price_string(price[subscription_time]);
}

//https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
function intersect(a: ReadonlyArray<unknown>, b: ReadonlyArray<unknown>): Array<unknown> {
	const setA = new Set(a);
	const setB = new Set(b);
	const intersection = new Set([...setA].filter((x) => setB.has(x)));
	return Array.from(intersection);
}

export function get_offer_note(packages: ReadonlyArray<package_name>): string {
	const intersection = intersect(packages, premiumpackages);
	if (intersection.length >= 2) {
		return '+ Samsung Tab A8';
	}
	return '';
}
