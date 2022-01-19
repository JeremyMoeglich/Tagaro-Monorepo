enum zubuchoption_id_enum {
	uhd,
	dazn,
	multiscreen,
	trendsports,
	plus18,
	netflixstandard,
	netflixpremium
}
export type zubuchoption_id = keyof typeof zubuchoption_id_enum;
