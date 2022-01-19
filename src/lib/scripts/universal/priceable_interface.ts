import type { selector } from './selector';

export interface Price {
	monat: number;
	jahr: number;
}

export interface Priceable_Asset<T extends string> {
	text: string;
	price: Price;
	selector: selector;
	id: T;
}

export interface Dynamic_Priceable_Asset<T excludes string> {
	text: string;
	price: number | Price;
	selector?: selector;
	id: string | number;
}

export function dynamic_to_static_asset(asset: Dynamic_Priceable_Asset): Priceable_Asset {
	return {
		text: asset.text,
		id: asset.id.toString(),
		selector: asset.selector ? asset.selector : [],
		price: typeof asset.price === 'number' ? { jahr: asset.price, monat: asset.price } : asset.price
	};
}

