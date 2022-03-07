<script>
	import WrappingElements from '$lib/components/layout_components/wrapping_elements.svelte';
	import { bonus_string, get_offer_note, get_price_string } from '$lib/scripts/universal/prices';

	const atr = [
		`+ Für Internet, Sat- oder Kabel`,
		`+ Sky Q Receiver oder Sky Q IPTV Box gratis zum Abo dazu`,
		`+ 12 Monatsabo, danach mtl. kündbar`,
		`+ ${bonus_string} Bonus on top`
		//`<b>+ TVNOW PREMIUM Gutschein ab Ent+1 Paket über 12 Monate (Versand durch Sky)</b>`
		//`<b>+ € 50 Amazon Gutschein bei Ent+1 Paket oder € 125 Amazon Gutschein bei Ent+2 Pakete oder Ent Plus+1 Paket (Versand durch Sky)</b>`
		//`<b>+ Bis 31.12.21 keine Abogebühren durch Sky</b>`
		//`<b>+ Sky Winteraktion: Bis zu 12 Monate Sky Sport gratis dazu</b>`,
		//`<b>+ Bis zu € 100 Gutschrift von Sky</b>`
		//`<b>+ 50% Rabatt auf Cinema, Bundesliga und/oder Sport</b>`
	];
	const optional = `Optional Netflix, DAZN und UHD, + 500 PAYBACK Punkte`;
	const components = [
		{
			title: `2 Sky Pakete nach Wahl + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_2aus4.png`,
			points: [...atr, `<b>${get_offer_note([`entertainment`, `sport`])}</b>`],
			subtitle: `ab ${get_price_string([`entertainment`, `sport`], `jahr`)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Sport) ` +
				optional,
			route: `/angebote/2_pakete`
		},
		{
			title: `Sky Entertainment Paket + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_entertainment.png`,
			points: [...atr, `<b>${get_offer_note([`entertainment`])}</b>`],
			subtitle: `ab ${get_price_string([`entertainment`], `jahr`)} monatlich* `,
			info_text: `(im Jahres-Abo, danach ${get_price_string(
				[`entertainment`],
				`monat`
			)} mtl. im Monats-Abo) ${optional}`,
			route: `/angebote/entertainmentplus`
		},
		{
			title: `3 Sky Pakete nach Wahl + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_3aus4.png`,
			points: [...atr, `<b>${get_offer_note([`entertainment`, `sport`, `cinema`])}</b>`],
			subtitle: `ab ${get_price_string([`entertainment`, `cinema`, `sport`], `jahr`)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport) ` +
				optional,
			route: `/angebote/3_pakete`
		},

		{
			title: `Alle 4 Sky Pakete + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_4.png`,
			points: [
				...atr,
				`<b>${get_offer_note([`entertainment`, `cinema`, `sport`, `bundesliga`])}</b>`
			],
			subtitle: `ab ${get_price_string(
				[`entertainment`, `cinema`, `sport`, `bundesliga`],
				`jahr`
			)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Cinema + Sport + Bundesliga) ` +
				optional,
			route: `/angebote/4_oder_mehr_pakete`
		},

		{
			title: `Entertainment-Plus + Sky Cinema Paket + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_cinema.png`,
			points: [...atr, `<b>${get_offer_note([`entertainmentplus`, `cinema`])}</b>`],
			subtitle: `${get_price_string([`entertainmentplus`, `cinema`], `jahr`)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment-Plus + Cinema) ` +
				optional,
			route: `/angebote/cinema`
		},

		{
			title: `Entertainment + Sky Sport Paket + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_sport.png`,
			points: [...atr, `<b>${get_offer_note([`entertainment`, `sport`])}</b>`],
			subtitle: `${get_price_string([`entertainment`, `sport`], `jahr`)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Sport) ` +
				optional,
			route: `/angebote/sport`
		},

		{
			title: `Entertainment + Sky Fußball-Bundesliga Paket + ${bonus_string} Prämie`,
			image: `/images/wahl/wahl_bundesliga.png`,
			points: [...atr, `<b>${get_offer_note([`entertainment`, `bundesliga`])}</b>`],
			subtitle: `${get_price_string([`entertainment`, `bundesliga`], `jahr`)} monatlich* `,
			info_text:
				`(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf Entertainment + Bundesliga) ` +
				optional,
			route: `/angebote/bundesliga`
		}
	];
</script>

<WrappingElements {components} title={`Aktuelle Angebote`} />
