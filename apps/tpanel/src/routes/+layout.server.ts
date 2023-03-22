import { validate_token } from '$lib/backend_utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('token');
	if (!token) {
		return false;
	}
	const valid = await validate_token(token);
	return {
		logged_in: valid
	};
};
