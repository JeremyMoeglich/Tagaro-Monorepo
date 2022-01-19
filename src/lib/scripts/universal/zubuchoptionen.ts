import type { selector } from './selector';
import type { zubuchoption_id } from './zubuchoption_id';


export interface zubuchoption {
	text: string;
	price: number;
	selector: selector;
    id: zubuchoption_id;
}

const zubuchoptionen_price: Record<string, number> = {
    uhd: 5,
    dazn: 12.5,
    multiscreen: 10,
    trendsports: 5.99,
    plus18: 0,
    netflixstandard: 5, 
    netflixpremium: 10
};

const zubuchoptionen_price_string: Record<string, string> = Object.fromEntries(
	Object.entries(zubuchoptionen_price).map(([key, value]) => {
		return [key, value.toFixed(2)];
	})
);

const zubuchoptionen: Array<zubuchoption> = [

];
