import { get_auth_body } from '$lib/backend_utils';
import type { RequestHandler } from './$types';
import { get_recent_forms, get_recent_forms_schema } from 'get_aboforms/get';
import type { z } from 'zod';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const fetch_data: z.infer<typeof get_recent_forms_schema> = await get_auth_body(
		request,
		get_recent_forms_schema
	);
	const forms = await get_recent_forms(fetch_data);
	return json(forms);
};
