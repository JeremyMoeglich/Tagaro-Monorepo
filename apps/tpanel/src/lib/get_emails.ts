// Import modules
import { ImapFlow } from 'imapflow';
import { panic } from 'functional-utilities';
import PkgCache from 'file-system-cache';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cache = 'default' in PkgCache ? ((PkgCache as any).default as typeof PkgCache) : PkgCache;
import type { JsonEq } from 'types';
// import { writeFile } from 'fs/promises';
import type { GetEmailConfig, SentEmail } from 'emails';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg_iconv from 'iconv-lite';
import type * as iconv_types from 'iconv-lite';
const iconv = pkg_iconv as typeof iconv_types;

async function get_imap_connection(): Promise<ImapFlow> {
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

	return client;
}

export async function get_emails(config: GetEmailConfig = {}): Promise<SentEmail[]> {
	const cache = Cache();

	const cache_key = [
		'emails',
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

async function async_generator_to_array<T>(gen: AsyncGenerator<T>): Promise<T[]> {
	const arr: T[] = [];
	for await (const item of gen) {
		arr.push(item);
	}
	return arr;
}

function decode_mime(str: string): string {
	// Extract message content
	const match = str.match(/Content-Transfer-Encoding: quoted-printable\r\n\r\n([\s\S]*)/);
	const messageContent = match[1];

	// Replace encoded characters with their Unicode equivalents
	const decodedContent = messageContent.replace(/=([\dA-F]{2})/g, (match, p1) =>
		String.fromCharCode(parseInt(p1, 16))
	);

	// Decode message content from iso-8859-1 to UTF-8
	const messageBuffer = Buffer.from(decodedContent, 'binary');
	const decodedBuffer = iconv.decode(messageBuffer, 'iso-8859-1');

	// Convert decoded content to a JavaScript string
	const messageString = decodedBuffer.toString();

	return messageString;
}

// Define function
async function uncached_get_emails(config: GetEmailConfig = {}): Promise<SentEmail[]> {
	const client = await get_imap_connection();

	const lock = await client.getMailboxLock(config.folder ?? 'INBOX');
	try {
		const part = 'text';
		const messages = client.fetch(
			{
				...config
			},
			{
				envelope: true,
				flags: true,
				bodyParts: [part]
			}
		);

		return (await async_generator_to_array(messages)).map((message) => ({
			body: decode_mime((message.bodyParts.get(part) ?? panic(`No ${part} body`)).toString()),
			date: message.envelope.date ?? panic('No date'),
			seen: message.flags.has('\\Seen'),
			subject: message.envelope.subject ?? panic('No subject')
		}));
	} finally {
		lock.release();
		client.close();
	}
}

export interface Folder {
	name: string;
	attribs: string[];
}

// export async function get_folders(): Promise<Folder[]> {
// 	// Create a new IMAP connection using environment variables
// 	const imapConnection = get_imap_connection();

// 	// Wrap IMAP connection in a promise
// 	return new Promise((resolve, reject) => {
// 		// Handle errors
// 		imapConnection.on('error', (err: unknown) => {
// 			imapConnection.end(); // Close connection
// 			reject(err);
// 		});

// 		// Open connection
// 		imapConnection.once('ready', () => {
// 			// Open INBOX folder
// 			imapConnection.getBoxes((err, boxes) => {
// 				if (err) {
// 					imapConnection.end(); // Close connection
// 					reject(err);
// 				} else {
// 					const folders: Folder[] = [];
// 					for (const [name, box] of Object.entries(boxes)) {
// 						folders.push({ name, attribs: box.attribs });
// 					}
// 					imapConnection.end(); // Close connection
// 					resolve(folders);
// 				}
// 			});
// 		});

// 		imapConnection.connect(); // Connect to IMAP server
// 	});
// }
