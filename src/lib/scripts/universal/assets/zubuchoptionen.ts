import {
	Dynamic_Priceable_Asset,
	dynamic_to_static_asset,
} from '../priceable_asset';

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

export const zubuchoptionen = (() => {
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
			]
		},
		{
			id: 'dazn',
			price: { jahr: 12.5, monat: 14.99 },
			text: 'DAZN'
		},
		{
			id: 'multiscreen',
			price: 10,
			text: 'Multiscreen'
		},
		{
			id: 'kids',
			price: 5,
			text: 'Kids'
		},
		{
			id: 'trendsports',
			price: 5.99,
			text: 'trendSports'
		},
		{
			id: 'plus18',
			price: 0,
			text: '18+ für Blue Movie'
		},
		{
			id: 'netflixstandard',
			price: 5,
			text: 'Netflix Standard-Abo'
		},
		{
			id: 'netflixpremium',
			price: 10,
			text: 'Netflix Premium-Abo'
		}
	];
	return dynamic_zubuchoptionen.map(dynamic_to_static_asset);
})();
