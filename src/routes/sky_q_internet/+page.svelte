<script>
	import Vertragsinfomationen from '$lib/components/site/vertragsinfomationen.svelte';
</script>

<div>
	<div class="header-text-image-align">
		<h1 class="main-title">
			Das Sky Q Erlebnis einfach übers Internet.<br />Jetzt über uns ganz ohne Sat- oder
			Kabel-TV-Anschluss buchbar
		</h1>
		<img class="main-image" src="/images/visuals/1627910170_sky-q-iptv-box.jpg" alt="" />
	</div>
	<div class="alignment">
		<ul>
			<li>Mit der Sky Q IPTV Box - Nur 11 x 11 Zentimeter groß</li>
			<li>Empfohlen ab 6 MBit schneller Verbindung</li>
			<li>Selber Sky Q Komfort</li>
			<li>Apps wie Netflix, DAZN oder Prime Video verfügbar (seperates Abonnement erforderlich)</li>
			<li>Über 50 Free-TV-Sender inkl. Sender von RTL und ProSiebenSat.1</li>
			<li>Zum Start ohne UHD-Inhalte</li>
			<li>Ohne Aufnahmefunktion</li>
		</ul>
	</div>
	<div class="vertragsinfo"><Vertragsinfomationen /></div>
</div>

<style lang="scss">
	@import '../../lib/style/gradient_text.scss';
	.main-title {
		margin-top: 50px;
		font-size: min(max(2vw, 35px), 4vw);
		text-align: center;
		@include gradient-text;
		flex: 1 0 max(4vw, 80px);
	}
	.header-text-image-align {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.main-image {
		width: min(100vw, max(calc(1400px - 50vw), 800px));
		flex: 1 0 auto;
	}
	.alignment {
		width: 1200px;
		max-width: 85vw;
		margin-left: auto;
		margin-right: auto;
		line-height: 200%;
		margin-top: 40px;
	}
	.vertragsinfo {
		margin: 90px;
	}
</style>
