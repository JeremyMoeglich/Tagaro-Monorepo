<script lang="ts">
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import SiteLogo from 'components/complete/site_logo.svelte';
	import Copyright from 'components/complete/copyright.svelte';

	const text_color = '#3442be';
</script>

<div class="outer">
	<div class="side">
		<img class="sky" src={make_url('/images/badges/sky_signature.svg', dev)} alt="" />
		<div style:color={text_color}>
			<p class="title">Abonnieren Sie schnell und einfach Ihr Wunschprogramm.</p>
			<p>TAGARO vermittelt Sky Verträge bereits seit 2006</p>
			<p>2006-2022 TAGARO Medienshop Möglich & Möglich GbR</p>
		</div>
		<div class="logo">
			<SiteLogo />
		</div>
	</div>
	<Copyright />
</div>

<style>
	.side {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.outer {
		background-color: #ffffff;
		padding: 20px;
		padding-top: 0px;
		width: 100%;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
		overflow: hidden;
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
	.logo {
		margin: 20px;
		margin-left: auto;
		border-radius: 15px;
		width: 100px;
		overflow: hidden;
	}
	.title {
		display: flex;
		gap: 5px;
		font-size: 1.2em;
		font-weight: bold;
		margin-bottom: 10px;
	}
</style>
