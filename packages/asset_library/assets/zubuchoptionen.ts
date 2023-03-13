import { temp_asset_image } from '../asset_types';
import type { Price } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';
import { cprice } from './definition_utils';

export const zubuchoption_ids = [
	'uhd',
	'dazn_yearly',
	'dazn_monthly',
	'multiscreen',
	'skygoplus',
	'multiscreen_extra_qmini_1',
	'multiscreen_extra_qmini_2',
	'multiscreen_extra_quhd',
	'trendsports',
	'plus18',
	'netflixstandard',
	'netflixpremium',
	'hdplus4monategratis',
	'hdplus'
] as const;

export type zubuchoption_id = (typeof zubuchoption_ids)[number];

const zubuchoption_image_location = '/images/assets/zubuchoptionen/';

const dazn_yearly_price = { jahr: 18.99, monat: 29.99, singular: 0 } satisfies Price;

const get_dazn_asset = (id: zubuchoption_id, price: Price) =>
	({
		id: id,
		price,
		name: 'DAZN STANDARD',
		note: 'Live-Sport, Dokus und vieles mehr per App und TV-Sender.',
		image: {
			normal: `${zubuchoption_image_location}dazn.svg`,
			square: `${zubuchoption_image_location}dazn.svg`
		},
		aspects: [
			'Bundesliga: Alle Freitags- und Sonntagsspiele',
			'121 Spiele der UEFA Champions League inklusive Konferenz nur auf DAZN - garantiert bis 2027',
			"Serie A, LaLiga, Ligue 1 und die UEFA Women's Champions League",
			'Zudem der beste US-Sport mit NFL, NBA, UFC und die wichtigsten Schwergewichts-Boxkämpfe',
			'Alles per App und das Beste von DAZN zeitgleich über die linearen Kanäle DAZN 1 und DAZN 2',
			'Eine Abrechnung für Sky und DAZN'
		],
		sort_priority: 8,
		senders: [],
		selector: {
			type: 'AND',
			selectors: []
		}
	} satisfies Priceable_Asset<zubuchoption_id>);

export const zubuchoptionen_assets: ReadonlyArray<Priceable_Asset<zubuchoption_id>> = [
	{
		id: 'uhd',
		price: cprice(5),
		name: `UHD`,
		selector: {
			type: 'AND',
			selectors: [
				{
					action: 'exclude',
					asset_id: 'hdplus'
				},
				{
					action: 'exclude',
					asset_id: 'hdplus4monategratis'
				}
			]
		},
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}uhd.png`,
			square: `${zubuchoption_image_location}uhd.png`
		},
		aspects: [],
		sort_priority: 6,
		senders: []
	},
	{
		id: 'skygoplus',
		price: cprice(5),
		name: `Sky Go Plus`,
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}skygoplus.png`
		},
		selector: {
			type: 'AND',
			selectors: []
		},
		aspects: [],
		sort_priority: 7,
		senders: []
	},
	get_dazn_asset('dazn_yearly', dazn_yearly_price),
	get_dazn_asset('dazn_monthly', cprice(dazn_yearly_price.monat)),
	{
		id: 'multiscreen',
		price: { jahr: 10, monat: 10, singular: 0 },
		name: 'Multiscreen',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}multiscreen.png`,
			square: `${zubuchoption_image_location}multiscreen.png`
		},
		aspects: [],
		sort_priority: 9,
		senders: [],
		selector: {
			action: 'require',
			asset_id: 'skygoplus'
		}
	},
	{
		id: 'multiscreen_extra_qmini_1',
		price: cprice(10, 29),
		name: 'Multiscreen Extra Qmini 1',
		aspects: [],
		image: {
			normal: temp_asset_image,
			square: temp_asset_image
		},
		note: '[TODO]',
		selector: {
			type: 'AND',
			selectors: [
				{
					action: 'require',
					asset_id: 'multiscreen'
				},
				{
					action: 'exclude',
					asset_id: 'multiscreen_extra_qmini_2'
				}
			]
		},
		sort_priority: 10,
		senders: []
	},
	{
		id: 'multiscreen_extra_qmini_2',
		price: cprice(10, 49),
		name: 'Multiscreen Extra Qmini 2',
		aspects: [],
		image: {
			normal: temp_asset_image,
			square: temp_asset_image
		},
		note: '[TODO]',
		selector: {
			type: 'AND',
			selectors: [
				{
					action: 'require',
					asset_id: 'multiscreen'
				},
				{
					action: 'exclude',
					asset_id: 'multiscreen_extra_qmini_1'
				}
			]
		},
		sort_priority: 11,
		senders: []
	},
	{
		id: 'trendsports',
		price: cprice(5.99),
		name: 'trendSports',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}trendsports.png`
		},
		aspects: [],
		sort_priority: 10,
		senders: [],
		selector: {
			type: 'AND',
			selectors: []
		}
	},
	{
		id: 'plus18',
		price: cprice(0),
		name: '18+ für Blue Movie',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}plus18.png`
		},
		aspects: [],
		sort_priority: 11,
		senders: [],
		selector: {
			type: 'AND',
			selectors: []
		}
	},
	{
		id: 'hdplus4monategratis',
		price: cprice(0),
		name: 'HD+ 4 Monate gratis',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}hdplus.png`
		},
		aspects: [],
		sort_priority: 12,
		senders: [],
		selector: {
			type: 'AND',
			selectors: []
		}
	},
	{
		id: 'hdplus',
		price: cprice(6),
		name: 'HD+ 6 monate gratis',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}hdplus.png`
		},
		aspects: [],
		sort_priority: 13,
		senders: [],
		selector: {
			type: 'AND',
			selectors: [
				{
					action: 'exclude',
					asset_id: 'hdplus4monategratis'
				},
				{
					action: 'exclude',
					asset_id: 'uhd'
				}
			]
		}
	},
	{
		id: 'netflixstandard',
		price: cprice(5),
		name: 'Netflix Standard-Abo',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}netflix_standard.png`
		},
		selector: {
			selectors: [
				{
					action: 'exclude',
					asset_id: 'netflixpremium'
				},
				{
					action: 'require',
					asset_id: 'entertainmentplus'
				}
			],
			type: 'AND'
		},
		aspects: [],
		sort_priority: 14,
		senders: []
	},
	{
		id: 'netflixpremium',
		price: cprice(10),
		name: 'Netflix Premium-Abo',
		note: '[TODO]',
		image: {
			normal: `${zubuchoption_image_location}netflix_premium.png`
		},
		selector: {
			selectors: [
				{
					action: 'exclude',
					asset_id: 'netflixstandard'
				},
				{
					action: 'require',
					asset_id: 'entertainmentplus'
				}
			],
			type: 'AND'
		},
		aspects: [],
		sort_priority: 15,
		senders: []
	}
];
