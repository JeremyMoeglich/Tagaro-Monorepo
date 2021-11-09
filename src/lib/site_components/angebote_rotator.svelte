<script>
	import WrappingElements from '$lib/layout_components/wrapping_elements.svelte';

	const atr = [
		'+ Für Internet, Sat- oder Kabel',
		'+ Sky Q Receiver oder Sky Q IPTV Box gratis zum Abo dazu',
		'+ 12 Monatsabo, danach mtl. kündbar',
		'+ € 20 Bonus on top',
		//'<b>+ TVNOW PREMIUM Gutschein ab Ent+1 Paket über 12 Monate (Versand durch Sky)</b>'
		//'<b>+ € 50 Amazon Gutschein bei Ent+1 Paket oder € 125 Amazon Gutschein bei Ent+2 Pakete oder Ent Plus+1 Paket (Versand durch Sky)</b>'
		'<b>+ Bis 31.12.21 keine Abogebühren durch Sky</b>'
	];
	const optional = 'Optional Netflix, DAZN und UHD, + 500 PAYBACK Punkte'
	const components = [
		{
			title: '2 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_2aus4.png',
			points: atr,
			subtitle: 'ab € 20 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Sport) ' + optional,
			route: '/sky_angebote/2_pakete'
		},

		{
			title: '3 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_3aus4.png',
			points: atr,
			subtitle: 'ab € 30 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport) ' + optional,
			route: '/sky_angebote/3_pakete'
		},

		{
			title: 'Alle 4 Sky Pakete + € 20 Prämie',
			image: '/images/wahl/wahl_4.png',
			points: atr,
			subtitle: '€ 42,50 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport + Bundesliga)  ' + optional,
			route: '/sky_angebote/alle_pakete'
		},

		{
			title: 'Sky Entertainment Paket + € 20 Prämie',
			image: '/images/wahl/wahl_entertainment.png',
			points: atr,
			subtitle: '€ 14,50 monatlich* ',
			info_text: '(im Jahres-Abo, danach € 17,00 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/entertainment'
		},

		{
			title: 'Sky Cinema Paket + € 20 Prämie',
			image: '/images/wahl/wahl_cinema.png',
			points: atr,
			subtitle: '€ 30,00 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach €&nbsp;37,50&nbsp;mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/cinema'
		},

		{
			title: 'Sky Sport Paket + € 20 Prämie',
			image: '/images/wahl/wahl_sport.png',
			points: atr,
			subtitle: '€ 20,00 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach € 25 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/sport'
		},

		{
			title: 'Sky Fußball-Bundesliga Paket + € 20 Prämie',
			image: '/images/wahl/wahl_bundesliga.png',
			points: atr,
			subtitle: '€ 27,00 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach € 32,00 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/bundesliga'
		}
	];
</script>

<WrappingElements {components} title={'Aktuelle Angebote'} />
