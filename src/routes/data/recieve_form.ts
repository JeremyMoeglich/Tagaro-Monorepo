import sizeof from 'object-sizeof';
import { SMTPClient, Message } from 'emailjs';
import { SMTP_HOST, SMTP_PASSWORD, SMTP_MAIL, RECEIVER } from '$lib/scripts/backend/Env';

function serializeForm(form: FormData) {
	const obj = {};
	for (const key of form.keys()) {
		obj[key] = form.get(key);
	}
	return obj;
}
interface Kontakt_Form {
	sp_email: string;
	sp_number: string;
	name: string;
	email: string;
	number: string;
	message: string;
}

export async function post({
	request
}: {
	request: Request;
}): Promise<{ status: number; body: string; headers?: Record<string, string> }> {
	const form = await request.formData();
	const bodyobj = serializeForm(form) as Kontakt_Form;
	if (sizeof(bodyobj) > 30000) {
		return {
			status: 413,
			body: 'Too large'
		};
	}
	let is_spam = false;
	console.log(bodyobj);
	Object.entries(bodyobj).forEach(([key, value]) => {
		if (key.startsWith('sp_')) {
			if (value.trim() !== '') {
				is_spam = true;
			}
			delete bodyobj[key];
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
}
