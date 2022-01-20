import { receive_assets } from './assets/receive_type';
import { Asset, asset_id, index_by_id } from './asset_types';
import { priceable_assets } from './priceable_asset';

export const assets: Array<Asset<asset_id>> = [...priceable_assets, ...receive_assets];
export const indexed_assets = index_by_id(assets);
