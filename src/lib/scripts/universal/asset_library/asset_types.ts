import type { package_id } from './assets/packages';
import type { cable_receive_types, receive_id } from './assets/receive_type';
import type { zubuchoption_id } from './assets/zubuchoptionen';

export type priceable_asset_id = package_id | zubuchoption_id;
export type asset_id = priceable_asset_id | receive_id | cable_receive_types;

export interface Asset<T extends asset_id = asset_id> {
	id: T;
	text: string;
	note: string;
	image: string;
}

export function index_by_id<T extends asset_id, P extends Asset<T>>(
	assets: ReadonlyArray<P>
): Record<T, P> {
	return Object.fromEntries(
		assets.map((asset) => {
			return [asset['id'], asset];
		})
	) as Record<T, P>;
}

export const temp_asset_image = '/images/assets/temp.png';
