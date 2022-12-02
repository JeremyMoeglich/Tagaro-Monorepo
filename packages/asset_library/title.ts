import { sort_assets } from "./all_assets";
import { indexed_package_assets, package_id } from "./assets/packages";
import { bonus_string } from "./prices";

export function get_title(ids: package_id[]): string {
    if (ids.length === 4) {
        if (ids.includes('entertainmentplus')) {
            return 'TODO1';
        } else {
            return 'TODO2';
        }
    } else {
        return `${sort_assets(ids)
            .map((v) => indexed_package_assets[v].name)
            .join(' + ')} + ${bonus_string} Prämie`;
    }
}