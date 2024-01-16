import type { Priceable_Asset } from '../priceable_asset_types';
import { index_by, typed_entries } from 'functional-utilities';
import type { base_package_set, premium_package_set } from '../offer_description';
import { senders } from './senders';
import { clone } from 'lodash-es';
import { cprice } from './definition_utils';

export const package_ids = [
	'entertainment',
	'entertainmentplus',
	'sport',
	'cinema',
	'bundesliga',
	'kids'
] as const;

export type package_id = (typeof package_ids)[number];

const packages_image_location = '/images/assets/packages/';

export const packages_assets = [
	{
		id: 'entertainment',
		price: { jahr: 17.5, monat: 19, singular: 0 },
		name: 'Entertainment',
		note: 'Exklusives Entertainment ohne Ende.',
		image: {
			normal: `${packages_image_location}normal/entertainment.png`,
			square: `${packages_image_location}square/entertainment.webp`
		},
		selector: {
			action: 'exclude',
			asset_id: 'entertainmentplus'
		},
		aspects: [
			'Exklusive Top-Serien von Sky und HBO',
			'Große Auswahl an kompletten Serien und Dokumentationen jederzeit auf Abruf verfügbar',
			'Alles ohne Werbeunterbrechung',
			'Großartige Programmvielfalt mit Premium-Sendern für jeden Geschmack - live und auf Abruf',
			'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand Zugang',
			'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!'
		],
		sort_priority: 1,
		senders: senders.entertainment
	},
	{
		id: 'entertainmentplus',
		price: { jahr: 22.5, monat: 27.5, singular: 0 },
		name: 'Entertainment Plus',
		note: 'Alle Sky Serien und Netflix.',
		image: {
			normal: `${packages_image_location}normal/entertainmentplus.png`,
			square: `${packages_image_location}square/entertainmentplus.webp`
		},
		selector: {
			action: 'exclude',
			asset_id: 'entertainment'
		},
		aspects: [
			'Hunderte  Serien, Dokus und Show mit exklusiven Top-Inhalten von Sky und HBO',
			'Netflix Basis-Abo (HD 720p, 1 Gerät) inklusive. Einfach dein bestehendes Netflix Konto mitnehmen',
			'Alle Inhalte von Sky, Free TV, deinen Lieblingsapps und Mediatheken auf einen Blick vereint',
			'Einfach. Alles mit einer Sprachfernbedienung'
		],
		sort_priority: 0,
		senders: senders.entertainment
	},
	{
		id: 'cinema',
		price: { jahr: 12.5, monat: 13.5, singular: 0 },
		name: 'Cinema',
		note: 'Jeden Tag ein neuer Film.',
		image: {
			normal: `${packages_image_location}normal/cinema.png`,
			square: `${packages_image_location}square/cinema.webp`
		},
		selector: {
			type: 'AND',
			selectors: []
		},
		aspects: [
			'Exklusive Top-Filme kurz nach dem Kino',
			'Große Filmvielfalt über alle Genres hinweg',
			'Alle Filme ohne Werbeunterbrechung',
			'Paramount+ bereits inklusive',
			'Zugriff auf 9 Sky Cinema Kanäle, inkl. Sky Cinema Special mit ausgewählten Themen-Events'
		],
		sort_priority: 2,
		senders: senders.cinema
	},
	{
		id: 'sport',
		price: { jahr: 7.5, monat: 9, singular: 0 },
		name: 'Sport',
		note: 'Der beste Live-Sport.',
		image: {
			normal: `${packages_image_location}normal/sport.png`,
			square: `${packages_image_location}square/sport.webp`
		},
		aspects: [
			'Alle Rennen der Formel 1 live - exklusiv auf Sky',
			'Alle Spiele des DFB Pokals einzeln und in der Original Sky Konferenz live',
			'Alle Spiele der Premier League exklusiv, davon über 250 Spiele live und erstmals ausgewählte Spiele der FA Women`s Super League exklusiv',
			'NHL, Handball, Tennis, Leichtathletik, Golf und noch mehr Motorsport live und vieles exklusiv'
		],
		selector: {
			type: 'AND',
			selectors: []
		},
		sort_priority: 3,
		senders: senders.sport
	},
	{
		id: 'bundesliga',
		price: { jahr: 15, monat: 16.5, singular: 0 },
		name: 'Bundesliga',
		note: 'Die Heimat der Bundesliga - garantiert bis 2025.',
		image: {
			normal: `${packages_image_location}normal/bundesliga.png`,
			square: `${packages_image_location}square/bundesliga.webp`
		},
		selector: {
			type: 'AND',
			selectors: []
		},
		aspects: [
			'Alle Samstagsspiele der Bundesliga live und exklusiv',
			'Alle Spiele der 2. Bundesliga live',
			'Alle Relegationsspiele und der Supercup live'
		],
		sort_priority: 4,
		senders: senders.bundesliga
	},
	{
		id: 'kids',
		price: cprice(5),
		name: 'Kids',
		note: 'Große Unterhaltung für alle Kleinen.',
		image: {
			normal: `/images/assets/packages/normal/kids.png`,
			square: `/images/assets/packages/square/kids.webp`
		},
		aspects: [
			'5 beliebte Kindersender und mehr als 4.500 Inhalte',
			'Unser Kids Mode schafft eine kindersichere Umgebung',
			'Alles auf Abruf ohne Werbung',
			'Mit Download-Funktion'
		],
		sort_priority: 5,
		senders: [],
		selector: {
			type: 'AND',
			selectors: []
		}
	}
] satisfies ReadonlyArray<Priceable_Asset<package_id>>;

