import { get_recent_forms } from 'aboforms';
import { SkyFormData } from 'aboforms/form_data';
import inquirer from 'inquirer';
import { generate_form_response_email } from '../../packages/aboforms_resolve_resp';
import dayjs from 'dayjs';
import fs from 'fs/promises';

(async () => {
	const forms = await get_recent_forms({
		archived: true,
		cached: true,
		since: dayjs().subtract(1, 'months').toDate(),
		up_to: 30
	});
	const form: SkyFormData = (
		await inquirer.prompt([
			{
				type: 'list',
				name: 'form',
				message: 'Select a form',
				choices: forms.map((form) => ({
					name: form.form.email,
					value: form
				}))
			}
		])
	).form.form;

	console.log(form);
	const email = generate_form_response_email(form, {
		sky_kundennummer: '123456789',
		sky_vertragsnummer: '123456789',
		vertragsbeginn: dayjs('2023-03-06').toDate()
	});
	console.log(email);
	await fs.writeFile('temp/email.html', email.body.replace(/\n/g, '<br/>'));
})();
