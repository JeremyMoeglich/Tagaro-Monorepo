import type { package_name } from './packages';
import type { receive_type } from './receive_type';
import type { zubuchoption_id } from './zubuchoption_id';
export type sub_selector_words = package_name | receive_type | zubuchoption_id;

interface sub_selector_type {
	required: boolean;
	word: sub_selector_words;
}
export type selector = Array<sub_selector_type>;

export function matches_selector(words: sub_selector_words, chosen_selector: selector): boolean {
	chosen_selector.forEach((sub_selector) => {
		const contained = words.includes(sub_selector.word);
		if (!sub_selector.required === contained) {
			return false;
		}
	});
	return true;
}
