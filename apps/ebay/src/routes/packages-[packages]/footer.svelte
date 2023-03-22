<script lang="ts">
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import SiteLogo from 'components/complete/site_logo.svelte';

	const text_color = '#3442be';
</script>

<div class="off">
	<div class="outer">
		<img class="sky" src={make_url('/images/badges/sky_signature.svg', dev)} alt="" />
		<div style:color={text_color}>
			<p class="title">Abonnieren Sie schnell und einfach Ihr Wunschprogramm.</p>
			<p>TAGARO vermittelt Sky Verträge bereits seit 2006</p>
			<p>2006-2023 TAGARO Medienshop Möglich & Möglich GbR</p>
		</div>
		<div class="logo">
			<SiteLogo />
		</div>
	</div>
</div>

<style>
	.outer {
		background-color: #ffffff;
		padding: 20px;
		padding-bottom: 0px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		gap: 20px;
	}
	.off {
		position: relative;
		bottom: 20px;
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
		margin-bottom: 0px;
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
