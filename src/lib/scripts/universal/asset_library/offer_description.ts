import { aboformular } from '$lib/scripts/frontend/urls';
import { index_by } from 'functional-utilities';
import { intersection as intersect } from 'lodash-es';
import type { package_id } from './assets/packages';
import type { asset_id } from './asset_types';
import type { Price } from './priceable_asset_types';
import { asset_sets } from './sets';

export type offer_set = 'all' | 'premium' | 'base' | package_id;

interface conditions_type {
	set: offer_set;
	min_amount: number;
	inverted: boolean;
}

interface action {
	set: offer_set;
	value: Price;
	absolute: boolean;
}

export interface offer_description_type {
	id: offer_id | '';
	aktivierung: number;
	conditions: ReadonlyArray<conditions_type>;
	bonus: number;
	short_text: string;
	long_text: string;
	actions: ReadonlyArray<action>;
	route: string;
}

export type offer_descriptions_type = ReadonlyArray<offer_description_type>;

export const offer_ids = ['50premium', 'entertainmentplus15'] as const;

export type offer_id = typeof offer_ids[number];

const text_descriptions = '+ {savings} Preisvorteil';

export const offer_descriptions: offer_descriptions_type = [
	/*{
		id: '20alles',
		aktivierung: 0,
		conditions: [
			{
				set: 'premium',
				min_amount: 1,
				inverted: false
			},
			{
				set: 'entertainmentplus',
				min_amount: 1,
				inverted: false
			}
		],
		bonus: 20,
		short_text: '+ 20% auf Abopreis ',
		long_text:
			'+ 20% auf Abopreis ab Entertainment Plus + 1 Paket (Rabatt auch für Zubuchoptionen)',
		actions: [
			{
				set: 'all',
				value: {
					singular: 1,
					monat: 1,
					jahr: 0.8
				},
				absolute: false
			}
		],
		route: 'https://fd10.formdesk.com/tagaro/Sky-Bestellung-5'
	}*/
	{
		id: '50premium',
		aktivierung: 0,
		conditions: [
			{
				set: 'premium',
				min_amount: 1,
				inverted: false
			}
		],
		bonus: 20,
		short_text: text_descriptions,
		long_text: text_descriptions,
		actions: [
			{
				set: 'premium',
				value: {
					singular: 1,
					monat: 1,
					jahr: 0.5
				},
				absolute: false
			}
		],
		route: 'https://fd10.formdesk.com/tagaro/Sky-Bestellung-5'
	},
	{
		id: 'entertainmentplus15',
		aktivierung: 0,
		conditions: [
			{
				set: 'entertainmentplus',
				min_amount: 1,
				inverted: false
			},
			{
				set: 'premium',
				min_amount: 1,
				inverted: true
			},
			{
				set: 'entertainment',
				min_amount: 1,
				inverted: true
			}
		],
		bonus: 20,
		short_text: text_descriptions,
		long_text: text_descriptions,
		actions: [
			{
				set: 'entertainmentplus',
				value: {
					jahr: -5,
					monat: 0,
					singular: 0
				},
				absolute: true
			}
		],
		route: 'https://fd10.formdesk.com/tagaro/Sky-Bestellung-5'
	}
] as const;

export const empty_offer: offer_description_type = {
	id: '',
	aktivierung: 0,
	conditions: [],
	bonus: 20,
	short_text: '',
	long_text: '',
	actions: [],
	route: aboformular
};

export const indexed_offers = index_by(offer_descriptions, 'id');

export function offer_applicable(offer_id: offer_id, asset_ids: ReadonlyArray<asset_id>): boolean {
	if (offer_id === undefined) {
		throw new Error('Invalid offer_id');
	}
	const offer = indexed_offers[offer_id];

	for (const condition of offer.conditions) {
		const set = asset_sets[condition.set];
		const intersection = intersect(set, asset_ids);
		if (intersection.length < condition.min_amount !== condition.inverted) {
			return false;
		}
	}
	return true;
}
