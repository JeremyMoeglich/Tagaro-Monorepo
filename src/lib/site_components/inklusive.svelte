<script>
	import Button from '$lib/layout_components/button.svelte';
</script>

<h2 class="gradient_text">Im Angebot inklusive</h2>
<div class="side_alignment">
	<div class="left">
		<p>
			Mit unserem Sky Angebot können Sie Ihr Wunschprogramm über die gesamte Laufzeit von 12 Monaten
			zu Neukunden-Preisen genießen. Der Sky Vertrag hat eine Laufzeit von 12 Monaten und ist nach 1
			Jahr monatlich kündbar. Immer inklusive - Das Entertainment Paket, der Sky Q Receiver, Sky Go
			und das Programm in HD-Qualität! Das Fußball Bundesliga Paket, das Sport Paket, das Sky Cinema
			Paket, Entertainment Plus inkl. Netflix und das Sky Kids Paket ist zubuchbar. Ebenso können
			Sie Ultra HD hinzubuchen oder die Multiscreen Option mit Sky Go Plus für noch mehr
			Flexibilität. Sehen Sie TV-Premieren, brandneue Top-Serien und spannende Dokumentationen. Dazu
			Samstags- und Sonntagsspiele der Bundesliga live, die Formel 1 und die größten Sport-Events
			live. Immer dabei Sky On Demand.
		</p>
		<p>
			Als autorisierter Sky-Onlinehändler seit 2006, stehen wir für eine einfache und zügige
			Abwicklung mit persönlichem Service. Schauen Sie sich unsere tausenden zufriedenen Kunden über
			<a href="https://www.trustami.com/erfahrung/tagaro-medienshop-bewertung">Trustami</a> an.
		</p>
		<div class="btn">
            <Button text="Alle Infomationen zu Sky Q" route="/sky_q" />
        </div>
	</div>
	<img src="/images/visuals/skyq_header_4.png" alt="" />
</div>

<style>
    .left {
        max-width: 800px;
    }
	.side_alignment {
		display: flex;
		line-height: 200%;
        max-width: 85vw;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;

	}
	img {
		width: 50%;
        max-width: 500px;
		object-fit: contain;
	}
	.gradient_text {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	h2 {
		text-align: center;
		font-size: 38px;
	}
    .btn {
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
</style>
