import { get_auth_body } from '$lib/backend_utils';
import type { RequestHandler } from './$types';
import { get_emails } from '$lib/get_emails';
import { get_email_config_schema } from 'emails';
import { z } from 'zod';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const schema = get_email_config_schema.extend({
		since: z.string().optional()
	});
	const fetch_data: z.infer<typeof schema> = await get_auth_body(request, schema);
	const date = new Date(fetch_data.since);
	const forms = await get_emails({
		...fetch_data,
		since: date
	});
	return json(forms);
};
