import { entertainment_senders } from './entertainment';
import { kids_senders } from './kids';
import { sport_senders } from './sport';
import { bundesliga_senders } from './bundesliga';
import { cinema_senders } from './cinema';

export const senders = {
	entertainment: entertainment_senders,
	sport: sport_senders,
	bundesliga: bundesliga_senders,
	cinema: cinema_senders,
	kids: kids_senders
};
