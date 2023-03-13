import { get_request_body } from '$lib/backend_utils';
import { panic } from 'functional-utilities';
import type { RequestHandler } from './$types';
import { z } from 'zod';
import { json, error } from '@sveltejs/kit';
import { prisma } from 'db';
import { v4 } from 'uuid';

const password = process.env.PASSWORD ?? panic('PASSWORD is not set');

export const POST: RequestHandler = async ({ request }) => {
	const body = await get_request_body(request, z.object({ password: z.string() }));
	if (body.password !== password) {
		throw error(401, 'Invalid password');
	}
	const token = await prisma.loginToken.create({
		data: {
			value: v4()
		}
	});

	return json({ token: token.value });
};
