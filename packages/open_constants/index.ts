import dayjs from 'dayjs';

export const ebay = {
	name: 'eBay Angebote',
	route: 'https://www.ebay.de/usr/tagaro.medien'
};
export const aboformular = 'https://fd10.formdesk.com/tagaro/Sky-Bestellung-5';
export const gbr = 'Möglich & Möglich GbR';
export const street_address = 'Großer Sandweg 32';
export const city = '59065 Hamm, Deutschland';
export const tax_number = '322/5990/1202';
export const ustid = 'DE248966903';
export const phone_number = '02381-9874699';
export const email = 'info@tagaro.de';
export const fax = '0321 21116558';

export const dev_url = 'http://localhost:3000';
export const prod_url = 'https://tagaro.de';

export const expire = (() => {
	const expire_time_weeks = 3;
	const expire_time_days = expire_time_weeks * 7;
	const expire_time_hours = expire_time_days * 24;
	const expire_time_minutes = expire_time_hours * 60;
	const expire_time_seconds = expire_time_minutes;
	const expire_time_months = expire_time_weeks / 4;

	return {
		weeks: expire_time_weeks,
		days: expire_time_days,
		hours: expire_time_hours,
		minutes: expire_time_minutes,
		seconds: expire_time_seconds,
		months: expire_time_months,
		cookie_config: { expires: dayjs().add(expire_time_days, 'day').toDate() }
	};
})();

export const nspace = '&nbsp;';
