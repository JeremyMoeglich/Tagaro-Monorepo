import type { package_id } from '$lib/scripts/universal/asset_library/assets/packages';
import { indexed_priceable_assets } from './priceable_asset';
import type { Price } from './priceable_asset_types';
import type { priceable_asset_id } from './asset_types';
import { map_entries, typed_entries, typed_from_entries } from 'functional-utilities';
import {
	cloneDeep,
	intersection as intersect,
	isEqual,
	minBy,
	sortBy,
	sum
} from 'lodash-es';
import { empty_offer, indexed_offers, offer_applicable, offer_ids } from './offer_description';
import type { offer_id, offer_description_type } from './offer_description';
import { asset_sets } from './sets';

function to_price_string(v: number): string {
	let str = '€ ' + v.toFixed(2).replace('.', ',');
	if (str.endsWith(',00')) {
		str = str.slice(0, -3);
	}
	return str;
}

export const aktivierung = 0;
export const aktivierung_string = to_price_string(aktivierung);

export const bonus = 20 as number;
export const bonus_string = to_price_string(bonus);

const price_table = map_entries(indexed_priceable_assets, ([key, value]) => [key, value.price]);

export function get_offer_price(
	offer: offer_description_type,
	assets: ReadonlyArray<priceable_asset_id>
): Price | undefined {
	const current_price_table = cloneDeep(price_table);

	for (const overwrite of offer.overwrites) {
		if (isEqual(sortBy(overwrite[0]), sortBy(assets))) {
			const price = get_offer_price(empty_offer, assets);
			for (const [timeframe, value] of typed_entries(overwrite[1])) {
				price[timeframe] = value;
			}
			return price;
		}
	}

	offer.actions.forEach((action) => {
		const set = asset_sets[action.set];
		const intersection = intersect(assets, set);
		intersection.forEach((asset_id) => {
			const operation = action.absolute
				? (a: number, b: number) => a + b
				: (a: number, b: number) => a * b;
			current_price_table[asset_id] = typed_from_entries(
				typed_entries(current_price_table[asset_id]).map(([key, value]) => [
					key,
					key === 'jahr' ? operation(action.value[key], value as number) : value
				])
			);
		});
	});

	return typed_from_entries(
		(['singular', 'monat', 'jahr'] as const).map((key) => [
			key,
			sum(assets.map((asset_id) => current_price_table[asset_id][key]))
		])
	);
}

function chose_offer(assets: ReadonlyArray<priceable_asset_id>): offer_id | undefined {
	const offers = offer_ids.filter((offer_id) => offer_applicable(offer_id, assets));
	if (offers.length === 0) {
		return undefined;
	}
	const prices = offers.map(
		(offer_id) =>
			[
				offer_id,
				get_offer_price(offer_id ? indexed_offers[offer_id] : empty_offer, assets)
			] as const
	);
	return minBy(prices, ([, price]) => price.jahr)[0];
}

export function get_price(assets: ReadonlyArray<priceable_asset_id>): Price {
	const chosen_offer = chose_offer(assets);
	const offer = chosen_offer ? indexed_offers[chosen_offer] : empty_offer;
	const offer_price = get_offer_price(offer, assets);
	if (offer_price === undefined) {
		throw new Error('Internal Error, chose invalid offer');
	} else {
		return offer_price;
	}
}

export function get_price_string(
	assets: ReadonlyArray<priceable_asset_id>,
	subscription_time: keyof Price
): string {
	return to_price_string(get_price(assets)[subscription_time]);
}

export function sort_by_price(lst: Array<priceable_asset_id>): Array<priceable_asset_id> {
	return lst.sort(
		(a, b) => indexed_priceable_assets[b].price.jahr - indexed_priceable_assets[a].price.jahr
	);
}

function get_offer_savings_string(
	offer: offer_description_type,
	packages: ReadonlyArray<package_id>
): string {
	return to_price_string(
		(get_offer_price(empty_offer, packages).jahr - get_offer_price(offer, packages).jahr) * 12
	);
}
export function get_savings_string(packages: ReadonlyArray<package_id>): string {
	const chosen_offer = chose_offer(packages);
	if (chosen_offer === undefined) {
		return to_price_string(0);
	}
	return get_offer_savings_string(indexed_offers[chosen_offer], packages);
}

export function get_offer_note(packages: ReadonlyArray<package_id>, long = false): string {
	const chosen_offer = chose_offer(packages);
	if (chosen_offer === undefined) {
		return '';
	}
	const offer = indexed_offers[chosen_offer];
	const text = long ? offer.long_text : offer.short_text;
	return text.replaceAll('{savings}', get_offer_savings_string(offer, packages));
}

