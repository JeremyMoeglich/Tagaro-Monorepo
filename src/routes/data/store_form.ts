import redis from 'redis';
import sizeof from 'object-sizeof';
import { DB_HOST, DB_PASSWORD, DB_PORT } from '$lib/Env';

const client = redis.createClient({
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT
});

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

function getFormBody(body) {
	return [...body.entries()].reduce((data, [k, v]) => {
		let value = v;
		if (value === 'true') value = true;
		if (value === 'false') value = false;
		if (k in data) data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
		else data[k] = value;
		return data;
	}, {});
}

export async function post({ body }) {
	const bodyobj = getFormBody(body);
	if (sizeof(bodyobj) > 30000) {
		console.log('Too large');
		return {
			body: 'Too large'
		};
	}

	console.log(body);

	//client.lpush("forms", "form_data")

	return {
		headers: { Location: '/kontakt/success' }
	};
}
