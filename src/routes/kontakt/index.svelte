<script>
	import EmptySpacer from '$lib/site_components/empty_spacer.svelte';
	import InputField from '$lib/layout_components/input_field.svelte';
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
			<InputField text={'Name'} box_height={45} name="name"/>
			<InputField text={'Email address'} box_height={45} name="email"/>
			<InputField text={'Message'} box_height={90} name="message"/>
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
		align-items: center;
		gap: 20px;
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
	button {
		border: 0px transparent;
		background-color: rgb(0, 74, 233);
		outline: none;
		color: white;
	}
	button:hover {
		background-color: rgb(15, 54, 136)
	}
	h1 {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		padding-bottom: 10px;
	}
</style>
