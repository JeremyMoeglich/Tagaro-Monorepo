enum package_name_enum {
	entertainment,
	entertainmentplus,
	cinema,
	sport,
	bundesliga
}

export type package_name = keyof typeof package_name_enum;

export const packages: Record<package_name, string> = {
	entertainmentplus: 'Entertainment Plus',
	cinema: 'Cinema',
	sport: 'Sport',
	bundesliga: 'Bundesliga',
	entertainment: 'Entertainment'
};

export const package_names = Object.keys(packages);

export const base_packages: Array<package_name> = ['entertainment', 'entertainmentplus'];
export const premiumpackages: Array<package_name> = ['cinema', 'sport', 'bundesliga'];
