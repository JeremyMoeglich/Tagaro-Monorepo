import { dynamic_to_static_assets, type Price } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';

export const zubuchoption_ids = [
	'uhd',
	'dazn',
	'multiscreen',
	'kids',
	'trendsports',
	'plus18',
	'netflixstandard',
	'netflixpremium',
	'hdplus4monategratis',
	'hdplus',
	'skygoplus'
] as const;

export type zubuchoption_id = typeof zubuchoption_ids[number];

const zubuchoption_image_location = '/images/assets/zubuchoptionen/';

export const zubuchoptionen_assets: ReadonlyArray<Priceable_Asset<zubuchoption_id>> =
	dynamic_to_static_assets([
		{
			id: 'uhd',
			price: 5,
			name: `UHD`,
			selector: {
				descriptor: [
					{
						required: false,
						word: 'internet'
					}
				],
				type: 'AND'
			},
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}uhd.png`,
				square: `${zubuchoption_image_location}uhd.png`
			},
			aspects: [],
			sort_priority: 6
		},
		{
			id: 'skygoplus',
			price: 5,
			name: `Sky Go Plus`,
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}skygoplus.png`
			},
			aspects: [],
			sort_priority: 7
		},
		{
			id: 'dazn',
			price: { jahr: 24.99, monat: 29.99, singular: 0 },
			name: 'DAZN',
			note: 'Live-Sport, Dokus und vieles mehr per App und TV-Sender.',
			image: {
				normal: `${zubuchoption_image_location}dazn.png`,
				square: `${zubuchoption_image_location}dazn.png`
			},
			aspects: [
				'Mehr Top-Fußball mit allen Freitags- und Sonntagsspiele der Bundesliga, fast alle Live-Spiele und die Konferenz der UEFA Champions League sowie einer Reihe weiterer populärer Sportarten wie US-Sport, Tennis, Kampfsport und vielem mehr.',
				'Das Beste von DAZN auf zwei neuen DAZN TV-Sendern im Sky Programm (derzeit nicht verfügbar im Kabelnetz von Vodafone/Unitymedia)',
				'DAZN Top Events direkt neben deinem Sky Programm auf Sky Q. Nur mit einer Fernbedienung - ohne Hin- und Herschalten.',
				'Abrechnung und Kundenservice aus einer Hand. Sky ist dein Ansprechpartner.'
			],
			sort_priority: 8
		},
		{
			id: 'multiscreen',
			price: { jahr: 5, monat: 10, singular: 0 },
			name: 'Multiscreen',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}multiscreen.png`,
				square: `${zubuchoption_image_location}multiscreen.png`
			},
			aspects: [],
			sort_priority: 9
		},
		{
			id: 'kids',
			price: 5,
			name: 'Kids',
			note: 'Große Unterhaltung für alle Kleinen.',
			image: {
				normal: `${zubuchoption_image_location}kids.png`,
				square: `${zubuchoption_image_location}kids.png`
			},
			aspects: [
				'5 beliebte Kindersender und mehr als 4.500 Inhalte',
				'Unser Kids Mode schafft eine kindersichere Umgebung',
				'Alles auf Abruf ohne Werbung',
				'Mit Download-Funktion'
			],
			sort_priority: 5
		},
		{
			id: 'trendsports',
			price: 5.99,
			name: 'trendSports',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}trendsports.png`
			},
			aspects: [],
			sort_priority: 10
		},
		{
			id: 'plus18',
			price: 0,
			name: '18+ für Blue Movie',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}plus18.png`
			},
			aspects: [],
			sort_priority: 11
		},
		{
			id: 'hdplus4monategratis',
			price: 0,
			name: 'HD+ 4 Monate gratis',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}hdplus.png`
			},
			aspects: [],
			sort_priority: 12
		},
		{
			id: 'hdplus',
			price: 6,
			name: 'HD+ 6 monate gratis',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}hdplus.png`
			},
			aspects: [],
			sort_priority: 13
		},
		{
			id: 'netflixstandard',
			price: 5,
			name: 'Netflix Standard-Abo',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}netflix_standard.png`
			},
			selector: {
				descriptor: [
					{
						required: false,
						word: 'netflixpremium'
					},
					{
						required: true,
						word: 'entertainmentplus'
					}
				],
				type: 'AND'
			},
			aspects: [],
			sort_priority: 14
		},
		{
			id: 'netflixpremium',
			price: 10,
			name: 'Netflix Premium-Abo',
			note: '[TODO]',
			image: {
				normal: `${zubuchoption_image_location}netflix_premium.png`
			},
			selector: {
				descriptor: [
					{
						required: false,
						word: 'netflixstandard'
					},
					{
						required: true,
						word: 'entertainmentplus'
					}
				],
				type: 'AND'
			},
			aspects: [],
			sort_priority: 15
		}
	]);
