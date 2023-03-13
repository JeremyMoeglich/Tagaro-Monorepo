import { get_auth_body } from '$lib/backend_utils';
import type { RequestHandler } from './$types';
import { get_emails } from 'get_emails/get';
import { get_email_config_schema } from 'get_emails/types';
import type { z } from 'zod';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const fetch_data: z.infer<typeof get_email_config_schema> = await get_auth_body(
		request,
		get_email_config_schema
	);
	const forms = await get_emails(fetch_data);
	return json(forms);
};
