import { has_property, is_json, typed_from_entries, typed_keys } from 'functional-utilities';
import Cookies from 'js-cookie';
import { writable, type Writable } from 'svelte/store';

export enum preferences_keys_enum {
	essentiell = 'Essentiell',
	socialmedia = 'Social Media',
	analytics = 'Analytics'
}

export type preferences_keys_type = keyof typeof preferences_keys_enum;

export const preferences_keys = Object.keys(
	preferences_keys_enum
) as ReadonlyArray<preferences_keys_type>;

export type preferences_obj = Record<preferences_keys_type, boolean | undefined>;

export function is_preferences_obj(value: unknown, log = true): value is preferences_obj {
	if (!value || typeof value !== 'object') {
		return false;
	}
	preferences_keys.forEach((key) => {
		if (!has_property(value, key)) {
			if (log) {
				console.error(`${key} is missing from preferences object`);
			}
			return false;
		}
		if (typeof value[key] !== 'boolean') {
			if (log) {
				console.error(`${key} is not a boolean`);
			}
			return false;
		}
	});
	typed_keys(value).forEach((key) => {
		if (!preferences_keys.includes(key)) {
			if (log) {
				console.error(`${key} is not a prefrence key`);
			}
			return false;
		}
	});
	return true;
}

export const blank_prefredences_obj: Readonly<preferences_obj> = typed_from_entries(
	preferences_keys.map((key) => (key === 'essentiell' ? [key, true] : [key, undefined]))
);

export function get_preferences(): preferences_obj {
	const cookie_json = Cookies.get('preferences');
	if (!cookie_json || !is_json(cookie_json)) {
		return blank_prefredences_obj;
	}
	const parsed = JSON.parse(cookie_json);
	if (!is_preferences_obj(parsed)) {
		return blank_prefredences_obj;
	}
	return parsed;
}

export function preferences_accepted(preferences: preferences_obj): boolean {
	return preferences_keys.every((key) => preferences[key] !== undefined);
}

export const preferences_store: Writable<preferences_obj> = writable(get_preferences());

export function set_preferences(preferences: preferences_obj): void {
	Cookies.set('preferences', JSON.stringify(preferences));
	preferences_store.set(preferences);
}
