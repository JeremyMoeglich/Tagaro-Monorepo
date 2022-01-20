import type { package_id } from "./assets/packages";
import type { receive_id } from "./assets/receive_type";
import type { zubuchoption_id } from "./assets/zubuchoptionen";

export type priceable_asset_id = package_id | zubuchoption_id
export type asset_id =  priceable_asset_id | receive_id
