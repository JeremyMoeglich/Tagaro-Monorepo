import { z } from 'zod';

export type ZodObjectAny = z.ZodObject<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export function parse_to_date<S extends ZodObjectAny, K extends keyof z.infer<S>>(
	obj: unknown,
	schema: S,
	keys: K[]
): z.infer<S> {
	if (typeof obj !== 'object' || obj === null) {
		throw new Error('Object expected');
	}

	keys.map((key) => {
		if (!(key in obj)) {
			throw new Error(`Key ${String(key)} not in object`);
		}
		if (!(typeof (obj as Record<typeof key, unknown>)[key] === 'string')) {
			throw new Error(`Key ${String(key)} is not a string`);
		}
	});

	const date_data = keys.reduce((acc, key) => {
		acc[key] = new Date((obj as Record<K, string>)[key]);
		return acc;
	}, {} as Record<K, Date>);

	return schema.parse(Object.assign({}, obj, date_data));
}
