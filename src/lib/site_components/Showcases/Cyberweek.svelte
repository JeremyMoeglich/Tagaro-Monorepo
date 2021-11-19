<script>
	import Button from '$lib/layout_components/button.svelte';
</script>

<div class="alignment">
	<img class="main" src="/images/visuals/cyberweek/sky_21-11_cyberweek_home_text_s.webp" alt="" />
	<Button
		text="Jetzt Bestellen"
		route="https://fd10.formdesk.com/tagaromedienshopgbr/Sky-Bestellung-1"
	/>
	<h2>
		Hol dir alles von Sky für nur € 42,50 mtl. und Sky schenkt dir einen 32" Toshiba Full HD
		LED-TV.*
	</h2>
	<h3>32" Toshiba Full HD LED-TV 32L3163DAS geschenkt*:</h3>
	<ul>
		<li>
			Perfekte Bilddarstellung dank Full HD TV und HDR: 1080p Bildschirmauflösung für unglaubliche
			Bilddetails und lebendige Farben
		</li>
		<li>
			Mit Screen Share die schönsten Erinnerungen von Smartphone oder Tablet Fotos direkt auf dem
			TV-Großbildschirm teilen
		</li>
		<li>
			Smart TV mit beliebten Streaming-Apps wie Netflix, oder Prime Video als Standard eingebaut
		</li>
		<li>2x HDMI, 1x USB und Internal WLAN</li>
		<li>Alexa Built-in und kompatibel mit Google</li>
	</ul>
	<h3>Deine Skyinhalte im Detail:</h3>
	<ul>
		<li>Filme, Serien und der beste Live-Sport</li>
		<li>Sky Entertainment und Sky Q immer inklusive</li>
		<li>Auf Wunsch auch inklusive Netflix</li>
		<li>Mit der Sky Go App Sky auch von unterwegs erleben</li>
	</ul>
	<h3>
		Du hast schon einen TV? Dann sichere dir alternativ einen Amazon Gutschein im Wert von € 150.
	</h3>
	<div class='amazon_alignment'>
        <ul>
            <li>Filme, Serien und der beste Live-Sport</li>
            <li>Sky Entertainment und Sky Q immer inklusive</li>
            <li>Auf Wunsch auch inklusive Netflix</li>
            <li>Mit der Sky Go App Sky auch von unterwegs erleben</li>
            <li>Inklusive Amazon Gutschein im Wert von € 150</li>
        </ul>
        <img class="sub" src="/images/visuals/cyberweek/sky_21-11_amazon-karte_16-9_v2.webp" alt="">
    </div>
</div>

<style lang="scss">
	@mixin gradient-text {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	img.main {
		max-width: 90vw;
		width: 1000px;
		padding: 20px 0px;
	}
    img.sub {
        max-width: 30%;
    }
    .amazon_alignment {
        display: flex;
        justify-content: center;
        width: 1000px;
		max-width: 80vw;
		line-height: 160%;
    }
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-bottom: 50px;
	}
	h2,
	h3 {
		@include gradient-text();
		max-width: 90vw;
		width: 1000px;
		text-align: center;
	}
	ul {
		width: 1000px;
		max-width: 80vw;
		line-height: 160%;
	}
</style>
