import { aboformular } from 'open_constants';
import { index_by } from 'functional-utilities';
import { intersection as intersect, isEqual, sortBy } from 'lodash-es';
import type { package_id } from './assets/packages';
import { zubuchoption_ids } from './assets/zubuchoptionen';
import type { zubuchoption_id } from './assets/zubuchoptionen';
import type { asset_id, priceable_asset_id } from './asset_types';
import type { Price } from './priceable_asset_types';
import { asset_sets } from './sets';

export type package_set_id = 'all' | 'premium' | 'base' | package_id;
export type base_package_set = 'entertainment' | 'entertainmentplus';
export type premium_package_set = 'cinema' | 'sport' | 'bundesliga';

interface conditions_type {
	set: package_set_id;
	min_amount: number;
	inverted: boolean;
}

interface action {
	set: package_set_id;
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
	overwrites: readonly (readonly [readonly priceable_asset_id[], Partial<Price>])[];
	route: string;
}

export type offer_descriptions_type = ReadonlyArray<offer_description_type>;

export const offer_ids = ['opt1'] as const;

export type offer_id = (typeof offer_ids)[number];

const text_descriptions = '✓ {savings} Preisvorteil';

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
	/*{
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
	}*/
	{
		id: 'opt1',
		aktivierung: 0,
		conditions: [],
		bonus: 20,
		short_text: text_descriptions,
		long_text: text_descriptions,
		actions: [],
		overwrites: [
			[['entertainment', 'sport'], { jahr: 20 }],
			[['entertainment', 'bundesliga'], { jahr: 20 }],
			[['entertainment', 'sport', 'bundesliga'], { jahr: 25 }],
			[['entertainment', 'cinema', 'sport', 'bundesliga'], { jahr: 30 }],

			[['entertainmentplus'], { jahr: 15 }],
			[['entertainmentplus', 'cinema'], { jahr: 25 }],
			[['entertainmentplus', 'bundesliga'], { jahr: 25 }],
			[['entertainmentplus', 'sport'], { jahr: 25 }],
			[['entertainmentplus', 'sport', 'bundesliga'], { jahr: 30 }],
			[['entertainmentplus', 'cinema', 'sport', 'bundesliga'], { jahr: 35 }]
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
	route: aboformular,
	overwrites: []
};

export const indexed_offers = index_by(offer_descriptions, 'id');

export function offer_applicable(offer_id: offer_id, asset_ids: ReadonlyArray<asset_id>): boolean {
	if (offer_id === undefined) {
		throw new Error('Invalid offer_id');
	}
	const offer = indexed_offers[offer_id];
	asset_ids = asset_ids.filter((id) => !zubuchoption_ids.includes(id as zubuchoption_id));

	for (const overwrite of offer.overwrites) {
		if (isEqual(sortBy(overwrite[0]), sortBy(asset_ids))) {
			return true;
		}
	}
	for (const condition of offer.conditions) {
		const set = asset_sets[condition.set];
		const intersection = intersect(set, asset_ids);
		if (intersection.length < condition.min_amount !== condition.inverted) {
			return false;
		}
	}
	return true;
}
