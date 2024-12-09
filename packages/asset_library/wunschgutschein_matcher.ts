import type { asset_id } from "./asset_types";

export function is_wunschgutschein_offer(package_ids: asset_id[]) {
	if (package_ids.length >= 4) {
		return true;
	}

	return false;
}
