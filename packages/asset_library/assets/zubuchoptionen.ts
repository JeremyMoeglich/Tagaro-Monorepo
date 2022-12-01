import { dynamic_to_static_assets, type Price } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';

export const zubuchoption_ids = [
	'uhd',
	'dazn_monthly',
	'dazn_yearly',
	'dazn_generic',
	'multiscreen',
	'kids',
	'trendsports',
	'plus18',
	'netflixstandard',
	'netflixpremium',
	'hdplus4monategratis',
	'hdplus',
	'skygoplus'
] as const;

export type zubuchoption_id = typeof zubuchoption_ids[number];

const dazn_price: Price = { jahr: 24.99, monat: 29.99, singular: 0 };

const zubuchoption_image_location = '/images/assets/zubuchoptionen/';

export const zubuchoptionen_assets: ReadonlyArray<Priceable_Asset<zubuchoption_id>> =
	dynamic_to_static_assets([
		{
			id: 'uhd',
			price: 5,
			name: `UHD`,
			selector: {
				descriptor: [
					{
						required: false,
						word: 'internet'
					}
				],
				type: 'AND'
			},
			note: '[TODO]',
			image: `${zubuchoption_image_location}uhd.png`
		},
		{
			id: 'skygoplus',
			price: 5,
			name: `Sky Go Plus`,
			note: '[TODO]',
			image: `${zubuchoption_image_location}skygoplus.png`
		},
		{
			id: 'dazn_monthly',
			price: { jahr: dazn_price.monat, monat: dazn_price.monat, singular: 0 },
			name: 'DAZN',
			note: '[TODO]',
			image: `${zubuchoption_image_location}dazn.svg`
		},
		{
			id: 'dazn_yearly',
			price: { jahr: dazn_price.jahr, monat: dazn_price.jahr, singular: 0 },
			name: 'DAZN',
			note: '[TODO]',
			image: `${zubuchoption_image_location}dazn.svg`
		},
		{
			id: 'dazn_generic',
			price: dazn_price,
			name: 'DAZN',
			note: '[TODO]',
			image: `${zubuchoption_image_location}dazn.svg`
		},
		{
			id: 'multiscreen',
			price: 5, //10,
			name: 'Multiscreen',
			note: '[TODO]',
			image: `${zubuchoption_image_location}multiscreen.png`
		},
		{
			id: 'kids',
			price: 5,
			name: 'Kids',
			note: '[TODO]',
			image: `${zubuchoption_image_location}kids.png`
		},
		{
			id: 'trendsports',
			price: 5.99,
			name: 'trendSports',
			note: '[TODO]',
			image: `${zubuchoption_image_location}trendsports.png`
		},
		{
			id: 'plus18',
			price: 0,
			name: '18+ für Blue Movie',
			note: '[TODO]',
			image: `${zubuchoption_image_location}plus18.png`
		},
		{
			id: 'hdplus4monategratis',
			price: 0,
			name: 'HD+ 4 Monate gratis',
			note: '[TODO]',
			image: `${zubuchoption_image_location}hdplus.png`
		},
		{
			id: 'hdplus',
			price: 6,
			name: 'HD+ 6 monate gratis',
			note: '[TODO]',
			image: `${zubuchoption_image_location}hdplus.png`
		},
		{
			id: 'netflixstandard',
			price: 5,
			name: 'Netflix Standard-Abo',
			note: '[TODO]',
			image: `${zubuchoption_image_location}Netflix_standard.png`,
			selector: {
				descriptor: [
					{
						required: false,
						word: 'netflixpremium'
					},
					{
						required: true,
						word: 'entertainmentplus'
					}
				],
				type: 'AND'
			}
		},
		{
			id: 'netflixpremium',
			price: 10,
			name: 'Netflix Premium-Abo',
			note: '[TODO]',
			image: `${zubuchoption_image_location}Netflix_premium.png`,
			selector: {
				descriptor: [
					{
						required: false,
						word: 'netflixstandard'
					},
					{
						required: true,
						word: 'entertainmentplus'
					}
				],
				type: 'AND'
			}
		}
	]);
