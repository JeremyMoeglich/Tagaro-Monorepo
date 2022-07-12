<script lang="ts">
	import '../app.css';
	import '../global.scss';
	import Footer from '$lib/components/site/routes/layout/footer/footer.svelte';
	import * as urls from '$lib/scripts/frontend/urls';
	import PageTransition from '$lib/components/internal/PageTransition.svelte';

	import InfoBanner from '$lib/components/site/routes/layout/info_banner.svelte';

	import type { preferences_keys_type, preferences_obj } from '$lib/scripts/frontend/preferences';
	import { preferences_keys } from '$lib/scripts/frontend/preferences';
	import { typed_entries } from 'functional-utilities';
	import Header from '$lib/components/site/routes/layout/header/header.svelte';
	import { page } from '$app/stores';

	let mobile_slider_value = 0;
	let is_shown = false;

	const navbar_elements: Record<string, string | Record<string, string>> = {
		Startseite: '/',
		//Aboformular: '/aboformular',
		'Sky Angebote': {
			index: '/angebote',
			'Sky Entertainment Plus': '/angebote/entertainmentplus',
			'Sky Sport': '/angebote/sport',
			'Sky Fußball-Bundesliga': '/angebote/bundesliga',
			'Sky Cinema': '/angebote/cinema',
			'2 Sky Wunschpakete': '/angebote/2_pakete',
			'3 Sky Wunschpakete': '/angebote/3_pakete',
			'4 Sky Pakete oder mehr': '/angebote/4_oder_mehr_pakete',
			'Sky Entertainment': '/angebote/entertainment'
		},
		'Sky Q': '/sky_q',
		'Sky übers Internet': '/sky_q_internet',
		Kontakt: '/kontakt'
	} as const;
	navbar_elements[urls.ebay.name + ' 🡆'] = urls.ebay.route;

	let screen_y_position: number;

	let preferences_object: preferences_obj = Object.fromEntries(
		preferences_keys.map((v) => [v, false])
	) as Record<preferences_keys_type, boolean>;

	function open_sidebar() {
		if (mobile_slider_value === 0) {
			mobile_slider_value = 80;
			is_shown = true;
		}
	}
	function close_sidebar() {
		if (mobile_slider_value === 80) {
			mobile_slider_value = 0;
			setTimeout(function () {
				is_shown = false;
			}, 300);
		}
	}

	let route = $page.url.pathname;
	$: route = $page.url.pathname;
</script>

