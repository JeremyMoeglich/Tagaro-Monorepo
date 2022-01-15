enum package_name_enum {
	entertainment,
	entertainmentplus,
	cinema,
	sport,
	bundesliga
}

export type package_name = keyof typeof package_name_enum;

export const packages: Array<package_name> = [
	'entertainmentplus',
	'cinema',
	'sport',
	'bundesliga',
	'entertainment'
];
