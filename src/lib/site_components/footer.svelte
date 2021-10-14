<script>
	import ZumAboformularBar from './zum_aboformular_bar.svelte';
	export let preferences_object;
</script>

<div class="scaling_element"><ZumAboformularBar /></div>
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
			<a href="tel:06443-819427">Telefon: 06443 - 819 427</a> <br />
			Fax: 0321 - 2111 6558 <br />
			<a href="mailto://info@tagaro.de">E-Mail: info@tagaro.de</a>
		</p>
	</div>
	<div class="einkaufen">
		<h3>Sicher Einkaufen</h3>
		<img src="/images/badges/autorisiert.svg" alt="" />
		<img src="/images/badges/ssl.png" alt="" />
		<!-- <a
				href="https://www.trustami.com/erfahrung/tagaro-medienshop-bewertung"
				target="_blank"
				title="Klicken Sie für weitere Informationen"
				rel="noopener"
			>
				<img
					style="width: 70px;"
					src="https://cdn.trustami.com/userimages/100226/hdSeals/59e6544c53a49963318b4568.png?widget=true"
					alt="Trustami"
				/></a
			> -->
		{#if preferences_object['Social Media']}
			{@html '<div class="widget_container_badge"></div>'}
		{/if}
	</div>
	{#if preferences_object['Social Media']}
		<div class="social">
			<h3>Social Media</h3>
			<iframe
				src="/raw_components/page_plugin.html"
				frameborder="0"
				title="Tagaro Medienshop Facebook"
			/>
		</div>
	{/if}
</div>
<p class="copyright">© 2021 - TAGARO Medienshop Möglich & Möglich GbR</p>

<style lang="scss">
	@import url('/src/lib/style/mixins.scss');
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
		font-size: 18px;
		gap: 14px;
	}
	.nopoint a {
		padding: 10px;
	}
	a {
		text-decoration: none;
		color: #545454;
	}
	.side_alignment > div {
		min-width: min(300px, 90vw);
		max-width: 90vw;
	}
	h3 {
		font-size: 21px;
	}
	.copyright {
		text-align: center;
		margin-top: 30px;
		margin-bottom: 90px;
	}
	.scaling_element {
		transition-duration: 300ms;
	}
	.scaling_element:hover {
		transform: scale(1.03);
	}
</style>