<svelte:head>
	{#if preferences_object.analytics}
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-70CD2JS6R8"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-70CD2JS6R8');
		</script>
	{/if}
	{#if preferences_object.socialmedia}
		<script
			id="trustamiwidget"
			type="text/javascript"
			src="https://cdn.trustami.com/widgetapi/widget2/trustami-widget.js"
			data-profile="59e6544c53a49963318b4568"
			data-user="dc45e2793250619a08045ba8ad253cd4a1004d2f"
			data-platform="0"
			async>
		</script>
	{/if}
	<meta property="og:title" content="TAGARO Medienshop" />
	<meta property="og:image" content="/share_preview.png" />
	<meta
		property="og:description"
		content="TAGARO ist ein autorisierter Sky-Onlinehändler seit 2006 und bietet Ihnen zahlreiche Artikel aus den Bereichen Unterhaltungselektronik und Pay-TV an."
	/>
	<meta property="og:url" content="node.tagaro.de" />
	<meta property="og:image:width" content="2209" />
	<meta property="og:image:height" content="2209" />
	<meta property="og:type" content="website" />
	<meta
		name="description"
		content="TAGARO ist ein autorisierter Sky-Onlinehändler seit 2006 und bietet Ihnen zahlreiche Artikel aus den Bereichen Unterhaltungselektronik und Pay-TV an."
	/>
	<meta name="keywords" content="Sky, Abo, Tagaro" />
	<meta name="author" content="Jeremy Möglich" />
</svelte:head>

{#if preferences_object.socialmedia}
	{@html '<div class="widget_container_overlay" />'}
{/if}

<body>
	<div class="mobile_slider" style={'right: ' + mobile_slider_value + 'vw'}>
		<div class="main_content" on:click={close_sidebar}>
			<img
				src="/images/icons/go_to_start.svg"
				alt=""
				class="go_to_start"
				style={screen_y_position > 0 ? 'bottom: 100px;' : ''}
				on:click={() => (screen_y_position = 0)}
			/>
			<div class="header">
				<Header {route} {navbar_elements} />
			</div>
			<div class="page">
				<PageTransition refresh={route}>
					<slot />
				</PageTransition>
			</div>
			<Footer {preferences_object} {route} />
		</div>
		<div
			class="mobile_sidebar"
			style={`right: -${80 - mobile_slider_value}vw; ${
				is_shown ? 'visibility: visible;' : 'visibility: hidden;'
			}`}
		>
			<div class="selectable_element_vert">
				<div class="nav_element_mobile no_margin">
					<p class="no_margin" style="text-align: center;">Tagaro</p>
				</div>
			</div>
			{#each typed_entries(navbar_elements) as pair}
				<div class="selectable_element_vert">
					{#if pair[1] instanceof Object}
						{#if 'index' in pair[1]}
							<a
								sveltekit:prefetch
								class="nav_element_mobile nav_element_hover_mobile no_margin"
								on:click={close_sidebar}
								href={pair[1]['index']}
							>
								<p class="no_margin small_start_margin">{pair[0]}</p>
							</a>
						{/if}
					{:else}
						<a
							sveltekit:prefetch
							class="nav_element_mobile nav_element_hover_mobile"
							title={pair[0] + ' öffnen'}
							on:click={close_sidebar}
							href={pair[1]}
							target={pair[1].includes('ebay') ? '_blank' : '_self'}
						>
							<p class="no_margin small_start_margin">{pair[0]}</p>
						</a>
					{/if}
				</div>
			{/each}
			{#each typed_entries(navbar_elements) as pair}
				{#if typeof pair[1] === 'object'}
					<div class="selectable_element_vert">
						<div class="nav_element_mobile">
							<p class="no_margin small_start_margin">&nbsp;</p>
						</div>
						{#each typed_entries(pair[1]) as subpair}
							{#if subpair[0] !== 'index'}
								<a
									sveltekit:prefetch
									class="nav_element_mobile nav_element_hover_mobile"
									on:click={close_sidebar}
									href={subpair[1]}
									title={subpair[0] + ' öffnen'}
								>
									<p class="no_margin small_start_margin">{subpair[0]}</p>
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
		</div>
		{#if mobile_slider_value == 0}
			<img
				on:click={open_sidebar}
				class="mobile_selector"
				src="/images/icons/mobile_open.svg"
				alt="Navigation Öffnen"
				title="Navigation Öffnen"
			/>
		{:else}
			<img
				on:click={close_sidebar}
				class="mobile_selector"
				src="/images/icons/mobile_close.svg"
				alt="Navigation Schließen"
				title="Navigation Schließen"
			/>
		{/if}
	</div>
	<InfoBanner bind:preferences_object bind:route />
</body>

<svelte:window bind:scrollY={screen_y_position} />

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

	* {
		font-family: 'Oxygen', sans-serif;
		z-index: 100;
	}
	:global(button) {
		background-color: transparent;
		border: none;
		font-size: medium;
		padding: 0px;
		cursor: pointer;
	}
	:global(p) {
		line-height: 170%;
	}
	:global(body) {
		margin: 0px;
	}

	body {
		margin-top: 0;
		margin-bottom: 0;
		margin-right: 0;
		margin-left: 0;
		overflow-x: hidden;
		overflow-x: clip;
	}

	.mobile_slider {
		min-width: 180vw;
		max-width: 180vw;
		min-height: 100vh;
		position: relative;
		transition-duration: 300ms;
	}
	.no_margin {
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
		margin-left: 0px;
	}
	.main_content {
		position: relative;
		float: left;
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
	}
	.small_start_margin {
		padding-left: 20px;
	}
	.mobile_sidebar {
		position: fixed;
		float: right;
		min-width: 80vw;
		max-width: 80vw;
		min-height: 100vh;
		background: linear-gradient(to right, rgb(57, 42, 109), rgb(0, 90, 143));
		transition-duration: 300ms;
	}

	$size: 60px;
	.mobile_selector {
		width: $size;
		position: absolute;
		left: 80vw;
	}

	.go_to_start {
		position: fixed;
		transition-duration: 400ms;
		right: 30px;
		bottom: -50px - $size;
		width: $size;
		height: $size;
	}

	.nav_element_mobile {
		text-align: left;
		$pad: 1vh;
		padding-top: $pad;
		padding-bottom: $pad;
		font-size: 2vh;
		border-bottom: 1px solid white;
		width: 80vw;
		color: white;
	}

	.nav_element_hover_mobile {
		transition-duration: 200ms;
	}

	.nav_element_hover_mobile:hover {
		background-color: rgb(42, 29, 87);
	}

	a:active {
		text-decoration: underline;
	}

	@media screen and (min-width: 1300px) {
		.mobile_sidebar {
			transition-duration: 0ms;
		}
		.mobile_selector {
			visibility: hidden;
		}
	}

	:global(mark) {
		background-color: transparent;
		color: red;
		font-weight: bold;
	}
	.header {
		position: relative;
		z-index: 100;
	}
</style>
