import type { Sender } from '../../sender';

const start = '/images/assets/packages/senders/cinema/';

export const cinema_senders = [
	{
		image: 'sky_logo_sky-cinema-action_w.png',
		text: 'Nervenkitzel pur mit dem Besten aus Action, Thriller und Horror'
	},
	{
		image: 'sky_logo_sky-cinema-family_w.png',
		text: 'Für Groß und Klein die beste Unterhaltung'
	},
	{
		image: 'sky_logo_wb-film-hd_b.png',
		text: 'Filmhighlights aus allen Jahrzehnten für das perfekte Kinoerlebnis zu Hause.'
	},
	{
		image: 'sky_logo_sky-cinema-classics_w.png',
		text: 'Die größten Filmklassiker und kultige Serienhits von Abenteuer bis Western'
	},
	{
		image: 'sky_logo_sky-cinema_highlights_b.png',
		text: 'Ein Fest für Filmfans: Mit Themen-Specials, Filmreihen und Best-of-Blockbuster'
	},
	{
		image: 'sky_logo_sky-cinema-premieren_w.png',
		text: 'Das Zuhause für die neuesten Blockbuster'
	}
].map((e) => ({
	...e,
	image: start + e.image
})) satisfies Sender[];
