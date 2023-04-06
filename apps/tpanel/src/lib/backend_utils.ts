import type { z } from 'zod';
import type { ZodObjectAny } from './zod_utils';
import { error } from '@sveltejs/kit';
import type { JsonValue } from 'type-fest';
import { prisma } from 'db';
import { parse } from 'cookie';
import dayjs from 'dayjs';
import { expire } from 'open_constants';

export async function get_request_body<T extends ZodObjectAny>(
	request: Request,
	schema: T
): Promise<z.infer<T>> {
	const body = await get_body(request);
	const parsed = schema.safeParse(body);
	if (parsed.success) {
		return parsed.data;
	} else {
		throw error(400, `Invalid request body: ${parsed.error.message}`);
	}
}

export async function get_body(request: Request): Promise<JsonValue> {
	const decoded_body = await request.text();
	try {
		const body: JsonValue = JSON.parse(decoded_body.trim() ? decoded_body : '{}');
		if (typeof body !== 'object') {
			throw error(400, 'Not an object');
		}
		return body;
	} catch (_) {
		throw error(400, 'Invalid JSON');
	}
}

export async function validate_token(token_value: string): Promise<boolean> {
	const create_time = (
		await prisma.loginToken.findUnique({
			where: {
				value: token_value
			},
			select: {
				create_time: true
			}
		})
	)?.create_time;
	if (!create_time) {
		return false;
	}

	if (dayjs().diff(create_time, 'weeks') > expire.weeks) {
		prisma.loginToken.delete({
			where: {
				value: token_value
			}
		});
		return false;
	}

	return true;
}

export async function ensure_login(request: Request): Promise<void> {
	const cookies = parse(request.headers.get('cookie') ?? '');
	if (!cookies.token) {
		throw error(401, 'Not logged in');
	}
	if (!(await validate_token(cookies.token))) {
		throw error(401, 'Invalid token');
	}

	return;
}

export async function get_auth_body(
	request: Request,
	schema: ZodObjectAny
): Promise<z.infer<typeof schema>> {
	await ensure_login(request);
	return await get_request_body(request, schema);
}
