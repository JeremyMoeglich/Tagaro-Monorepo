<body>
	<div class="grid_layout">
		<h1>Kontaktformular</h1>
		<p>ok</p>
		<form class="contact_form" method="POST" action="/data/store_form">
			<h2>Enter Data</h2>

			<input type="text" required name="email" placeholder="Email address" />
			<input type="text" required name="message" placeholder="Enter message here" />
			<button type="button">Send</button>
		</form>
	</div>
</body>

<style>
	.grid_layout {
		display: grid;
	}
</style>
