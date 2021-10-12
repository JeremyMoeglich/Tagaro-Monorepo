<div class="alignment">
	<img src="/images/icons/phone.svg" alt="Telefonnummer:" class="phone_icon" />
	<p class="number"><a class="number" href="tel:06443-819427">06443 - 819 427</a></p>
	<div class="hover_align_relative">
		<img class="hover_show" src="/images/icons/clock.svg" alt="Öffnungzeiten" />
		<div class="hover_container">
			<p><b>Geschäftszeiten</b></p>
			<p>
				Am Telefon sind wir <b>Montag&nbsp;-&nbsp;Freitag&nbsp;von&nbsp;10-18&nbsp;Uhr</b> für Sie
				da. <br /> Wenn Sie uns mal nicht erreichen sollten, rufen wir Sie gerne zurück. <br /> Ihre
				E-Mails beantworten wir innerhalb von 24 Stunden.
			</p>
			<p />
		</div>
	</div>
</div>

<style lang="scss">
	@import url('/src/lib/style/global.scss');
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
