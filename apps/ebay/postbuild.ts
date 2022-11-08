import htmlInlineExternal from 'html-inline-external';
import { promises as fs } from 'fs';
import { join } from 'path';
import { stripHtml } from 'string-strip-html';

const build_folder = 'build';
const build_path = join(import.meta.url, '..', build_folder).replace('file:', '');

(async () => {
	console.log(`Inlining external resources in ${build_folder} folder...`);

	for (const file of await fs.readdir(build_path)) {
		if (file.endsWith('.html')) {
			const file_path = join(build_path, file);
			const inlined = await htmlInlineExternal({ src: file_path, minify: true });
			await fs.writeFile(file_path, inlined);
			console.log(`Inlined ${file}`);
		}
	}

	console.log(`Striping JS from ${build_folder} folder...`);

	for (const file of await fs.readdir(build_path)) {
		if (file.endsWith('.html')) {
			const file_path = join(build_path, file);
			const html = await fs.readFile(file_path, 'utf-8');
			const stripped = stripHtml(html, { onlyStripTags: ['script'] });
			await fs.writeFile(file_path, stripped.result);
			console.log(`Stripped JS from ${file}`);
		}
	}
})();
