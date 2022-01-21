import sizeof from 'object-sizeof';
import { SMTPClient, Message } from 'emailjs';

import { SMTP_HOST, SMTP_PASSWORD, SMTP_MAIL, RECEIVER } from '$lib/scripts/backend/Env';
import type { ReadOnlyFormData } from '@sveltejs/kit/types/helper';
import type { RequestHandler } from '@sveltejs/kit';

function getFormBody(body: ReadOnlyFormData | Uint8Array): { [key: string]: string } {
	return [...body.entries()].reduce((data, [k, v]) => {
		let value: string | boolean | number = v;
		if (value === 'true') value = true;
		if (value === 'false') value = false;
		if (k in data) data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
		else data[k] = value;
		return data;
	}, {});
}

export const post: RequestHandler<
	{},
	Partial<{ email: string; password: string; ['repeat-password']: string }>
> = async ({ request }) => {
	const body = request.body
	if (typeof body !== 'object') {
		return {
			status: 413,
			body: 'Invalid body type'
		};
	}
	const bodyobj = getFormBody();

	if (sizeof(bodyobj) > 30000) {
		return {
			status: 413,
			body: 'Too large'
		};
	}
	let is_spam = false;
	console.log(bodyobj);
	Object.entries(bodyobj).forEach((element) => {
		if (element[0].startsWith('sp_')) {
			if (element[1].trim() !== '') {
				is_spam = true;
			}
			delete bodyobj[element[0]];
		}
	});
	if (is_spam) {
		console.log('blocked spam');
		return {
			status: 413,
			body: 'Blocked because Spam'
		};
	}
	const client = new SMTPClient({
		user: SMTP_MAIL,
		password: SMTP_PASSWORD,
		host: SMTP_HOST,
		ssl: true
	});

	const message_body = Object.keys(bodyobj)
		.map((k) => k + ' - ' + bodyobj[k])
		.join('\n\n');

	const mailOptions = new Message({
		from: SMTP_MAIL,
		to: RECEIVER,
		subject: 'Kontaktformular von ' + bodyobj.name,
		text: message_body
	});
	try {
		const message = await client.sendAsync(mailOptions);
		console.log(message);
	} catch (err) {
		console.log(err);
	}
	return {
		headers: { Location: '/kontakt/success' },
		status: 302,
		body: 'Email sent'
	};
};
