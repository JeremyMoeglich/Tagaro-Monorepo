<script>
	import ZumAboformularBar from './zum_aboformular_bar.svelte';
</script>

<ZumAboformularBar />

<div class="side_alignment">
	<div class="infomationen">
		<h3>Infomationen</h3>
		<ul class="nopoint">
			<li><a href="/service/datenschutz">- Datenschutz -</a></li>
			<li><a href="/service/AGB">- AGB -</a></li>
			<li><a href="/service">- Service -</a></li>
			<li><a href="/service/impressum">- Impressum -</a></li>
			<li><a href="/service/widerrufsrecht">- Widerrufsrecht -</a></li>
		</ul>
	</div>
	<div class="sofortkontakt">
		<h3>Ihr Sofortkontakt</h3>
		<p>
			Montag - Freitag <br />
			10:00 - 13:00 und 14:00 - 18:00 Uhr <br />
			Per E-Mail 24 Stunden lang
		</p>
		<p>
			Telefon: 06443 - 819 427 <br />
			Fax: 0321 - 2111 6558 <br />
			E-Mail: <a href="mailto://info@tagaro.de">info@tagaro.de</a>
		</p>
	</div>
	<div class="einkaufen">
		<h3>Sicher Einkaufen</h3>
		<img src="/images/badges/autorisiert_sky.png" alt="" />
		<img src="/images/badges/ssl.png" alt="" />
	</div>
	<div class="social">
		<h3>Social Media</h3>
	</div>
</div>

<style>
	.side_alignment {
		margin-top: 60px;
		display: flex;
		max-width: 80vw;
		margin-left: auto;
		margin-right: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 30px;
		color: #545454;
	}
	.nopoint {
		list-style: none;
		padding-left: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		font-size: 18px;
	}
	.side_alignment > div {
		min-width: min(300px, 90vw);
		max-width: 90vw;
	}
	h3 {
		font-size: 25px;
	}
</style>
