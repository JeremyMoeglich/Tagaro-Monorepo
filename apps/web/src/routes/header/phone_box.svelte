<script lang="ts">
	import { phone_number } from 'open_constants';
</script>

<div class="alignment">
	<img src="/images/icons/phone.svg" alt="Telefonnummer:" class="phone_icon" />
	<p class="number"><a class="number" href={`tel:${phone_number}`}>{phone_number}</a></p>
	<div class="hover_align_relative">
		<img class="hover_show" src="/images/icons/clock.svg" alt="Öffnungzeiten" />
		<div class="hover_container">
			<p><b>Geschäftszeiten</b></p>
			<p>
				Am Telefon sind wir <b>Montag&nbsp;-&nbsp;Freitag&nbsp;von&nbsp;10-18&nbsp;Uhr</b> für dich
				da. <br /> Wenn du uns mal nicht erreichen solltest, rufen wir dich gerne zurück. <br /> Deine
				E-Mails beantworten wir innerhalb von 24 Stunden.
			</p>
			<p />
		</div>
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	img {
		max-height: 1em;
		margin: 0px;
	}
	.number {
		color: white;
		text-decoration: none;
	}
	.hover_align_relative {
		position: relative;
	}
	.hover_container {
		position: absolute;
		visibility: hidden;
		padding: 10px;
		background: #fff;
		color: #222;
		box-shadow: 0 0 3px 6px rgb(0 0 0 / 12%);
		right: 0px;
		top: 30px;
		width: 300px;
	}
	p {
		margin: 0px;
	}
	.hover_show:hover ~ .hover_container {
		visibility: visible;
	}
	.hover_show:hover {
		transform: rotate(360deg);
		transition-duration: 500ms;
	}
	.phone_icon {
		transition-duration: 500ms;
	}
	.phone_icon:hover {
		transform: rotate(30deg);
	}
</style>
