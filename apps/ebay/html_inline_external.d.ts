declare module 'html-inline-external' {
	export interface Options {
		src: string;
		tags?: string[];
		pretty?: boolean;
		minify?: boolean;
	}

	export default async function htmlInlineExternal(options: Options): Promise<string>;
}
