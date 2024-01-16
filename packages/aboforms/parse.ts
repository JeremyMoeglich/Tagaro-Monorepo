import { SkyFormData } from './form_data';
import type { SentEmail } from 'emails';
import { z } from 'zod';
import { maxBy } from 'lodash-es';
import { base_package_set, premium_package_set } from 'asset_library/offer_description';
import { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';
import { validateIBAN } from 'ibantools';
import { panic } from 'functional-utilities';
import { package_id } from 'asset_library/assets/packages';

function compareTwoStrings(a: string, b: string): number {
	const m = a.length;
	const n = b.length;

	if (m === 0) return n;
	if (n === 0) return m;

	const dp: number[][] = [];

	for (let i = 0; i <= m; i++) {
		dp[i] = [];
		dp[i][0] = i;
	}

	for (let j = 0; j <= n; j++) {
		dp[0][j] = j;
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			dp[i][j] = Math.min(
				dp[i - 1][j] + 1, // deletion
				dp[i][j - 1] + 1, // insertion
				dp[i - 1][j - 1] + cost // substitution
			);
		}
	}
	const similarity = 1 - dp[m][n] / Math.max(m, n);
	return similarity;
}
function trim_spaces(text: string): string {
	while (text.startsWith(' ')) {
		text = text.slice(1);
	}
	while (text.endsWith(' ')) {
		text = text.slice(0, -1);
	}
	return text;
}

function get_object(text: string): Record<string, string | string[]> {
	const lines = text
		.replace(/\r/g, '')
		.replace(/\n*\t/g, '\t')
		.replace(/(?<=.)\n(?=[a-zA-Z0-9](?!.*\t))/g, ';;;')
		.split('\n')
		.map((line) => trim_spaces(line));
	const obj: Record<string, string | string[]> = {};
	let last_key: string | undefined = undefined;
	const key_amount: Record<string, number> = {};
	lines.forEach((line) => {
		const split_line = line.split('\t');
		if (split_line.length !== 2) {
			return;
		}
		const [key, value] = [split_line[0]?.trim(), split_line[1]?.trim()] as [string, string];
		key_amount[key] = (key_amount[key] ?? 0) + 1;
		if (key in obj && last_key === key) {
			const current = obj[key];
			if (!Array.isArray(current)) {
				obj[key] = [
					current ??
						(() => {
							throw "This won't happen";
						})()
				];
			}
			if (value.trim()) {
				(obj?.[key] as string[]).push(value);
			}
		} else if (key in obj) {
			obj[`${key}_${key_amount[key]}`] = value;
		} else {
			obj[key] = value;
		}
		last_key = key;
	});
	const new_obj: Record<string, string[] | string> = Object.fromEntries(
		Object.entries(obj).map(([key, value]) => {
			if (Array.isArray(value)) {
				return [
					key,
					value.flatMap((v) =>
						v
							.split(';;;')
							.map((e) => e.trim())
							.filter((e) => e !== '')
					)
				] as [string, string[]];
			} else {
				if (value.includes(';;;')) {
					return [
						key,
						value
							.split(';;;')
							.map((e) => e.trim())
							.filter((e) => e !== '')
					] as [string, string[]];
				} else {
					return [key, value] as [string, string];
				}
			}
		})
	);
	return new_obj;
}

