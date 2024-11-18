<script lang="ts">
	import Meta from '../meta.svelte';

	//import InputField from 'components/layout_components/input_field.svelte';
	import KontaktForm from './contact_form.svelte';
</script>

<Meta />

<div>
	<h1 class="main_title">Kontakt</h1>
	<div class="side_alignment">
		<div class="side_text_container">
			<p>
				<b>
					Wir helfen dir gerne weiter - sowohl per E-Mail und Kontaktformular rund um die Uhr als
					auch per Telefon zum Festnetzpreis.
				</b>
			</p>
			<p>
				Du möchtest gerne persönlich mit uns sprechen? Wir sind Montag bis Freitag von 10:00 bis
				18:00 Uhr telefonisch erreichbar. Zu anderen Zeiten auch gerne mittels Rückruf, wenn du uns
				deinen Kontaktwunsch mitteilst.
			</p>
			<ul>
				<li><b>Telefon: </b>02381-9874699</li>
				<li><b>Fax: </b>0321 - 2111 6558</li>
				<li><b>E-Mail: </b><a href="mailto://info@tagaro.de">info@tagaro.de</a></li>
				<li>
					<b>Internet: </b><a href="https://tagaro.de">www.tagaro.de</a>
				</li>
			</ul>
		</div>
		<KontaktForm />
	</div>
</div>

<style lang="scss">
	.side_text_container {
		min-width: 50%;
	}
	.side_alignment {
		display: flex;
		justify-content: center;
		gap: 30px;
		max-width: min(90%, 1000px);
		margin: 60px auto;
	}
	.main_title {
		text-align: center;
		font-size: 40px;
		margin-bottom: 50px;
		margin-top: 50px;
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

	h1 {
		padding-bottom: 10px;
	}
</style>
