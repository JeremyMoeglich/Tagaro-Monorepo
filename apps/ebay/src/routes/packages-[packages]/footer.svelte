<script lang="ts">
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import SiteLogo from 'components/complete/site_logo.svelte';

	const text_color = '#3442be';
</script>

<div class="outer">
	<img class="sky" src={make_url('/images/badges/sky_signature.svg', dev)} alt="" />
	<div style:color={text_color}>
		<p class="title">Abonnieren Sie schnell und einfach Ihr Wunschprogramm.</p>
		<p>TAGARO ist autorisierter Sky Onlinehändler seit 2006</p>
		<p>2006-2022 TAGARO Medienshop Möglich & Möglich GbR</p>
	</div>
	<div class="ml-auto">
		<SiteLogo />
	</div>
</div>

<style>
	.outer {
		display: flex;
		align-items: center;
		padding-left: 20px;
		width: 100%;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
		overflow: hidden;
		background-color: #ffffff;
		gap: 20px;
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
		font-size: 1.2em;
		font-weight: bold;
	}
</style>
