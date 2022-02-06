import type { package_id } from './asset_library/assets/packages';
import type { cable_receive_types, receive_id } from './asset_library/assets/receive_type';
import type { zubuchoption_id } from './asset_library/assets/zubuchoptionen';

interface receive_choice {
	receive_type: receive_id | '';
	cable_receiver?: cable_receive_types;
}

interface choices {
	base_package: package_id;
	premium_packages: Array<package_id>;
	zubuchoptionen: Array<zubuchoption_id>;
}

type title =
	| 'Kein_Titel'
	| 'ING'
	| 'DIPL.ING'
	| 'DIPL.KFM'
	| 'MAG'
	| 'DR'
	| 'DR.DR'
	| 'DR.MAG'
	| 'HFRT'
	| 'PROF'
	| 'MAG.FH'
	| 'UNIV.PROF'
	| 'UNIV.DOZ'
	| 'GRAF'
	| 'FÜRST'
	| 'FREIHERR'
	| 'BARON';

type anrede = 'herr' | 'frau' | 'keine_angabe';

interface personal_info {
	anrede: anrede;
	title: title;
	vorname: string;
	nachname: string;
	addresse: string;
	ort: string;
	plz: string;
	telephone: string;
	email: string;
	geburtsdatum: string;
}

interface sepa_bank_info {
	iban: string;
	bic: string;
}

interface other_bank_info {
	bankleitzahl: string;
	kontonumber: string;
}

type yes_no = 'Ja' | 'Nein';

interface payment_info {
	bank_name: string;
	sepa_vorhanden?: yes_no;
	sepa_bank_info?: sepa_bank_info;
	other_bank_info?: other_bank_info;
	kontoinhaber_info?: 'Abonnent ist Kontoinhaber' | 'Anderer';
	kontoinhaber: string;
}

interface shipping_address {
	address_packingstation?: string;
	plz?: string;
	anrede?: anrede;
	title?: title;
	vorname?: string;
	nachname?: string;
	firma?: string;
}

export interface aboformular_options {
	receive: receive_choice;
	choices: choices;
	personal_info: personal_info;
	shipping_address_required: yes_no;
	shipping_address?: shipping_address;
	payment_info: payment_info;
}
