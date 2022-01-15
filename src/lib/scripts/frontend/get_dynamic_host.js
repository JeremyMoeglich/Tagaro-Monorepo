export function get_dynamic_host(url) {
    if (['tagaro.de', 'static.tagaro.de'].includes(url.host)) {
        return 'node.tagaro.de';
    }
    else {
        return '';
    }
}
//# sourceMappingURL=get_dynamic_host.js.map