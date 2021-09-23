<script>
	import EmptySpacer from '$lib/site_components/empty_spacer.svelte';
</script>

<body>
	<EmptySpacer />
	<h1 class="main_title">Kontakt</h1>
	<div class="side_alignment">
		<div>
			<p>
				<b>
					Wir helfen Ihnen gerne weiter - sowohl per E-Mail und Kontaktformular rund um die Uhr als
					auch per Telefon zum Festnetzpreis.
				</b>
			</p>
			<p>
				Sie möchten gerne persönlich mit uns sprechen? Wir sind Montag bis Freitag von 10:00 bis
				13:00 Uhr sowie 14:00 bis 18:00 Uhr telefonisch erreichbar. Zu anderen Zeiten auch gerne
				mittels Rückruf, wenn sie uns Ihren Kontaktwunsch mitteilen.
			</p>
			<ul>
				<li><b>Telefon: </b>06443 - 819 427</li>
				<li><b>Fax: </b>0321 - 2111 6558</li>
				<li><b>E-Mail: </b><a href="mailto://info@tagaro.de">info@tagaro.de</a></li>
				<li><b>Internet: </b><a href="https://tagaro.de">www.tagaro.de</a></li>
			</ul>
		</div>
		<form class="contact_form" method="POST" action="/data/recieve_form">
			<input type="text" required name="email" placeholder="Email address" />
			<input type="text" required name="message" placeholder="Enter message here" />
			<button type="submit">Send</button>
		</form>
	</div>
</body>

<style>
	.side_alignment {
		display: flex;
		justify-content: center;
		gap: 30px;
	}
	.side_alignment > * {
		min-width: 40vw;
		max-width: 40vw;
	}
	.main_title {
		text-align: center;
		font-size: 40px;
		margin-bottom: 50px;
	}
	.contact_form {
		display: flex;
		flex-direction: column;
	}
	.contact_form > * {
		border: 2px solid;
		border-color: rgba(255, 255, 255, 0);
		background-color: rgb(230, 230, 230);
		outline: none;
	}
	* {
		line-height: 30px;
	}
	p {
		margin-top: 0px;
		margin-bottom: 30px;
	}
	ul {
		list-style: none;
		padding-left: 0px;
	}
</style>
