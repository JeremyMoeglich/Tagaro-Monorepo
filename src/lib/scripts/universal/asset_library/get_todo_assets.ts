import { assets } from './all_assets';

export const todo_assets = assets.map((v) => {
	if (v.note.trim() === '[TODO]') {
		return v;
	}
});
