<script>
	import WrappingElements from '$lib/layout_components/wrapping_elements.svelte';

	const atr = [
		'+ Für Internet, Sat- oder Kabel',
		'+ Sky Q Receiver oder Sky Q IPTV Box gratis zum Abo dazu',
		'+ 12 Monatsabo, danach mtl. kündbar',
		'+ € 20 Bonus on top',
		'<b>+ TVNOW PREMIUM Gutschein ab Ent+1 Paket über 12 Monate (Versand durch Sky)</b>'
	];
	const optional = 'Optional Netflix, PAYBACK Punkte, DAZN'
	const components = [
		{
			title: '2 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_2aus4.png',
			points: atr,
			subtitle: 'ab € 32,50 monatlich* ',
			info_text:
				'(im Jahres-Abo, Preise je Wahl unterschiedlich) ' + optional,
			route: '/sky_angebote/2_pakete'
		},

		{
			title: '3 Sky Pakete nach Wahl + € 20 Prämie',
			image: '/images/wahl/wahl_3aus4.png',
			points: atr,
			subtitle: 'ab € 32,50 monatlich* ',
			info_text:
				'(im Jahres-Abo, Preise je Wahl unterschiedlich) ' + optional,
			route: '/sky_angebote/3_pakete'
		},

		{
			title: 'Alle 4 Sky Pakete + € 20 Prämie',
			image: '/images/wahl/wahl_4.png',
			points: atr,
			subtitle: '€ 40,00 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach € 50,00 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/alle_pakete'
		},

		{
			title: 'Sky Entertainment Paket + € 20 Prämie',
			image: '/images/wahl/wahl_entertainment.png',
			points: atr,
			subtitle: '€ 12,50 monatlich* ',
			info_text: '(im Jahres-Abo, danach € 15,00 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/entertainment'
		},

		{
			title: 'Sky Cinema Paket + € 20 Prämie',
			image: '/images/wahl/wahl_cinema.png',
			points: atr,
			subtitle: '€ 22,50 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach €&nbsp;27,50&nbsp;mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/cinema'
		},

		{
			title: 'Sky Sport Paket + € 20 Prämie',
			image: '/images/wahl/wahl_sport.png',
			points: atr,
			subtitle: '€ 17,50 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach € 22,50 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/sport'
		},

		{
			title: 'Sky Fußball-Bundesliga Paket + € 20 Prämie',
			image: '/images/wahl/wahl_bundesliga.png',
			points: atr,
			subtitle: '€ 25,00 monatlich* ',
			info_text:
				'(im Jahres-Abo, danach € 30,00 mtl. im Monats-Abo) ' + optional,
			route: '/sky_angebote/bundesliga'
		}
	];
</script>

<WrappingElements {components} title={'Aktuelle Angebote'} />
