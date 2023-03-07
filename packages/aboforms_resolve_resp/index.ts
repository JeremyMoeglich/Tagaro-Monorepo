import { SkyFormData } from 'aboforms/form_data';
import { indexed_assets } from 'asset_library/all_assets';
import { bonus, get_price, get_price_string, to_price_string } from 'asset_library/prices';
import { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';
import { UnsentEmail } from 'get_emails';
import dayjs from 'dayjs';
import { package_id } from 'asset_library/assets/packages';
import { typed_keys } from 'functional-utilities';

const all_extras = {
	dazn_yearly: `DAZN jährlich zum monatlichen Preis von zuzüglich ${get_price_string(
		['dazn_yearly'],
		'jahr'
	)}`,
	dazn_monthly: `DAZN monatlich zum monatlichen Preis von zuzüglich ${get_price_string(
		['dazn_monthly'],
		'monat'
	)}`,
	uhd: `UHD für die gebuchten Pakete zum monatlichen Preis von zuzüglich ${get_price_string(
		['uhd'],
		'monat'
	)}`,
	hdplus: `HD+ 6 Monate gratis, danach zum monatlichen Preis von zuzüglich ${get_price_string(
		['hdplus'],
		'monat'
	)}`,
	multiscreen: `Multiscreen Option inkl. Sky Go Plus zum monatlichen Preis von ${get_price_string(
		['multiscreen'],
		'monat'
	)}`,
} satisfies Partial<Record<zubuchoption_id, string>>;

const map_empfangsart = (empfangsart: SkyFormData['empfangsart']): string =>
({
	cable: 'Kabel',
	satellit: 'Sat',
	internet: 'Internet'
}[empfangsart]);

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
	const includes_dazn = extra_keys.includes('dazn_monthly') || extra_keys.includes('dazn_yearly');
	const sky_assets = [
		...package_ids,
		...form.zubuchoptionen.filter((z) => (['uhd', 'multiscreen'] as zubuchoption_id[]).includes(z))
	];
	const subject = `Sky Auftragsbestätigung für ${[
		...package_ids,
		...extra_keys.filter((k) => ['dazn_monthly', 'dazn_yearly', 'uhd'].includes(k))
	]
		.map((a) => (a === 'dazn_monthly' || a === 'dazn_yearly' ? 'DAZN' : indexed_assets[a].name))
		.join(' + ')} (${map_empfangsart(form.empfangsart)}${form.zubuchoptionen.includes('multiscreen') ? ' Multiscreen' : ''
		})`;

	let body = `Sehr geehrter ${form.anrede === 'keine_angabe' ? form.vorname : capitalize(form.anrede)
		} ${form.nachname},\n\n\n`;

	const extras = extra_keys.map((k) => all_extras[k]);

	body += `wir freuen uns Ihnen mitteilen zu können, dass Ihr Auftrag für das Sky Abo inklusive ${package_ids.length === 1 ? 'dem' : ''} ${package_ids
		.map((p) => indexed_assets[p].name)
		.join(' + ')} ${package_ids.length === 1 ? 'Paket' : ''} ${form.zubuchoptionen.includes('uhd') ? '' : 'inkl. HD'
		} ${extras.length === 0 ? '' : `zum monatlichen Preis von ${get_price_string(package_ids, 'jahr')}`
		} erfolgreich von uns angemeldet werden konnte.\n\n`;

	if (extras.length !== 0) {
		body += 'Ihre gewählten Extras:\n';
		body += extras.map((e) => `- ${e}`).join('\n');
		body += `\n\n`;
	}

	if (form.zubuchoptionen.includes('multiscreen')) {
		body += `Dazu erhalten Sie einen mietfreien Sky Q UHD Receiver für einmalig € 0 sowie die benötigte Smartcard für Ihr Wunschprogramm.\n`;
		body += `Darüber hinaus erhalten Sie einen 2. Sky Q UHD Receiver für einmalig € 49 mit der Multiscreen Option inkl. Sky Go Plus zum monatlichen Preis von € 10.\n\n`;
	}

	{
		body += `Ihr Vertrag hat eine Laufzeit von 12 Monaten zum monatlichen `;
		if (form.zubuchoptionen.includes('hdplus') || form.zubuchoptionen.includes('uhd')) {
			body += `Gesamtpreis`;
		} else {
			body += "Preis"
		}
		body += ` von ${get_price_string(sky_assets, 'jahr')}${!form.zubuchoptionen.includes('hdplus')
			? ''
			: ` in den ersten 6 Monaten sowie ${to_price_string(
				get_price(removed(sky_assets, 'hdplus')).jahr + get_price(['hdplus']).monat
			)} ab dem 7. Monat`
			}${!includes_dazn
				? ''
				: ` für Sky Inhalte zuzüglich ${form.zubuchoptionen.includes('dazn_yearly')
					? get_price_string(['dazn_yearly'], 'jahr')
					: get_price_string(['dazn_monthly'], 'jahr')
				} monatlich für DAZN Programme`
			}.\n\n`;
	}

	if (form.empfangsart === 'internet') {
		body += `Das Free TV HD-Senderpaket mit RTL, ProSiebenSat.1, ARD uvm. ist inklusive.\n\n`;
	}

	body += `Wird das Abo nicht 1 Monat vor Ende der Vertragslaufzeit gekündigt, verlängert es sich automatisch jeweils um 1 MONAT zum monatlichen Preis von ${get_price_string(
		sky_assets,
		'monat'
	)}${!includes_dazn
		? ''
		: ` für Sky Inhalte zuzüglich DAZN monatlich von ${form.zubuchoptionen.includes('dazn_yearly')
			? get_price_string(['dazn_yearly'], 'monat')
			: get_price_string(['dazn_monthly'], 'monat')
		}`
		}.\n\n`;

	body += `Ihre Empfangsart ist ${map_empfangsart(form.empfangsart)}${form.empfangsart === 'cable' &&
		remove_brackets(form.cable_receiver) !== 'Automatische Ermittlung'
		? ` über ${remove_brackets(form.cable_receiver)}`
		: ''
		}.\n\n`;

	if (form.payback_number) {
		body += `Ihre PAYBACK Nummer wurde eingetragen.\n\n`;
	}

	body += `Ihre Sky-Vertragsnummer lautet: ${register.sky_vertragsnummer}\n`;
	body += `Ihre Sky-Kundennummer lautet: ${register.sky_kundennummer}\n\n`;

	if (form.empfangsart === 'internet') {
		body += `Dazu erhalten Sie eine mietfreie Sky Q IPTV Box für einmalig € 0.\n\n`;
	} else {
		body += `Dazu erhalten Sie einen mietfreien Sky Q UHD Receiver für einmalig € 0 sowie die benötigte Smartcard für Ihr Wunschprogramm.\n\n`;
	}

	const widerruf_end_date = dayjs(register.vertragsbeginn)
		.add(13, 'day')
		.toDate()
		.toLocaleDateString('de-DE');

	body += dedent(/*html*/ `
		<b>Die Lieferung erfolgt täglich direkt von Sky an Ihre angegebene ${form.abweichende_lieferadresse ? "abweichende Lieferadresse" : "Adresse"}${form.abweichende_lieferadresse && (() => {
			if (!form.hausnummer_oder_dhl_kundennummer_liefer) {
				return false
			}

			const shortened = form.hausnummer_oder_dhl_kundennummer_liefer.trim();
			if (shortened.length <= 5) {
				return false
			}
			if (!parseInt(shortened)) {
				return false
			}
			return true
		})() ? " (Packstation)" : ""}.</b>
		<b>Bei Fragen zum Versandstatus können Sie Sky unter der Kundenhotline 089 - 99 72 79 00 kontaktieren (gebührenfrei).</b>

		<b>Dazu erhalten Sie von uns nach ca. 8 Wochen einen Bonus von € ${bonus} auf Ihr Konto überwiesen.</b>

		Sie haben für dieses Sky Abonnement ein Widerrufsrecht von 14 Tagen ab Vertragsschluss. Dieses können Sie schriftlich bis spätestens ${widerruf_end_date} direkt bei uns als Fachhändler in Anspruch nehmen.
		Ein Widerruf direkt bei Sky ist bei einem Fachhandels-Abonnement nicht möglich. Bitte wenden Sie sich im Falle eines Rücktrittswunsch somit spätestens bis zum ${widerruf_end_date} an uns.

		Wir wünschen Ihnen schon jetzt gute Unterhaltung mit Ihrem Wunschprogramm und bedanken uns recht herzlich für das entgegengebrachte Vertrauen! 
	`);

	body += "\n\n"

	if (form.form_name === 'Sky-Bestellung-4') {
		body += dedent(/*html*/ `
			Eine positive Bewertung wurde soeben abgegeben. Wir möchten Sie ebenso dazu einladen, uns bei eBay positiv zu bewerten, wenn Sie am Ende mit allem zufrieden waren.
			Dies würde uns sehr helfen!

			Loggen Sie sich dafür einfach in Ihr Mein eBay Konto ein und suchen Sie die passende Transaktion raus:
			<a href="https://www.ebay.de/mye/myebay/purchase">https://www.ebay.de/mye/myebay/purchase</a>
		`);
	}

	body += `\n\nVielen Dank!\n\n\n`;

	body += dedent(/*html*/ `
		<b>Mit freundlichen Grüßen</b>

		<b>Ihr TAGARO Team</b>

		TAGARO Medienshop - Möglich & Möglich GbR / Großer Sandweg 32 / 59065 Hamm
		Telefon 02381 987 46 99 / Fax 0321 21 11 65 58 
	`);

	return {
		body: body.replace(/\n/g, '<br>').trim(),
		subject
	};
}
