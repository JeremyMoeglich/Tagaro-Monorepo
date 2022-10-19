<script lang="ts">
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import { generate_filter } from 'utils';

	const text_color = '#3442be';
	const filter = generate_filter(text_color);
</script>

<div class="outer">
	<img class="sky" src={make_url('/images/badges/sky_signature.svg', dev)} alt="" />
	<div style:color={text_color} class="text">
		<div class="title min-w-max">
			<p class="nowrap">Hier können Sie</p>
			<img
				class="text_sky"
				style={`filter: ${filter}`}
				src={make_url('/images/badges/sky_signature.svg', dev)}
				alt=""
			/>
			<p class="nowrap">abonnieren.</p>
		</div>
		<ul>
			<li>Schnelle und sichere Bearbeitung</li>
			<li>Tausende zufriedene Kunden seit 2006</li>
			<li>Viele Angebote mit einer zusätzlichen Prämie on top</li>
		</ul>
	</div>
	<img class="limage" src={make_url('/images/badges/ssl.png', dev)} alt="" />
	<img class="rimage" src={make_url('/images/specific/header-2018.jpg', dev)} alt="" />
</div>

<style>
	.rimage {
		height: 160px;
		mask-image: linear-gradient(to right, transparent, black 90px);
	}
	.text {
		margin-left: auto;
	}
	.limage {
		height: 100px;
		margin-left: auto;
		margin-right: 20px;
	}
	.outer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20px;
		width: 100%;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
		overflow: hidden;
		background-color: #ffffff;
		gap: 20px;
	}
	.nowrap {
		white-space: nowrap;
	}
	p {
		margin: 0;
	}
	.sky {
		width: 100px;
		padding-top: 5px;
	}
	@media (max-width: 500px) {
		.sky {
			display: none;
		}
	}
	.title {
		display: flex;
		gap: 5px;
		font-size: 1.7em;
		font-weight: bold;
	}
	.text_sky {
		height: calc(1.7em - 17px);
		margin-top: 9px;
		margin-left: 2px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 7px;
		padding-top: 0px;
		font-size: 1em;
	}
	li {
		padding-left: 1em;
		text-indent: -1em;
	}

	li::before {
		content: '✓';
		margin-right: 10px;
	}
</style>
