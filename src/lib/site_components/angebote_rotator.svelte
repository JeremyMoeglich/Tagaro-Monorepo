<script>
	import WrappingElements from '$lib/layout_components/wrapping_elements.svelte';
	import { get_price, get_price_string } from '$lib/vars/prices';

	const atr = [
		'+ Für Internet, Sat- oder Kabel',
		'+ Sky Q Receiver oder Sky Q IPTV Box gratis zum Abo dazu',
		'+ 12 Monatsabo, danach mtl. kündbar',
		'+ € 20 Bonus on top',
		//'<b>+ TVNOW PREMIUM Gutschein ab Ent+1 Paket über 12 Monate (Versand durch Sky)</b>'
		//'<b>+ € 50 Amazon Gutschein bei Ent+1 Paket oder € 125 Amazon Gutschein bei Ent+2 Pakete oder Ent Plus+1 Paket (Versand durch Sky)</b>'
		//'<b>+ Bis 31.12.21 keine Abogebühren durch Sky</b>'
		//'<b>+ Sky Winteraktion: Bis zu 12 Monate Sky Sport gratis dazu</b>',
		//'<b>+ Bis zu € 100 Gutschrift von Sky</b>'
		'<b>+ 50% Rabatt auf Cinema, Bundesliga und/oder Sport</b>'
	];
	const optional = 'Optional Netflix, DAZN und UHD, + 500 PAYBACK Punkte';
	const components = [
		{
			title: '2 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_2aus4.png',
			points: atr,
			subtitle: `ab ${get_price_string(['entertainment', 'sport'], 'jahr')} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Sport) ' +
				optional,
			route: '/sky_angebote/2_pakete'
		},
		{
			title: 'Sky Entertainment Paket + € 20 Prämie',
			image: '/images/wahl/wahl_entertainment.png',
			points: atr,
			subtitle: `ab ${get_price_string(['entertainment'], 'jahr')} monatlich* `,
			info_text: `(im Jahres-Abo, danach ${get_price_string(
				['entertainment'],
				'monat'
			)} mtl. im Monats-Abo) ${optional}`,
			route: '/sky_angebote/entertainment-plus'
		},
		{
			title: '3 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_3aus4.png',
			points: atr,
			subtitle: `ab ${get_price_string(['entertainment', 'cinema', 'sport'], 'jahr')} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport) ' +
				optional,
			route: '/sky_angebote/3_pakete'
		},

		{
			title: 'Alle 4 Sky Pakete + € 20 Prämie',
			image: '/images/wahl/wahl_4.png',
			points: atr,
			subtitle: `ab ${get_price_string(
				['entertainment', 'cinema', 'sport', 'bundesliga'],
				'jahr'
			)} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport + Bundesliga)' +
				optional,
			route: '/sky_angebote/4_oder_mehr_pakete'
		},

		{
			title: 'Sky Cinema Paket + € 20 Prämie',
			image: '/images/wahl/wahl_cinema.png',
			points: atr,
			subtitle: `${get_price_string(['entertainmentplus', 'cinema'], 'jahr')} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment-Plus + Cinema)' +
				optional,
			route: '/sky_angebote/cinema'
		},

		{
			title: 'Sky Sport Paket + € 20 Prämie',
			image: '/images/wahl/wahl_sport.png',
			points: atr,
			subtitle: `${get_price_string(['entertainment', 'sport'], 'jahr')} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Sport)' +
				optional,
			route: '/sky_angebote/sport'
		},

		{
			title: 'Sky Fußball-Bundesliga Paket + € 20 Prämie',
			image: '/images/wahl/wahl_bundesliga.png',
			points: atr,
			subtitle: `${get_price_string(['entertainment', 'bundesliga'], 'jahr')} monatlich* `,
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Bundesliga)' +
				optional,
			route: '/sky_angebote/bundesliga'
		}
	];
</script>

<WrappingElements {components} title={'Aktuelle Angebote'} />
