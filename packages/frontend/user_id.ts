import { get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import { preferences_store } from './preferences';

export const user_id_store = writable<string | undefined>(get_uuid());

preferences_store.subscribe(() => {
	user_id_store.set(get_uuid());
});

function get_uuid() {
	if (!get(preferences_store).analytics) {
		return undefined;
	}
	const value = Cookies.get('user_id');
	if (value) {
		return value;
	} else {
		const new_value = uuidv4();
		Cookies.set('user_id', new_value);
		return new_value;
	}
}
