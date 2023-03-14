import { panic } from 'functional-utilities';
import { GetEmailConfig, SentEmail } from './types';
import { ImapFlow } from 'imapflow';

export async function get_emails(config: GetEmailConfig = {}): SentEmail[] {
	const max_amount = config.max_amount ?? 10; // Maximum number of emails to fetch
	//const mark_as_seen = config.mark_as_seen ?? false; // Whether to mark emails as seen or not
	// const filter = [
	// 	config.subject ? ['SUBJECT', config.subject] : 'ALL',
	// 	config.from ? ['FROM', config.from] : undefined,
	// 	config.since ? ['SINCE', config.since.toISOString()] : undefined
	// ].filter((f) => f !== undefined) as (string | string[])[];
	const folder = config.folder ?? 'INBOX';

	const client = new ImapFlow({
		host: process.env.IMAP_HOST ?? panic('IMAP_HOST environment variable not set'),
		port: 993,
		secure: true,
		auth: {
			user: process.env.IMAP_USERNAME ?? panic('IMAP_USERNAME environment variable not set'),
			pass: process.env.IMAP_PASSWORD ?? panic('IMAP_PASSWORD environment variable not set')
		}
	});

	await client.connect();

	const lock = await client.getMailboxLock(folder);
	try {
		const messages = await client.fetch(
			{
				...config
			},
			{
				bodyParts: []
			}
		);
	} finally {
		lock.release();
	}
}
