import { temp_asset_image } from '../asset_types';
import type { Asset } from '../asset_types';

enum receive_type_enum {
	kabel,
	satelit,
	internet
}

export type receive_id = keyof typeof receive_type_enum;

export type cable_receive_types =
	| 'automatic'
	| 'vodafone_kabel_deutschland'
	| 'Vodafone_unitymedia'
	| 'other';

export const cable_receive_assets: ReadonlyArray<Asset<cable_receive_types>> = [
	{
		id: 'automatic',
		text: 'Automatische Ermittlung (Sky Adressdatenbank)',
		note: '[TODO]',
		image: temp_asset_image
	},
	{
		id: 'vodafone_kabel_deutschland',
		text: 'Vodafone (vormals Kabel Deutschland) ',
		note: '[TODO]',
		image: temp_asset_image
	},
	{
		id: 'Vodafone_unitymedia',
		text: 'Vodafone (vormals Unitymedia)',
		note: '[TODO]',
		image: temp_asset_image
	},
	{
		id: 'other',
		text: 'Anderer privater Anbieter ',
		note: '[TODO]',
		image: temp_asset_image
	}
];

const receiver_image_location = '/images/assets/receivers/';

export const receive_assets: ReadonlyArray<Asset<receive_id>> = [
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
