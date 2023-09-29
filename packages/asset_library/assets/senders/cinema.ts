import type { Sender } from '../../sender';

const start = '/images/assets/packages/senders/cinema/';

export const cinema_senders = [
	{
		image: 'sky_logo_sky-cinema-thriller_w.png',
		text: 'Gänsehaut-Alarm – die spannendsten Thriller, die dich zum Zittern bringen.'
	},
	{
		image: 'sky_logo_sky-cinema-premieren_w.png',
		text: 'Dein Premieren-Sender – mit den aktuellsten Filmen kurz nach dem Kino.'
	},
	{
		image: 'sky_logo_sky-cinema-premieren-plus24_w.png',
		text: 'Alle Premieren nochmal einen Tag später.'
	},
	{
		image: 'sky_logo_sky-cinema-action_w.png',
		text: 'Pure Action – die neuesten und besten Crime-und Actionfilme.'
	},
	{
		image: 'sky_logo_sky-cinema-family_w.png',
		text: 'Das beste Entertainment für Kinder und die ganze Familie.'
	},
	{
		image: 'sky_logo_sky-cinema-best-of_w.png',
		text: 'Die beliebtesten Filme aller Zeiten – von den 90ern bis heute.'
	},
	{
		image: 'sky_logo_wb-film-hd_b.png',
		text: 'Filmhighlights aus allen Jahrzehnten für das perfekte Kinoerlebnis zu Hause.'
	},
	{
		image: 'sky_logo_sky-cinema-fun_w.png',
		text: 'Zum Schreien komisch – das neue Zuhause der witzigsten Filme aller Zeiten.'
	},
	{
		image: 'sky_logo_sky-cinema-classics_w.png',
		text: 'Die großartigsten Filmklassiker und Kult-Serien aus den Genres Abenteuer und Western – von den 30ern bis hin zu den 80ern.'
	}
].map((e) => ({
	...e,
	image: start + e.image
})) satisfies Sender[];
