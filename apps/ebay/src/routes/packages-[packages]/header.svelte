<script lang="ts">
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import { generate_filter } from 'utils';

	const text_color = '#3442be';
	const filter = generate_filter(text_color);
</script>

<div class="outer">
	<img class="sky" src={make_url('/images/badges/sky_signature.svg', dev)} alt="" />
	<div style:color={text_color} class="text off">
		<div class="title min-w-max">
			<p class="nowrap">Hier kannst Du</p>
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
	<img class="limage off" src={make_url('/images/badges/ssl.png', dev)} alt="" />
	<img class="rimage" src={make_url('/images/specific/header-2018.jpg', dev)} alt="" />
</div>

<style>
	.rimage {
		height: 160px;
		mask-image: linear-gradient(to right, transparent, black 90px);
	}
	.off {
		margin-bottom: 20px;
	}
	.text {
		margin-left: auto;
	}
	.limage {
		height: 75px;
		margin-left: auto;
		margin-right: 20px;
		filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5));
	}
	.outer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20px;
		width: 100%;
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
		margin-bottom: 20px;
	}
	@media (max-width: 570px) {
		.outer {
			flex-direction: column;
			padding-left: 0px;
		}
		.text {
			margin-left: 0px;
			margin-bottom: 29px;
		}
		.rimage {
			display: none;
		}
		.sky {
			margin-bottom: 0px;
			margin-top: 20px;
		}
	}
	@media (max-width: 650px) {
		.limage {
			display: none;
		}
		.rimage {
			visibility: hidden;
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
		margin-top: 5.75px;
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

	@media (max-width: 425px) {
		.outer {
			flex-direction: column;
			padding: 10px;
		}
		.title {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		.nowrap {
			white-space: normal;
		}
		.text_sky {
			margin-top: 0px;
		}
		.rimage,
		.limage {
			display: none;
		}
	}
</style>
