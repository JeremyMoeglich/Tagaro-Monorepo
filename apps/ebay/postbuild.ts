import htmlInlineExternal from 'html-inline-external';
import { promises as fs } from 'fs';
import { join } from 'path';

const build_folder = 'build';
const build_path = join(import.meta.url, '..', build_folder).replace('file:', '');

console.log(`Inlining external resources in ${build_folder} folder...`);

(async () => {
	for (const file of await fs.readdir(build_path)) {
		if (file.endsWith('.html')) {
			const file_path = join(build_path, file);
			const inlined = await htmlInlineExternal({ src: file_path, minify: true });
			await fs.writeFile(file_path, inlined);
			console.log(`Inlined ${file}`);
		}
	}
})();
