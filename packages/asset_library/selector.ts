import { final_join } from 'functional-utilities';
import { indexed_assets } from './all_assets';
import type { asset_id } from './asset_types';

type Action = 'exclude' | 'require';

export type Selector =
	| {
			action: Action;
			asset_id: asset_id;
	  }
	| {
			type: 'AND' | 'OR';
			selectors: Selector[];
	  };

function match(action: Action, contained: boolean): boolean {
	return action === 'require' ? contained : !contained;
}

export function is_selector_allowed(
	words: ReadonlyArray<asset_id>,
	chosen_selector: Selector
): boolean {
	if ('action' in chosen_selector) {
		return match(chosen_selector.action, words.includes(chosen_selector.asset_id));
	} else {
		return (
			chosen_selector.type === 'OR'
				? chosen_selector.selectors.some
				: chosen_selector.selectors.every
		)((sub_selector) => is_selector_allowed(words, sub_selector));
	}
}

export function get_selector_errors(
	words: ReadonlyArray<asset_id>,
	chosen_selector: Selector
): { missing: ReadonlyArray<asset_id>; conflicts: ReadonlyArray<asset_id> } {
	if ('action' in chosen_selector) {
		return match(chosen_selector.action, words.includes(chosen_selector.asset_id))
			? { missing: [], conflicts: [chosen_selector.asset_id] }
			: { missing: [chosen_selector.asset_id], conflicts: [] };
	} else {
		const errors = chosen_selector.selectors.map((sub_selector) =>
			get_selector_errors(words, sub_selector)
		);
		return {
			missing: errors.flatMap((v) => v.missing),
			conflicts: errors.flatMap((v) => v.conflicts)
		};
	}
}

export function get_selector_error_strings(
	words: ReadonlyArray<asset_id>,
	chosen_selector: Selector
): ReadonlyArray<string> {
	const errors = get_selector_errors(words, chosen_selector);
	const values: Array<string> = [];
	if (errors.missing.length > 0) {
		values.push(
			`Dieses Paket benötigt ${errors.missing.length == 1 ? 'entweder ' : ''}${final_join(
				errors.missing.map((v) => indexed_assets[v].name),
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
				errors.conflicts.map((v) => indexed_assets[v].name),
				', ',
				' oder '
			)}`
		);
	}

	return values;
}
