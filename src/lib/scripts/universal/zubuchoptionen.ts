import type { selector } from './selector';
import type { zubuchoption_id } from './zubuchoption_id';

export interface zubuchoption {
	text: string;
	price: number;
	selector: selector;
	id: zubuchoption_id;
}

export const zubuchoptionen_price: Record<zubuchoption_id, number> = {
	uhd: 5,
	dazn: 12.5,
	multiscreen: 10,
	trendsports: 5.99,
	plus18: 0,
	netflixstandard: 5,
	netflixpremium: 10
};

export const zubuchoptionen: Array<zubuchoption> = [
	{
		id: 'uhd',
		price: zubuchoptionen_price['uhd'],
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
		price: zubuchoptionen_price['dazn'],
		text: 'DAZN jährlich',
		selector: []
	},
    {
        'id': 'multiscreen',
        'price': zubuchoptionen_price['multiscreen'],
        'text': 'Multiscreen Inkl. Sky Go Plus für 3 mobile Geräte,<br/> 2. Sky Q Receiver für einmalig € 49 oder 1 Sky Q Mini für einmalig € 29 (zur Leihe) '
        'selector': []
    },
    {}
];
