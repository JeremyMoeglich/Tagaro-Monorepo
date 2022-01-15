const package_prices = {
    entertainment: { jahr: 14.5, monat: 17 },
    entertainmentplus: { jahr: 20, monat: 25 },
    cinema: { jahr: 10, monat: 12.5 },
    sport: { jahr: 5.5, monat: 8 },
    bundesliga: { jahr: 12.5, monat: 15 }
};
const base_packages = ['entertainment', 'entertainmentplus'];
const premiumpackages = ['cinema', 'sport', 'bundesliga'];
base_packages.forEach((v) => {
    package_prices[v];
});
premiumpackages.forEach((v) => {
    package_prices[v].jahr /= 2;
});
function sum(values) {
    let total = 0;
    values.forEach((v) => (total += v));
    return total;
}
const factor_jahr = 1;
const factor_monat = 1;
export function get_price(packages) {
    return {
        jahr: sum(packages.map((v) => package_prices[v].jahr)) * factor_jahr,
        monat: sum(packages.map((v) => package_prices[v].monat)) * factor_monat
    };
}
export function get_price_string(packages, subscription_time) {
    const price = get_price(packages);
    return '€ ' + price[subscription_time].toFixed(2).replace('.', ',');
}
//https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
function intersect(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const intersection = new Set([...setA].filter((x) => setB.has(x)));
    return Array.from(intersection);
}
export function get_offer_note(packages) {
    if (intersect(packages, premiumpackages).length > 0) {
        return 'Januar Sale 50%';
    }
}
//# sourceMappingURL=prices.js.map