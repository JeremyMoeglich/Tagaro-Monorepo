import { get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'js-cookie';
import { preferences_store } from './preferences';
import { expire } from 'open_constants';

export const user_id_store = writable<string | undefined>(get_uuid());

preferences_store.subscribe(() => {
	user_id_store.set(get_uuid());
});

function get_uuid() {
	if (!get(preferences_store).analytics) {
		return undefined;
	}
	const value = cookie.get('user_id');
	if (value) {
		return value;
	} else {
		const new_value = uuidv4();
		cookie.set('user_id', new_value, expire.cookie_config);
		return new_value;
	}
}
