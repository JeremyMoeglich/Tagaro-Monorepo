import type { package_id } from './asset_libary/assets/packages';
import type { receive_id } from './asset_libary/assets/receive_type';
import type { zubuchoption_id } from './asset_libary/assets/zubuchoptionen';

export interface aboformular_options {
	receive_type: receive_id;
	base_package: package_id;
	premium_packages: Array<package_id>;
	zubuchoptionen: Array<zubuchoption_id>;
	anrede: 'Herr' | 'Frau' | 'Keine Angabe';
	vorname: string;
	nachname: string;
	addresse: string;
}
