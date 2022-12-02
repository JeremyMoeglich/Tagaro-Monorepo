import type { Sender } from '../../sender';

const start = '/images/assets/packages/senders/cinema/';

export const cinema_senders = [
	{
		image: 'sky_logo_sky-cinema-thriller_w.png',
		text: 'Gänsehaut Alarm – die spannendsten Thriller, die dich zum zittern bringen'
	},
	{
		image: 'sky_logo_sky-cinema-premieren_w.png',
		text: 'Das Privatkino mit exklusiven deutschen TV-Premieren in HD-Qualität'
	},
	{
		image: 'sky_logo_sky-cinema-premieren-plus24_w.png',
		text: 'Alles von Sky Cinema Premieren HD noch mal einen Tag später.'
	},
	{
		image: 'sky_logo_sky-cinema-action_w.png',
		text: 'Achtung, Hochspannung: mit Action, Horror und Sci-Fi in HD.'
	},
	{
		image: 'sky_logo_sky-cinema-family_w.png',
		text: 'Immer der richtige Film für die ganze Familie.'
	},
	{
		image: 'sky_logo_sky-cinema-best-of_w.png',
		text: 'Die besten Filme der letzten Jahrzehnte in HD.'
	},
	{
		image: 'sky_logo_wb-film-hd_b.png',
		text: 'Filmhighlights aus allen Jahrzehnten für das perfekte Kinoerlebnis zu Hause.'
	},
	{
		image: 'sky_logo_sky-cinema-classics-hd_b.png',
		text: 'Sky Cinema Fun HD zeigt die besten und lustigsten Komödien.'
	},
	{
		image: 'sky_logo_sky-cinema-fun-hd_w.png',
		text: 'Filmklassiker und Kultserien von den 30er- bis zu den 80er-Jahren.'
	},
	{
		image: 'sky_logo_sky-cinema-fun_w.png',
		text: 'Sky Fun zeigt die besten und lustigsten Komödien.'
	},
	{
		image: 'sky_logo_sky-cinema-classics_w.png',
		text: 'Filmklassiker und Kultserien von den 30er- bis zu den 80er-Jahren.'
	}
].map((e) => ({
	...e,
	image: start + e.image
})) satisfies Sender[];
