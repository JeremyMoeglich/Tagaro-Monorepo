import { sort_assets } from './all_assets';
import { type package_id, package_ids } from './assets/packages';
import type { priceable_asset_id } from './asset_types';
import { indexed_priceable_assets } from './priceable_asset';
import { bonus_string, get_price_string } from './prices';
import { nspace } from 'open_constants';

export function get_title(
	ids: priceable_asset_id[],
	short?: boolean | undefined,
	escape = true
): string {
	const sp = escape ? nspace : ' ';
	const praemie = short ? '' : ` +${sp}${bonus_string(escape)}${sp}Prämie`;
	// const praemie =  short ? '' : ` +${sp}${get_price_string(ids, "jahr")}${sp}Gutschrift (1${sp}Abobetrag${sp}geschenkt)`;
	if (ids.filter((id) => package_ids.includes(id as package_id)).length === 4) {
		if (ids.includes('entertainmentplus')) {
			return 'Komplett inkl. Netflix' + praemie;
		} else {
			return 'Entertainment + 3 Pakete' + praemie;
		}
	} else {
		return `${sort_assets(ids)
			.map((v) => indexed_priceable_assets[v].name)
			.join(' + ')}${praemie}`;
	}
}