const sort_priorities: Record<package_id, number> = {
	entertainment: 0,
	entertainmentplus: 0,
	sport: 1,
	bundesliga: 2,
	cinema: 3,
	kids: 4
};

function sort_ids(ids: ReadonlyArray<package_id>): ReadonlyArray<package_id> {
	const cloned = clone(ids) as package_id[];
	return cloned.sort((a, b) => sort_priorities[a] - sort_priorities[b]);
}

const premium_combinations: ReadonlyArray<readonly premium_package_set[]> = [
	['sport'],
	['cinema'],
	['bundesliga'],
	['sport', 'bundesliga'],
	['cinema', 'sport'],
	['cinema', 'bundesliga'],
	['sport', 'bundesliga', 'cinema']
] as const;

export const base_premium_package_combinations: Readonly<
	Record<
		base_package_set,
		{
			combinations: ReadonlyArray<readonly premium_package_set[]>;
			title: string;
		}
	>
> = {
	entertainment: {
		title: 'Wählbare Pakete mit Sky Entertainment - 12 Monate Laufzeit, danach monatlich kündbar',
		combinations: [[], ...premium_combinations]
	},
	entertainmentplus: {
		title:
			'Wählbare Pakete mit Entertainment inklusive Netflix - 12 Monate Laufzeit, danach monatlich kündbar',
		combinations: [[], ...premium_combinations]
	}
} as const;

export const package_combinations: ReadonlyArray<readonly package_id[]> = typed_entries(
	base_premium_package_combinations
)
	.flatMap(([base_package, { combinations }]) =>
		combinations.map((premium_packages) => [base_package, ...premium_packages])
	)
	.map((packages) => sort_ids(packages));

export const showcased_combinations = [
	['entertainment', 'sport'],
	['entertainment', 'bundesliga'],
	['entertainment', 'sport', 'bundesliga'],
	['entertainment', 'sport', 'bundesliga', 'cinema'],

	['entertainmentplus'],
	['entertainmentplus', 'bundesliga'],
	['entertainmentplus', 'cinema'],
	['entertainmentplus', 'sport', 'bundesliga'],
	['entertainmentplus', 'sport', 'cinema', 'bundesliga']
] satisfies package_id[][];

export const indexed_package_assets = index_by(packages_assets, 'id');

export const max_combination_length = Math.max(
	...package_combinations.map((combination) => combination.length)
);