export function to_form_data(text: string): SkyFormData {
	const obj = get_object(text);
	const alt = <T extends keyof typeof obj>(opt: T[]) => {
		return opt
			.map((e) => obj[e])
			.reduce((acc, b) => acc ?? b, undefined as undefined | (typeof obj)[keyof typeof obj]);
	};

	const strp = (v: unknown, loc: string) => {
		const safe_parsed = z.string().safeParse(v);
		if (safe_parsed.success) {
			return safe_parsed.data;
		} else {
			console.log(`Got an error here ${loc}`);
			console.log('got this: ', v);
			if (!('error' in safe_parsed)) {
				throw new Error("This won't happen");
			}
			throw safe_parsed.error;
		}
	};

	const ostrp = (v: unknown, loc: string) => {
		const str = strp(v, loc);
		if (str === '') {
			return undefined;
		} else {
			return str;
		}
	};
	const arrp = z.array(z.string()).parse;
	const lite =
		<T extends string>(lst: T[], loc: string) =>
		(v: unknown) => {
			if (lst.includes(strp(v, loc) as T)) {
				return v as T;
			}
			throw new Error(`Expected one of ${lst.join(', ')} was ${v} at ${loc}`);
		};
	const clite =
		<T extends string>(lst: T[], loc: string) =>
		(v: unknown) => {
			if (lst.length === 0) {
				throw new Error('List is empty');
			}
			const val = strp(v, loc);
			const similarities = lst.map(
				(l, i) => [i, compareTwoStrings(val.toLowerCase(), l.toLowerCase())] as [number, number]
			);
			const max = maxBy(similarities, ([, s]) => s);
			if (max === undefined) {
				throw new Error('Internal error');
			}
			if (max[1] < 0.6) {
				throw new Error(
					`Clite prec to low ${max?.[1]}, Expected one of ${lst.join(', ')} was ${val} at ${loc}`
				);
			}
			const max_val = lst[max[0]];
			if (max_val === undefined) {
				throw new Error('Internal error');
			}
			return max_val;
		};

	const anrede_clite = (v: unknown, loc: string) =>
		clite(['herr', 'frau', 'familie', 'firma', 'keine_angabe'], loc)(v);
	const title_clite = clite(
		[
			'Kein_Titel',
			'ING',
			'DIPL.ING',
			'DIPL.KFM',
			'MAG',
			'DR',
			'DR.DR',
			'DR.MAG',
			'HFRT',
			'PROF',
			'MAG.FH',
			'UNIV.PROF',
			'UNIV.DOZ',
			'GRAF',
			'FÜRST',
			'FREIHERR',
			'BARON'
		],
		'titel'
	);

	const abweichende_lieferadresse =
		lite(
			['Ja', 'Nein'],
			'abweichende_lieferadresse'
		)(alt(['Abweichende Lieferadresse gewünscht?', 'gewünscht?'])) === 'Ja'
			? true
			: false;
	const sepa_vorhanden =
		lite(['Ja', 'Nein'], 'sepa_present')(obj['SEPA Bankinformationen vorhanden?']) === 'Ja'
			? true
			: false;

	const [kontoinhaber, kontoinhaber_info] = (() => {
		const kontoinhaber_text = strp(obj['Kontoinhaber'], 'kontoinhaber');
		const kontoinhaber = kontoinhaber_text === 'Abonnent ist Kontoinhaber' ? true : false;
		return [kontoinhaber, kontoinhaber ? undefined : kontoinhaber_text];
	})();
	const empfangsart = clite(
		['satellit', 'internet', 'cabel'],
		'empfangsart'
	)(obj['Ihre Empfangsart']);

	const base_string = strp(obj['In Ihrem Paket inklusive:'], 'base_package_string');

	const process_telephone = (t: string) => {
		t = t.replace(/[^0-9]/g, '');
		if (t.startsWith('4917')) {
			t = t.slice(2);
			t = '0' + t;
		}
		return t;
	};

	const base_package: base_package_set = clite(
		['entertainment', 'entertainmentplus'],
		'base_package'
	)(base_string.split('(')[0]);
	const premium_packages: premium_package_set[] = (() => {
		const options = arrp(obj['(Jahres-Abo, ab dem 13. Monat monatlich kündbar)']).filter(
			(v) => v !== ''
		);
		const premium_string = options[0] ?? panic('No premium string');
		const sect1 = premium_string.split(' --> ')[0] ?? panic('Invalid premium string');
		const package_names = sect1.split(' + ').slice(1);
		const package_clite = clite(['cinema', 'sport', 'bundesliga'], 'premium_package');
		return package_names.map((name) => package_clite(name));
	})();
	const extras: (zubuchoption_id | package_id)[] = (() => {
		const zubuchoptionen_lst = arrp(obj['Sky Zubuchoptionen']);
		const zubuchoptionen_table: Record<string, zubuchoption_id | package_id | undefined> = {
			'HD+ 4 Monate gratis testen (endet automatisch)': 'hdplus4monategratis',
			'Netflix Premium 4K und 4 Geräte Upgrade --> ? 10 mtl.': 'netflixpremium',
			'UHD für die gebuchten Pakete --> ? 5 mtl.': 'uhd',
			// 'DAZN jährlich --> ? 18,99 mtl. (Bestes Preisleistungsverhältnis, 12 Monatsraten)':
			// 	'dazn_yearly',
			'Netflix HD und 2 Geräte Upgrade --> ? 5 mtl.': 'netflixstandard',
			'Netflix 2 Geräte Upgrade --> ? 5 mtl.': 'netflixstandard',
			'HD+ 6 Monate gratis, danach mtl. ? 6 (monatlich kündbar)': 'hdplus',
			'Free TV HD-Senderpaket mit RTL, ProSiebenSat.1, ARD uvm. (automatisch inklusive)': undefined,
			'Multiscreen Option OHNE zusätzliche Hardware (Sky Q App benötigt / inkl. Sky Go Plus) --> ? 15 mtl.':
				'multiscreen',
			'18+ für Blue Movie --> ? 0, einmalige Versandpauschale 18+ PIN': 'plus18',
			'Sky Go Plus (auf 3 Geräten gleichzeitig streamen und herunterladen) --> ? 5 mtl.':
				'skygoplus',
			'Sky Kids --> ? 5 mtl.': 'kids',
			'2. Sky Q Receiver inkl. Multiscreen --> ? 15 mtl. + ? 49 einmalig': 'multiscreen'
		};
		return zubuchoptionen_lst
			.filter((v) => {
				if (!(v in zubuchoptionen_table)) {
					console.log(`Didn't find ${v} in table`);
					return false;
				}
				return zubuchoptionen_table[v] !== undefined;
			})
			.map((v) => zubuchoptionen_table[v]) as zubuchoption_id[];
	})();

	const [straße, hausnummer] = (() => {
		const str = strp(obj.Straße, 'street');
		const num = ostrp(obj.Hausnummer, 'house_number');
		if (num === undefined) {
			const regex = /([0-9][0-9]*([a-zA-Z]|))$/;
			const num_match = regex.exec(str);
			if (num_match === null) {
				return [str, undefined];
			}
			return [str.slice(0, num_match.index).trim(), num_match[0]];
		}
		return [str, num];
	})();

	return {
		...{
			form_name: clite(['Sky-Bestellung-5', 'Sky-Bestellung-4'], 'form_name')(obj.Name),
			anrede: anrede_clite(obj.Anrede, 'anrede'),
			titel: title_clite(obj.Titel),
			vorname: strp(obj.Vorname, 'first_name'),
			nachname: strp(obj.Nachname, 'last_name'),
			straße: straße,
			hausnummer: hausnummer,
			adresszusatz: ostrp(obj.Adresszusatz, 'address_addition'),
			plz: strp(obj.Postleitzahl, 'zip_code'),
			ort: strp(obj.Ort, 'city')
				.toLocaleLowerCase()
				.replace(/[\t-_\(\)\{\}\[\]]/g, ' ')
				.trim()
				.split(' ')
				.at(-1)
		},
		...(abweichende_lieferadresse
			? {
					abweichende_lieferadresse: true as true,
					anrede_liefer: anrede_clite(obj.Anrede_2, 'liefer_anrede'),
					titel_liefer: title_clite(obj.Titel_2),
					vorname_liefer: strp(obj.Vorname_2, 'liefer_first_name'),
					nachname_liefer: strp(obj.Nachname_2, 'liefer_last_name'),
					firma_liefer: ostrp(obj.Firma, 'liefer_company'),
					straße_oder_packstation_liefer: strp(
						obj['Straße oder Packstation'],
						'liefer_street_or_packstation'
					),
					hausnummer_oder_dhl_kundennummer_liefer: strp(
						alt(['Hausnummer oder DHL Kundennummer', 'DHL Kundennummer']),
						'house_number_or_dhl_customer_number'
					),
					adresszusatz_liefer: ostrp(obj.Adresszusatz_2, 'liefer_addition'),
					plz_liefer: strp(obj.Postleitzahl_2, 'liefer_zip_code'),
					ort_liefer: strp(obj.Ort_2, 'liefer_city')
			  }
			: {
					abweichende_lieferadresse: false as false
			  }),
		...{
			geburtsdatum: strp(
				obj['(Das Geburtsdatum muss dem des Abonnenten entsprechen)'],
				'birth_date'
			),
			email: strp(obj['Ihre E-Mail-Adresse'], 'email'),
			telefon: process_telephone(strp(obj['Telefon (Kontaktnummer)'], 'phone')),
			telefon_weitere: strp(obj['Telefon (Weitere)'], 'phone_2')
				.split(',')
				.map((s) => process_telephone(s.trim()))
				.filter((s) => s !== '')
		},
		...(sepa_vorhanden
			? {
					sepa_vorhanden: true as true,
					iban: (() => {
						const iban = strp(obj['IBAN'], 'iban').replace(/\s/g, '').toUpperCase();
						const validation_result = validateIBAN(iban);
						if (validation_result.valid) {
							return iban;
						} else {
							console.log(`Invalid IBAN: ${validation_result.errorCodes.join(', ')}`);
							console.log(`IBAN was ${iban}`);
							return iban;
						}
					})(),
					bic: strp(obj['BIC'], 'bic')
			  }
			: {
					sepa_vorhanden: false as false,
					bankleitzahl: strp(obj['Bankleitzahl (8-stellig)'], 'bank_code'),
					kontonummer: strp(obj.Kontonummer, 'account_number')
			  }),
		...(kontoinhaber
			? {
					kontoinhaber: 'abonnent ist kontoinhaber'
			  }
			: {
					kontoinhaber: 'abonnent ist nicht kontoinhaber',
					kontoinhaber_info: kontoinhaber_info
			  }),
		...(empfangsart === 'cabel'
			? {
					empfangsart: 'cable',
					cable_receiver: strp(obj['Ihr Kabelnetzbetreiber'], 'cable_receiver')
			  }
			: {
					empfangsart
			  }),
		...{
			hardware: 'KEINE',
			payback_number: ostrp(obj['PAYBACK Kundennummer'], 'payback_number'),
			base_package,
			premium_packages,
			zubuchoptionen: extras
		}
	} as SkyFormData;
}

export interface FormEmail extends SentEmail {
	form: SkyFormData;
}
