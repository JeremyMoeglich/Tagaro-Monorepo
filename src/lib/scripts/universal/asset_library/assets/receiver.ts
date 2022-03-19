import { temp_asset_image } from '../asset_types';
import type { Dynamic_Priceable_Asset, Priceable_Asset } from '../priceable_asset_types';

import { dynamic_to_static_assets } from '../priceable_asset_types';

enum receiver_type_enum {
	receiver1x,
	receiver2x
}

export type receiver_id = keyof typeof receiver_type_enum;

export const receiver_assets: ReadonlyArray<
	Readonly<Priceable_Asset<receiver_id>>
> = dynamic_to_static_assets([
	{
		id: 'receiver1x',
		text: 'Sky Q Receiver + Smartcard',
		note: '[TODO]',
		image: temp_asset_image,
		price: 0
	},
	{
		id: 'receiver2x',
		text: '2x Sky Q Receiver + Multiscreen + Sky Go Plus + Smartcard',
		note: '[TODO]',
		image: temp_asset_image,
		price: 99
	}
]);

enum iptv_type_enum {
	iptv1x,
	iptv2x
}

export type iptv_id = keyof typeof iptv_type_enum;

export const iptv_assets: ReadonlyArray<Dynamic_Priceable_Asset<iptv_id>> = [
	{
		id: 'iptv1x',
		text: 'Sky Q IPTV Box + Sky Go',
		note: '[TODO]',
		image: temp_asset_image,
		price: 0
	},
	{
		id: 'iptv2x',
		text: '2x Sky IPTV Box + Sky Q App + Sky Go Plus + Multiscreen',
		note: '[TODO]',
		image: temp_asset_image,
		price: 99
	}
];
