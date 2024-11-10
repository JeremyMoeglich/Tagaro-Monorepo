import { asset_id } from "./asset_types";

export function is_wunschgutschein_offer(package_ids: asset_id[]) {
    if (package_ids.includes("sport") || package_ids.includes("bundesliga")) {
        if (package_ids.length >= 4) {
            return true
        }
    }

    if (package_ids.includes("entertainmentplus")) {
        return true
    }

    return false
}