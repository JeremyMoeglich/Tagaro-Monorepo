import type { package_id } from './assets/packages';
import { indexed_priceable_assets } from './priceable_asset';
import type { Price } from './priceable_asset_types';
import type { priceable_asset_id } from './asset_types';
import { map_entries, typed_entries, typed_from_entries } from 'functional-utilities';
import { clone, intersection as intersect, isEqual, minBy, sortBy, sum } from 'lodash-es';
import { empty_offer, indexed_offers, offer_applicable, offer_ids } from './offer_description';
import type { offer_id, offer_description_type } from './offer_description';
import { asset_sets } from './sets';
import { zubuchoption_ids } from './assets/zubuchoptionen';
import type { zubuchoption_id } from './assets/zubuchoptionen';

export function to_price_string(v: number, escaped: boolean = true): string {
	let str = `€${escaped ? '&nbsp' : ' '}` + v.toFixed(2).replace('.', ',');
	if (str.endsWith(',00')) {
		str = str.slice(0, -3);
	}
	return str;
}

export const aktivierung = 0 as number;
export const aktivierung_string = to_price_string(aktivierung);

export const bonus = 20 as number;
export const bonus_string = to_price_string(bonus);

const price_table = map_entries(indexed_priceable_assets, ([key, value]) => [key, value.price]);

export function get_offer_price(
	offer: offer_description_type,
	assets: ReadonlyArray<priceable_asset_id>,
	exclude_overwrite?: boolean
): Price {
	const current_price_table = clone(price_table);

	for (const overwrite of offer.overwrites) {
		const filtered_zubuchoptionen = assets.filter((id) =>
			zubuchoption_ids.includes(id as zubuchoption_id)
		);
		const other_assets = assets.filter((id) => !zubuchoption_ids.includes(id as zubuchoption_id));
		if (isEqual(sortBy(overwrite[0]), sortBy(other_assets)) && !exclude_overwrite) {
			const price = (() => {
				if (isEqual(empty_offer, offer)) {
					return get_offer_price(empty_offer, assets, true);
				} else {
					return get_offer_price(empty_offer, assets, false);
				}
			})();
			const zubuchoptionen_price = get_offer_price(empty_offer, filtered_zubuchoptionen);
			for (const [timeframe, value] of typed_entries(overwrite[1])) {
				price[timeframe] = value + zubuchoptionen_price[timeframe];
			}
			return price;
		}
	}

	offer.actions.forEach((action) => {
		const set = asset_sets[action.set];
		const intersection = intersect(assets, set);
		intersection.forEach((asset_id: priceable_asset_id) => {
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
	const base_price = get_offer_price(empty_offer, assets);
	const min = minBy(prices, ([, price]) => price.jahr);
	if (!min || base_price.jahr <= min[1].jahr) {
		return undefined;
	}
	return min[0];
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
	subscription_time: keyof Price,
	escaped: boolean = true
): string {
	return to_price_string(get_price(assets)[subscription_time], escaped);
}

export function sort_by_price(lst: Array<priceable_asset_id>): Array<priceable_asset_id> {
	return lst.sort(
		(a, b) => indexed_priceable_assets[b].price.jahr - indexed_priceable_assets[a].price.jahr
	);
}

function get_offer_savings_string(
	offer: offer_description_type,
	ids: ReadonlyArray<priceable_asset_id>
): string {
	return to_price_string(
		(get_offer_price(empty_offer, ids).jahr - get_offer_price(offer, ids).jahr) * 12
	);
}

export function get_savings_string(ids: ReadonlyArray<priceable_asset_id>): string {
	const chosen_offer = chose_offer(ids);
	if (chosen_offer === undefined) {
		return to_price_string(0);
	}
	return get_offer_savings_string(indexed_offers[chosen_offer], ids);
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
