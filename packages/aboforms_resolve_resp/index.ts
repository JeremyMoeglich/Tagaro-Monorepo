import type { SkyFormData } from 'aboforms/form_data';
import { indexed_assets } from 'asset_library/all_assets';
import { bonus, get_price, get_price_string, to_price_string } from 'asset_library/prices';
import type { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';
import type { UnsentEmail } from 'emails';
import dayjs from 'dayjs';
import type { package_id } from 'asset_library/assets/packages';
import { typed_keys } from 'functional-utilities';
import { asset_id } from 'asset_library/asset_types';

const all_extras = {
	dazn_unlimited: `DAZN Unlimited zum monatlichen Preis von zuzüglich ${get_price_string(
		['dazn_unlimited'],
		'jahr'
	)}`,
	uhd: `UHD für die gebuchten Pakete zum monatlichen Preis von zuzüglich ${get_price_string(
		['uhd'],
		'jahr'
	)}`,
	hdplus: `HD+ 6 Monate gratis, danach zum monatlichen Preis von zuzüglich ${get_price_string(
		['hdplus'],
		'jahr'
	)}`,
	multiscreen: `Multiscreen Option inkl. Sky Go Plus zum monatlichen Preis von ${get_price_string(
		['multiscreen'],
		'jahr'
	)}`,
	netflixstandard: `Netflix 2 Geräte Upgrade zum monatlichen Preis von ${get_price_string(
		['netflixstandard'],
		'jahr'
	)}`,
	netflixpremium: `Netflix Premium 4K und 4 Geräte Upgrade zum monatlichen Preis von ${get_price_string(
		['netflixpremium'],
		'jahr'
	)}`,
	skygoplus: `Sky Go Plus zum monatlichen Preis von ${get_price_string(['skygoplus'], 'jahr')}`,
	trendsports: `trendSports zum monatlichen Preis von ${get_price_string(['trendsports'], 'jahr')}`,
	plus18: `18+ Option für Blue Movie`
} satisfies Partial<Record<zubuchoption_id, string>>;

const map_empfangsart = (empfangsart: SkyFormData['empfangsart']): string =>
	({
		cable: 'Kabel',
		satellit: 'Sat',
		internet: 'Internet'
	})[empfangsart];

function capitalize(str: string): string {
	// maps the first letter of each word to uppercase
	// example: "hello world" -> "Hello World"
	const words = str.split(' ');
	return words.map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

function remove_brackets(str: string): string {
	// removes all brackets and their contents from a string and trims the result
	// example: "hello (world)" -> "hello"
	return str.replace(/\s*\([^)]*\)/g, '').trim();
}

function dedent(str: string): string {
	// removes the common indentation from a multiline string
	// tabs are treated as 4 spaces
	// example:
	// 	`
	// 		hello
	//
	// 			world
	// 	`
	// becomes:
	// 	`hello
	//
	// 		world`

	// Split the string into lines
	const lines = str.split('\n');

	// Remove the first and last line if they are blank
	if (lines[0].trim() === '') {
		lines.shift();
	}
	if (lines[lines.length - 1].trim() === '') {
		lines.pop();
	}

	// Find the minimum indentation
	let minIndent = Infinity;
	for (const line of lines) {
		if (line.trim() === '') {
			continue;
		}
		const indent = line.search(/\S/);
		if (indent < minIndent) {
			minIndent = indent;
		}
	}

	// Remove the common indentation from each line
	const result = lines.map((line) => line.slice(minIndent)).join('\n');
	return result;
}

export interface RegisterInfo {
	sky_vertragsnummer: string;
	sky_kundennummer: string;
	vertragsbeginn: Date;
}

function removed<T>(list: T[], remove: T): T[] {
	return list.filter((item) => item !== remove);
}

export function generate_form_response_email(
	form: SkyFormData,
	register: RegisterInfo
): UnsentEmail {
	// \n is replaced with <br/> afterwards
	const package_ids: package_id[] = [form.base_package, ...form.premium_packages];
	const extra_keys = (form.zubuchoptionen as (keyof typeof all_extras)[]).filter((z) =>
		typed_keys(all_extras).includes(z)
	);
	const includes_dazn = extra_keys.includes('dazn_unlimited');
	const sky_assets = [
		...package_ids,
		...form.zubuchoptionen.filter((z) =>
			(['uhd', 'multiscreen', 'hdplus'] as (zubuchoption_id | package_id)[]).includes(z)
		)
	];
	const subject = `Sky Auftragsbestätigung für ${[
		...package_ids,
		...extra_keys.filter((k) => (['dazn_unlimited', 'uhd'] as asset_id[]).includes(k))
	]
		.map((a) => (a === 'dazn_unlimited' ? 'DAZN' : indexed_assets[a].name))
		.join(' + ')} (${map_empfangsart(form.empfangsart)}${
		form.zubuchoptionen.includes('multiscreen') ? ' Multiscreen' : ''
	})`;

	let body = `Sehr geehrter ${
		form.anrede === 'keine_angabe' ? form.vorname : capitalize(form.anrede)
	} ${form.nachname},\n\n\n`;

	const extras = extra_keys.map((k) => all_extras[k]);

	body += `wir freuen uns dir mitteilen zu können, dass dein Auftrag für das Sky Abo inklusive ${
		package_ids.length === 1 ? 'dem' : ''
	} ${package_ids.map((p) => indexed_assets[p].name).join(' + ')} ${
		package_ids.length === 1 ? 'Paket' : ''
	} ${form.zubuchoptionen.includes('uhd') ? '' : 'inkl. HD'} ${
		extras.length === 0 ? '' : `zum monatlichen Preis von ${get_price_string(package_ids, 'jahr')}`
	} erfolgreich von uns angemeldet werden konnte.\n\n`;

	if (extras.length !== 0) {
		body += 'Deine gewählten Extras:\n';
		body += extras.map((e) => `- ${e}`).join('\n');
		body += `\n\n`;
	}

	if (form.zubuchoptionen.includes('multiscreen')) {
		body += `Dazu erhältst du einen mietfreien Sky Q UHD Receiver für einmalig € 0 sowie die benötigte Smartcard für dein Wunschprogramm.\n`;
		const multiscreen_extras = (
			[
				'multiscreen_extra_qmini_1',
				'multiscreen_extra_qmini_2',
				'multiscreen_extra_quhd'
			] satisfies zubuchoption_id[]
		).filter((z) => form.zubuchoptionen.includes(z));
		body += `Darüber hinaus erhältst du `;
		if (multiscreen_extras.length !== 0) {
			if (multiscreen_extras.includes('multiscreen_extra_quhd')) {
				body += `einen 2. Sky Q UHD Receiver für einmalig ${get_price_string(
					['multiscreen_extra_quhd'],
					'singular'
				)} `;
			}
			if (multiscreen_extras.length >= 2) {
				body += `sowie `;
			}
			if (multiscreen_extras.includes('multiscreen_extra_qmini_1')) {
				body += `eine Sky Q Mini für einmalig ${get_price_string(
					['multiscreen_extra_qmini_1'],
					'singular'
				)} `;
			} else if (multiscreen_extras.includes('multiscreen_extra_qmini_2')) {
				body += `2 Sky Q Mini für einmalig ${get_price_string(
					['multiscreen_extra_qmini_2'],
					'singular'
				)} `;
			}
			body += `mit der `;
		} else {
			body += `die `;
		}
		body += `Multiscreen Option inkl. Sky Go Plus zum monatlichen Preis von ${get_price_string(
			['multiscreen'],
			'jahr'
		)}.\n\n`;
	}

	{
		body += `Dein Vertrag hat eine Laufzeit von 12 Monaten zum monatlichen `;
		if (form.zubuchoptionen.includes('hdplus') || form.zubuchoptionen.includes('uhd')) {
			body += `Gesamtpreis`;
		} else {
			body += 'Preis';
		}
		body += ` von ${get_price_string(sky_assets, 'jahr')}${
			!form.zubuchoptionen.includes('hdplus')
				? ''
				: ` in den ersten 6 Monaten sowie ${to_price_string(
						get_price(removed(sky_assets, 'hdplus')).jahr + get_price(['hdplus']).monat
				  )} ab dem 7. Monat`
		}${
			!includes_dazn
				? ''
				: ` für Sky Inhalte zuzüglich ${get_price_string(
						['dazn_unlimited'],
						'jahr'
				  )} monatlich für DAZN Programme`
		}.\n\n`;
	}

	if (form.empfangsart === 'internet') {
		body += `Das Free TV HD-Senderpaket mit RTL, ProSiebenSat.1, ARD uvm. ist inklusive.\n\n`;
	}

	body += `Wird das Abo nicht 1 Monat vor Ende der Vertragslaufzeit gekündigt, verlängert es sich automatisch jeweils um 1 MONAT zum monatlichen Preis von ${get_price_string(
		sky_assets,
		'monat'
	)}${
		!includes_dazn
			? ''
			: ` für Sky Inhalte zuzüglich DAZN monatlich von ${get_price_string(
					['dazn_unlimited'],
					'monat'
			  )}`
	}.\n\n`;

	body += `Deine Empfangsart ist ${map_empfangsart(form.empfangsart)}${
		form.empfangsart === 'cable' &&
		remove_brackets(form.cable_receiver) !== 'Automatische Ermittlung'
			? ` über ${remove_brackets(form.cable_receiver)}`
			: ''
	}.\n\n`;

	if (form.payback_number) {
		body += `Deine PAYBACK Nummer wurde eingetragen.\n\n`;
	}

	body += `Deine Sky-Vertragsnummer lautet ${register.sky_vertragsnummer}.\n`;
	body += `Deine Sky-Kundennummer lautet ${register.sky_kundennummer}.\n\n`;

	if (form.empfangsart === 'internet') {
		body += `Dazu erhältst du eine mietfreie Sky Q IPTV Box für einmalig € 0.\n\n`;
	} else {
		body += `Dazu erhältst du einen mietfreien Sky Q UHD Receiver für einmalig € 0 sowie die benötigte Smartcard für dein Wunschprogramm.\n\n`;
	}

	const widerruf_end_date = dayjs(register.vertragsbeginn)
		.add(13, 'day')
		.toDate()
		.toLocaleDateString('de-DE');

	body += dedent(/*html*/ `
		<b>Die Lieferung erfolgt täglich direkt von Sky an deine angegebene ${
			form.abweichende_lieferadresse ? 'abweichende Lieferadresse' : 'Adresse'
		}${
			form.abweichende_lieferadresse &&
			(() => {
				if (!form.hausnummer_oder_dhl_kundennummer_liefer) {
					return false;
				}

				const shortened = form.hausnummer_oder_dhl_kundennummer_liefer.trim();
				if (shortened.length <= 5) {
					return false;
				}
				if (!parseInt(shortened)) {
					return false;
				}
				return true;
			})()
				? ' (Packstation)'
				: ''
		}.</b>
		<b>Bei Fragen zum Versandstatus kannst du Sky unter der Kundenhotline 089 - 99 72 79 00 kontaktieren (gebührenfrei).</b>

		<b>Dazu erhältst du von uns nach ca. 8 Wochen einen Bonus von € ${bonus} auf dein Konto überwiesen.</b>

		Du hast für dieses Sky Abonnement ein Widerrufsrecht von 14 Tagen ab Vertragsschluss. Dieses kannst du schriftlich bis spätestens ${widerruf_end_date} direkt bei uns als Fachhändler in Anspruch nehmen.
		Ein Widerruf direkt bei Sky ist bei einem Fachhandels-Abonnement nicht möglich. Bitte wende dich im Falle eines Rücktrittswunsch somit spätestens bis zum ${widerruf_end_date} an uns.

		Wir wünschen dir schon jetzt gute Unterhaltung mit deinem Wunschprogramm und bedanken uns recht herzlich für das entgegengebrachte Vertrauen! 
	`);

	body += '\n\n';

	if (form.form_name === 'Sky-Bestellung-4') {
		body += dedent(/*html*/ `
			Eine positive Bewertung wurde soeben abgegeben. Wir möchten dich ebenso dazu einladen, uns bei eBay positiv zu bewerten, wenn du am Ende mit allem zufrieden waren.
			Dies würde uns sehr helfen!

			Logge dich dafür einfach in dein Mein eBay Konto ein und suche dir die passende Transaktion raus:
			<a href="https://www.ebay.de/mye/myebay/purchase">https://www.ebay.de/mye/myebay/purchase</a>
		`);
	}

	body += `\n\nVielen Dank!\n\n\n`;

	body += dedent(/*html*/ `
		<b>Mit freundlichen Grüßen</b>

		<b>Dein TAGARO Team</b>

		TAGARO Medienshop - Möglich & Möglich GbR / Großer Sandweg 32 / 59065 Hamm
		Telefon 02381 987 46 99 / Fax 0321 21 11 65 58 
	`);

	return {
		body: body.replace(/\n/g, '<br>').trim(),
		subject
	};
}
