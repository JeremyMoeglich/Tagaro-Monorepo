import { dynamic_to_static_asset } from '../priceable_asset';
import type { Dynamic_Priceable_Asset } from '../priceable_asset';

enum zubuchoption_id_enum {
	uhd,
	dazn,
	multiscreen,
	kids,
	trendsports,
	plus18,
	netflixstandard,
	netflixpremium
}
export type zubuchoption_id = keyof typeof zubuchoption_id_enum;

export const zubuchoptionen_assets = (() => {
	const dynamic_zubuchoptionen: Array<Dynamic_Priceable_Asset<zubuchoption_id>> = [
		{
			id: 'uhd',
			price: 5,
			text: `UHD`,
			selector: [
				{
					required: false,
					word: 'internet'
				}
			],
			note: '[TODO]'
		},
		{
			id: 'dazn',
			price: { jahr: 12.5, monat: 14.99 },
			text: 'DAZN',
			note: '[TODO]'
		},
		{
			id: 'multiscreen',
			price: 10,
			text: 'Multiscreen',
			note: '[TODO]'
		},
		{
			id: 'kids',
			price: 5,
			text: 'Kids',
			note: '[TODO]'
		},
		{
			id: 'trendsports',
			price: 5.99,
			text: 'trendSports',
			note: '[TODO]'
		},
		{
			id: 'plus18',
			price: 0,
			text: '18+ für Blue Movie',
			note: '[TODO]'
		},
		{
			id: 'netflixstandard',
			price: 5,
			text: 'Netflix Standard-Abo',
			note: '[TODO]'
		},
		{
			id: 'netflixpremium',
			price: 10,
			text: 'Netflix Premium-Abo',
			note: '[TODO]'
		}
	];
	return dynamic_zubuchoptionen.map(dynamic_to_static_asset);
})();
