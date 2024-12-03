import { sort_assets } from "./all_assets";
import { type package_id, package_ids } from "./assets/packages";
import type { priceable_asset_id } from "./asset_types";
import { indexed_priceable_assets } from "./priceable_asset";
import { bonus_string } from "./prices";
import { nspace } from "open_constants";

export function get_title(ids: priceable_asset_id[]): string {
	if (ids.filter((id) => package_ids.includes(id as package_id)).length === 4) {
		if (ids.includes("entertainmentplus")) {
			return "Komplett inkl. Netflix";
		}
		return "Entertainment + 3 Pakete";
	}
	return `${sort_assets(ids)
		.map((v) => indexed_priceable_assets[v].name)
		.join(" + ")}`;
}

export function get_praemie(escapeSpace = true): string {
	const sp = escapeSpace ? nspace : " ";
	const praemie = `+${sp}${bonus_string(escapeSpace)}${sp}Bonus`;
	return praemie;
}
