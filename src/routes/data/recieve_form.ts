import sizeof from 'object-sizeof';
import nodemailer from 'nodemailer';

import { SMTP_HOST, SMTP_PASSWORD, SMTP_MAIL } from '$lib/Env';


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
	console.log(SMTP_HOST, SMTP_MAIL, SMTP_PASSWORD)
	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		secure: true, // upgrade later with STARTTLS
		auth: {
			user: SMTP_MAIL,
			pass: SMTP_PASSWORD
		}
	});
	console.log("transporter: ", transporter)

	const message_body = Object.keys(bodyobj)
		.map((k) => k + ' - ' + bodyobj[k])
		.join('\n\n');

	console.log("body: ", message_body)

	const mailOptions = {
		from: SMTP_MAIL,
		to: 'jeremy.moeglich@gmail.com',
		subject: 'Kontaktformular von ' + bodyobj.name,
		text: message_body
	};
	console.log("mail_options: ", mailOptions)

	transporter.sendMail(mailOptions, function (error, info) {
		console.log("done?")
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});

	return {
		headers: { Location: '/kontakt/success' },
		status: 302
	};
}
