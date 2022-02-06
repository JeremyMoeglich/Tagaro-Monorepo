export enum prefrences_keys_enum {
	essentiell = 'Essentiell',
	socialmedia = 'Social Media',
	analytics = 'Analytics'
}

export type prefrences_keys_type = keyof typeof prefrences_keys_enum;

export const prefrences_keys = Object.keys(
	prefrences_keys_enum
) as ReadonlyArray<prefrences_keys_type>;

export type prefrences_obj = Record<prefrences_keys_type, boolean | undefined>;
