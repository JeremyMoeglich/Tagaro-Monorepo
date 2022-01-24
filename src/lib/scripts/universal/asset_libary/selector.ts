import { final_join } from '../util';
import { indexed_assets } from './all_assets';
import type { asset_id } from './asset_types';

interface sub_selector_type {
	required: boolean;
	word: asset_id;
}
export interface selector {
	descriptor: Array<sub_selector_type>;
	type: 'AND' | 'OR';
}

export function matches_selector(words: Array<asset_id>, chosen_selector: selector): boolean {
	if (chosen_selector.descriptor.length == 0) {
		return true;
	}
	let did_break = false;
	for (const sub_selector of chosen_selector.descriptor) {
		const contained = words.includes(sub_selector.word);
		if (!sub_selector.required === contained) {
			if (chosen_selector.type == 'AND') {
				return false;
			}
		} else if (chosen_selector.type === 'OR') {
			did_break = true;
			break;
		}
	}
	if (did_break || chosen_selector.type == 'AND') {
		return true;
	}
	return false;
}

export function get_selector_errors(
	words: Array<asset_id>,
	chosen_selector: selector
): { missing: Array<asset_id>; conflicts: Array<asset_id> } {
	const missing: Array<asset_id> = [];
	const conflicts: Array<asset_id> = [];
	for (const sub_selector of chosen_selector.descriptor) {
		const contained = words.includes(sub_selector.word);
		if (!sub_selector.required === contained) {
			if (contained) {
				conflicts.push(sub_selector.word);
			} else {
				missing.push(sub_selector.word);
			}
		}
	}

	if (
		chosen_selector.type === 'OR' &&
		chosen_selector.descriptor.length > conflicts.length + missing.length
	) {
		return { missing: [], conflicts: [] };
	}
	return { missing, conflicts };
}

export function get_selector_error_strings(
	words: Array<asset_id>,
	chosen_selector: selector
): Array<string> {
	const errors = get_selector_errors(words, chosen_selector);
	const values: Array<string> = [];
	if (chosen_selector.type == 'OR') {
		if (errors.missing.length > 0) {
			values.push(
				`Dieses Paket benötigt ${errors.missing.length == 1 ? 'entweder ' : ''}${final_join(
					errors.missing.map((v) => indexed_assets[v].text),
					', ',
					' oder '
				)}`
			);
		}
		if (errors.conflicts.length > 0) {
			values.push(
				`Dieses Paket ist nicht kompatiebel mit ${
					errors.conflicts.length == 1 ? 'entweder ' : ''
				}${final_join(
					errors.conflicts.map((v) => indexed_assets[v].text),
					', ',
					' oder '
				)}`
			);
		}
	} else {
		if (errors.missing.length > 0) {
			values.push(
				`Dieses Paket benötigt ${final_join(
					errors.missing.map((v) => indexed_assets[v].text),
					', ',
					' und '
				)}`
			);
		}
		if (errors.conflicts.length > 0) {
			values.push(
				`Dieses Paket ist nicht kompatiebel mit ${final_join(
					errors.conflicts.map((v) => indexed_assets[v].text),
					', ',
					' und '
				)}`
			);
		}
	}
	return values;
}
