import type { package_id } from 'asset_library/assets/packages';
import type { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';
import type { base_package_set, premium_package_set } from 'asset_library/offer_description';

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

export type SkyFormData = {
	form_name: 'Sky-Bestellung-5' | 'Sky-Bestellung-4';
	anrede: 'herr' | 'frau' | 'keine_angabe';
	titel: title;
	vorname: string;
	nachname: string;
	straße: string;
	hausnummer: string;
	adresszusatz?: string;
	plz: string;
	ort: string;
} & (
	| {
			abweichende_lieferadresse: false;
	  }
	| {
			abweichende_lieferadresse: true;
			anrede_liefer: 'herr' | 'frau' | 'keine_angabe';
			titel_liefer: title;
			vorname_liefer: string;
			nachname_liefer: string;
			firma_liefer?: string;
			straße_oder_packstation_liefer: string;
			hausnummer_oder_dhl_kundennummer_liefer: string;
			adresszusatz_liefer?: string;
			plz_liefer: string;
			ort_liefer: string;
	  }
) & {
		geburtsdatum: string;
		email: string;
		telefon: string;
		telefon_weitere: string[];
	} & (
		| {
				sepa_vorhanden: false;
				bankleitzahl: string;
				kontonummer: string;
		  }
		| {
				sepa_vorhanden: true;
				iban: string;
				bic: string;
		  }
	) &
	(
		| {
				kontoinhaber: 'abonnent ist kontoinhaber';
		  }
		| {
				kontoinhaber: 'abonnent ist nicht kontoinhaber';
				kontoinhaber_info: string;
		  }
	) &
	(
		| {
				empfangsart: 'satellit' | 'internet';
		  }
		| {
				empfangsart: 'cable';
				cable_receiver: string;
		  }
	) & {
		base_package: base_package_set;
		premium_packages: premium_package_set[];
		zubuchoptionen: (zubuchoption_id | package_id)[];
		payback_number?: string;
		hardware: 'KEINE' | 'SMC' | 'SMC UND STB / CI PLUS' | 'STB / CI PLUS';
	};
