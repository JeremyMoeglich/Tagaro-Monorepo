import { dev_url, prod_url } from 'open_constants';

export function make_url(url: string, dev: boolean): string {
	return dev ? dev_url + url : prod_url + url;
}
