import type { Asset } from '../asset_types';

enum receive_type_enum {
	kabel,
	satelit,
	internet
}

export type receive_id = keyof typeof receive_type_enum;

const receiver_image_location = '/images/assets/receivers/';

export const receive_assets: Array<Asset<receive_id>> = [
	{
		id: 'kabel',
		text: 'Kabel',
		note: '[TODO]',
		image: `${receiver_image_location}kabel.webp`
	},
	{
		id: 'satelit',
		text: 'Satelit',
		note: '[TODO]',
		image: `${receiver_image_location}satelit.webp`
	},
	{
		id: 'internet',
		text: 'Internet',
		note: '[TODO]',
		image: `${receiver_image_location}internet.webp`
	}
];
