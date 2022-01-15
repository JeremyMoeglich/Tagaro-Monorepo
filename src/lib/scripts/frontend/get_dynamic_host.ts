export function get_dynamic_host(url: URL): string {
	if (['tagaro.de', 'static.tagaro.de'].includes(url.host)) {
		return 'node.tagaro.de';
	} else {
		return '';
	}
}
