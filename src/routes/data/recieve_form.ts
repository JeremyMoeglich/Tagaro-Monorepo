import sizeof from 'object-sizeof';
import { SMTPClient, Message } from 'emailjs';

import { SMTP_HOST, SMTP_PASSWORD, SMTP_MAIL, RECEIVER } from '$lib/Env';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

function getFormBody(body) {
	return [...body.entries()].reduce((data, [k, v]) => {
		let value = v;
		if (value === 'true') value = true;
		if (value === 'false') value = false;
		if (k in data) data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
		else data[k] = value;
		return data;
	}, {});
}

export async function post({ body }) {
	const bodyobj = getFormBody(body);

	if (sizeof(bodyobj) > 30000) {
		return {
			status: 413,
			body: 'Too large'
		};
	}
	console.log(bodyobj);
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
		status: 302
	};
}
