import type { package_id } from './assets/packages';
import type { iptv_id, receiver_id } from './assets/receiver';
import type { cable_receive_types, receive_id } from './assets/receive_type';
import type { zubuchoption_id } from './assets/zubuchoptionen';

export type priceable_asset_id = package_id | zubuchoption_id | receiver_id | iptv_id;
export type asset_id = priceable_asset_id | receive_id | cable_receive_types;

export interface Asset<T extends asset_id = asset_id> {
	id: T;
	name: string;
	note: string;
	image: string;
}

export const temp_asset_image = '/images/assets/temp.png';
