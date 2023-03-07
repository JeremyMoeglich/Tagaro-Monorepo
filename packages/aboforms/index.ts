import { get_emails } from 'get_emails';
import { FormEmail, to_form_data } from './parse';
import dayjs from 'dayjs';

export async function get_recent_forms(
	config: { cached?: boolean; since?: Date; archived?: boolean; up_to?: number } = {}
): Promise<FormEmail[]> {
	const cached = config.cached ?? true;
	const since = config.since ?? dayjs().subtract(4, 'day').toDate();
	const archived = config.archived ?? false;
	const up_to = config.up_to ?? 10;

	const emails = (
		await get_emails({
			from: 'Sky Abodaten Eingang',
			folder: archived ? 'Sky Aboformulare' : 'INBOX',
			since: since,
			cached: cached,
			max_amount: up_to
		})
	).filter((email) => {
		return (
			email.subject.includes('Ausgefülltes Formular') || email.subject.includes('Submitted form')
		);
	});

	const form_emails = (
		await Promise.all(
			emails.map(async (email) => {
				try {
					const form = to_form_data(email.body);
					return {
						...email,
						form
					};
				} catch (e) {
					//console.error(email.body)
					console.log('to_form_data failed to parse');
					console.error(e);
					return undefined;
				}
			})
		)
	).filter((email) => email !== undefined) as FormEmail[];
	return form_emails;
}
