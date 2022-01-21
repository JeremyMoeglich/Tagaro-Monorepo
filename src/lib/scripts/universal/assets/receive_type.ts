import type { Asset } from '../asset_types';

enum receive_type_enum {
	kabel,
	satelit,
	internet
}

export type receive_id = keyof typeof receive_type_enum;

export const receive_assets: Array<Asset<receive_id>> = [
	{
		id: 'kabel',
		text: 'Kabel',
		note: '[TODO]'
	},
	{
		id: 'satelit',
		text: 'Satelit',
		note: '[TODO]'
	},
	{
		id: 'internet',
		text: 'Internet',
		note: '[TODO]'
	}
];
