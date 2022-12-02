import type { Sender } from '../../sender';

const start = '/images/assets/packages/senders/sport/';

export const sport_senders = [
	{
		image: 'sky_logo_sky-sport-f1.png',
		text: 'Die komplette Formel 1 Saison 2022 - alle Rennen live auf Sky.'
	},
	{ image: 'sky_logo_sky-sport-uhd.png', text: 'Ausgewählte Sport-Events in brillantem UHD' },
	//{ image: 'sky_logo_eurosport2-hd_w.png', text: '' },
	//'sky_logo_eurosport360-hd_w.webp',
	{
		image: 'sky_logo_sky-sport-1.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-2.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-3.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-4.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-5.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-6.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-7.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-8.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-9.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-10.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{
		image: 'sky_logo_sky-sport-11.png',
		text: 'Premier League, DFB Pokal, Handball, Tennis, Golf, Diamond League'
	},
	{ image: 'sky_logo_sky-sport-austria.png', text: 'Live-Sport aus Österreich' },
	{
		image: 'sky_logo_sky-sport-top-event.png',
		text: 'Das Zuhause der besten Sky Sport Inhalte'
	},
	{ image: 'sky_logo_sky-sport-tennis.png', text: 'Das Zuhause des Tennis' },
	{
		image: 'sky_logo_sky-sport-mix-hd.png',
		text: 'Das Zuhause des DFB-Pokals, der HBL, der NHL und der Diamond League'
	},
	{ image: 'sky_logo_sky-sport-golf-hd.png', text: 'Das Zuhause des Golf' },
	{ image: 'sky_logo_sky-sport-pl.png', text: 'Das Zuhause der Premier League' }
].map((e) => ({
	...e,
	image: start + e.image
})) satisfies Sender[];
