// Import modules
import { default as Imap } from 'imap';
import * as mailparser from 'mailparser';
import { error } from 'functional-utilities';
import Cache from 'file-system-cache';
import { JsonEq } from 'types';

// Define interface types
interface GetEmailConfig {
	max_amount?: number;
	mark_as_seen?: boolean;
	subject?: string;
	folder?: string;
	from?: string;
	since?: Date;
	cached?: boolean;
}

export interface UnsentEmail {
	subject: string;
	body: string;
}

export interface SentEmail extends UnsentEmail {
	seen: boolean;
	date: Date;
}

const cache = Cache();

function get_imap_connection(): Imap {
	// Create a new IMAP connection using environment variables
	return new Imap({
		user: process.env.IMAP_USERNAME ?? error('IMAP_USERNAME environment variable not set'),
		password: process.env.IMAP_PASSWORD ?? error('IMAP_PASSWORD environment variable not set'),
		host: process.env.IMAP_HOST ?? error('IMAP_HOST environment variable not set'),
		port: 993,
		tls: true
	});
}

const default_amount = 10;

export async function get_emails(config: GetEmailConfig = {}): Promise<SentEmail[]> {
	const cache_key = [
		'emails',
		config.max_amount ?? default_amount,
		config.subject ?? 'ALL',
		config.folder ?? 'INBOX',
		config.from ?? 'ALL'
	].join('_');

	const new_value = async () => {
		const returned = await uncached_get_emails(config);
		console.log(`Caching ${returned.length} emails with key ${cache_key}`);
		await cache.set(cache_key, returned);
		return returned;
	};

	if (!config.cached) {
		return new_value();
	}

	const cached_value = (await cache.get(cache_key)) as JsonEq<SentEmail[]> | undefined;
	if (cached_value) {
		console.log(`Returning ${cached_value.length} emails from cache with key ${cache_key}`);
		const reconstructed = cached_value.map((email) => ({
			...email,
			date: new Date(email.date)
		}));
		return reconstructed;
	}

	return new_value();
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Define function
async function uncached_get_emails(config: GetEmailConfig = {}): Promise<SentEmail[]> {
	// Set default values for config parameters
	const max_amount = config.max_amount ?? 10; // Maximum number of emails to fetch
	const mark_as_seen = config.mark_as_seen ?? false; // Whether to mark emails as seen or not
	const filter = [
		config.subject ? ['SUBJECT', config.subject] : 'ALL',
		config.from ? ['FROM', config.from] : undefined,
		config.since ? ['SINCE', config.since.toISOString()] : undefined
	].filter((f) => f !== undefined) as (string | string[])[];
	const folder = config.folder || 'INBOX';

	// Create a new IMAP connection using environment variables
	const imapConnection = get_imap_connection();

	// Wrap IMAP connection in a promise
	return new Promise((resolve, reject) => {
		// Handle errors
		imapConnection.on('error', (err: unknown) => {
			imapConnection.end(); // Close connection
			reject(err);
		});

		// Open connection
		imapConnection.once('ready', () => {
			// Open INBOX folder
			imapConnection.openBox(folder, !mark_as_seen, (err) => {
				if (err) {
					imapConnection.end(); // Close connection
					reject(err);
				} else {
					// Search for emails with subject "Sky Abodaten Eingang"
					imapConnection.search(filter, (err, results) => {
						if (err) {
							imapConnection.end(); // Close connection
							reject(err);
						} else if (results.length === 0) {
							imapConnection.end(); // Close connection
							resolve([]); // No matching emails found
						} else {
							// Fetch matching emails with headers and body
							const fetchOptions = { bodies: '', markSeen: mark_as_seen };
							const get = results.slice(-max_amount);
							console.log(`Fetching ${get.length} emails with filter ${filter}`);
							const fetch = imapConnection.fetch(get, fetchOptions); // Fetch only the last max_amount emails

							// Create an array to store the parsed emails
							const emails: SentEmail[] = [];
							let remaining_tasks = 0;
							const end = () => {
								imapConnection.end(); // Close connection
								resolve(emails.reverse()); // Resolve promise with array of emails
							};
							const check_done = () => {
								if (remaining_tasks === 0) {
									end();
								}
							};

							// Handle each fetched message
							fetch.on('message', (msg, seqno) => {
								let emailBody = ''; // Store the raw email body

								// Handle each message part
								msg.on('body', (stream, info) => {
									stream.on('data', (chunk) => {
										emailBody += chunk.toString('utf8'); // Append chunk to email body
									});
								});

								msg.once('attributes', (attrs) => {
									remaining_tasks += 1;
									mailparser
										.simpleParser(emailBody)
										.then((parsedEmail) => {
											// Extract the title, body and seen status from the parsed email object
											const subject = parsedEmail.subject || '';
											const body = parsedEmail.text || '';
											const seen = attrs.flags.includes('\\Seen');
											const date = new Date(parsedEmail.date || new Date());
											// Push the extracted email data to the array of emails
											emails.push({ subject, body, seen, date });
											remaining_tasks -= 1;
											check_done();
										})
										.catch((err) => {
											console.log('Mailparser error: ' + err);
											end();
										});
								});
							});

							fetch.once('error', (err) => {
								console.log('Fetch error: ' + err);
								end();
							});

							fetch.once('end', () => {
								check_done();
							});
						}
					});
				}
			});
		});

		imapConnection.connect(); // Connect to IMAP server
	});
}

export interface Folder {
	name: string;
	attribs: string[];
}

export async function get_folders(): Promise<Folder[]> {
	// Create a new IMAP connection using environment variables
	const imapConnection = get_imap_connection();

	// Wrap IMAP connection in a promise
	return new Promise((resolve, reject) => {
		// Handle errors
		imapConnection.on('error', (err: unknown) => {
			imapConnection.end(); // Close connection
			reject(err);
		});

		// Open connection
		imapConnection.once('ready', () => {
			// Open INBOX folder
			imapConnection.getBoxes((err, boxes) => {
				if (err) {
					imapConnection.end(); // Close connection
					reject(err);
				} else {
					const folders: Folder[] = [];
					for (const [name, box] of Object.entries(boxes)) {
						folders.push({ name, attribs: box.attribs });
					}
					imapConnection.end(); // Close connection
					resolve(folders);
				}
			});
		});

		imapConnection.connect(); // Connect to IMAP server
	});
}
