import type { package_id } from './assets/packages';
import type { receive_id } from './assets/receive_type';
import type { zubuchoption_id } from './assets/zubuchoptionen';

export type priceable_asset_id = package_id | zubuchoption_id;
export type asset_id = priceable_asset_id | receive_id;

export interface Asset<T extends asset_id = asset_id> {
	id: T;
	text: string;
	note: string;
	image: string;
}

export function index_by_id<T extends asset_id, P extends Asset<T>>(
	assets: Array<P>
): Record<T, P> {
	return Object.fromEntries(
		assets.map((asset) => {
			return [asset['id'], asset];
		})
	) as Record<T, P>;
}
