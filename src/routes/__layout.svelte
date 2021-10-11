<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	// @ts-nocheck

	import Footer from '$lib/site_components/footer.svelte';
	import SiteLogo from '$lib/site_components/site_logo.svelte';
	import * as urls from '$lib/vars/urls';
	import { page } from '$app/stores';
	import PageTransition from '$lib/internal_components/PageTransition.svelte';
	import PhoneBox from '$lib/site_components/phone_box.svelte';
	import { browser } from '$app/env';

	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	let mobile_slider_value = 0;
	let is_shown = false;
	let selected;

	let navbar_elements = {
		Startseite: '/',
		'Sky Angebote': {
			index: '/sky_angebote',
			'Sky Sport': '/sky_angebote/sport',
			'Sky Fußball-Bundesliga': '/sky_angebote/bundesliga',
			'Sky Cinema': '/sky_angebote/cinema',
			'Sky Entertainment': '/sky_angebote/entertainment',
			'2 Sky Wunschpakete': '/sky_angebote/2_pakete',
			'3 Sky Wunschpakete': '/sky_angebote/3_pakete',
			'Alle 4 Sky Pakete': '/sky_angebote/alle_pakete'
		},
		'Sky Q': '/sky_q',
		'Sky übers Internet': '/sky_q_internet',
		Shops: (function () {
			let shops_dict = { index: '/shops' };
			urls.shops.forEach((shop) => {
				shops_dict[shop.name + ' Shop'] = shop.route;
			});
			return shops_dict;
		})(),
		Kontakt: '/kontakt'
	};

	function open_sidebar() {
		if (mobile_slider_value === 0) {
			mobile_slider_value = 80;
			is_shown = true;
			console.log('open');
		}
	}
	function close_sidebar() {
		if (mobile_slider_value === 80) {
			mobile_slider_value = 0;
			setTimeout(function () {
				is_shown = false;
			}, 300);
			console.log('close');
		}
	}
	function deselect() {
		selected = undefined;
		console.log('deselected');
	}

	//let scroll_position = 0;
	//if (browser) {
	//	const scroller = document.querySelector('#nav_bar');
	//	scroller.addEventListener('scroll', (event) => {
	//		scroll_position = `scrollTop: ${scroller.scrollTop}`;
	//	});
	//}

	export let key;
</script>

<svelte:head>
	<script
		id="trustamiwidget"
		type="text/javascript"
		src="https://cdn.trustami.com/widgetapi/widget2/trustami-widget.js"
		data-profile="59e6544c53a49963318b4568"
		data-user="dc45e2793250619a08045ba8ad253cd4a1004d2f"
		data-platform="0"
		async>
	</script>

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

{@html '<div class="widget_container_overlay" />'}

<body>
	<div class="mobile_slider" style={'right: ' + mobile_slider_value + 'vw'}>
		<div class="main_content" on:click={close_sidebar}>
			<div class="header_blue_bar" />

			<div class="top_header_container" id="nav_bar">
				<div class="top_header_container_items">
					<a href="/" title="Startseite öffnen" class="header_logo"><SiteLogo /></a>
					<!-- <div class="header_logo_container">
						
					</div> -->
					<div class="desktop header_center_alignment">
						<nav class="main_navbar">
							{#each Object.entries(navbar_elements) as pair}
								<div class="selectable_element">
									{#if pair[1] instanceof Object}
										{#if 'index' in pair[1]}
											<a
												class={`nav_element nav_element_hover ${
													$page.path === pair[1]['index'] ? 'current_route' : ''
												}`}
												href={pair[1]['index']}
												title={pair[0] + ' öffnen'}
											>
												{pair[0]}
											</a>
										{:else}
											<p class="nav_element">
												{pair[0]}
											</p>
										{/if}
									{:else}
										<a
											title={pair[0] + ' öffnen'}
											class={`nav_element nav_element_hover ${
												$page.path === pair[1] ? 'current_route' : ''
											}`}
											href={pair[1]}
										>
											{pair[0]}
										</a>
									{/if}

									{#if pair[1] instanceof Object}
										<div class="sub_selectable_container">
											<button
												title={`Mehr zu ${pair[0]} anzeigen`}
												on:click={async function selector() {
													if (selected !== pair[0]) {
														selected = pair[0];
													} else {
														await deselect();
													}
												}}
												class="side_image_container nav_element nav_element_hover"
											>
												<img
													src="/images/icons/arrow.svg"
													alt=""
													class="side_image"
													style={selected == pair[0] ? '' : 'transform: rotate(-90deg);'}
													title={selected == pair[0] ? '' : 'Mehr Anzeigen'}
												/>
											</button>
											<div>
												{#if selected == pair[0]}
													<div class="context_menu" use:clickOutside on:click_outside={deselect}>
														<b>{pair[0]}</b>
														{#each Object.entries(pair[1]) as subtab}
															{#if subtab[0] != 'index'}
																<button class="selectable_element" on:click={deselect}>
																	<a
																		class="context_menu_element nav_element_hover"
																		href={subtab[1]}
																		title={subtab[0] + ' öffnen'}
																	>
																		{subtab[0]}
																	</a>
																</button>
															{/if}
														{/each}
													</div>
												{/if}
											</div>
										</div>
									{/if}
								</div>
							{/each}
						</nav>
						<div class="phone_box">
							<PhoneBox />
						</div>
						<img
							class="autorisiert_logo"
							src="/images/badges/autorisiert.svg"
							alt="Autorisierter Online Händler"
						/>
					</div>
				</div>
			</div>

			<div class="page">
				<PageTransition refresh={key}>
					<slot />
				</PageTransition>
			</div>
			<Footer />
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
			{#each Object.entries(navbar_elements) as pair}
				<div class="selectable_element_vert">
					{#if pair[1] instanceof Object}
						{#if 'index' in pair[1]}
							<a
								class="nav_element_mobile nav_element_hover_mobile no_margin"
								on:click={close_sidebar}
								href={pair[1]['index']}
							>
								<p class="no_margin small_start_margin">{pair[0]}</p>
							</a>
						{/if}
					{:else}
						<a
							class="nav_element_mobile nav_element_hover_mobile"
							title={pair[0] + ' öffnen'}
							on:click={close_sidebar}
							href={pair[1]}
						>
							<p class="no_margin small_start_margin">{pair[0]}</p>
						</a>
					{/if}
				</div>
			{/each}
			{#each Object.entries(navbar_elements) as pair}
				{#if pair[1] instanceof Object}
					<div class="selectable_element_vert">
						<div class="nav_element_mobile">
							<p class="no_margin small_start_margin">&nbsp;</p>
						</div>
						{#each Object.entries(pair[1]) as subpair}
							{#if subpair[0] !== 'index'}
								<a
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
</body>

<style lang='scss'>
	@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

	* {
		font-family: 'Oxygen', sans-serif;
		z-index: 100;
	}
	:global(button) {
		background-color: transparent;
		border: none;
		font-size: medium;
	}
	:global(p) {
		line-height: 170%;
	}
	:global(body) {
		margin: 0px;
	}

	.context_menu {
		position: absolute;
		background-color: white;
		left: 0px;
		top: 40px;
		border-radius: 10px;
		box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.39);
	}
	.context_menu_element {
		color: black;
		padding: 8px;
		min-width: max-content;
		border: 1px solid transparent;
	}
	.sub_selectable_container {
		position: relative;
	}
	body {
		margin-top: 0;
		margin-bottom: 0;
		margin-right: 0;
		margin-left: 0;
		overflow-x: hidden;
	}
	.top_header_container {
		position: absolute;
		left: 0px;
		top: 0px;
		min-width: 100vw;
	}

	.top_header_container_items {
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: left;
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

	.header_logo {
		align-self: flex-start;
		margin-left: 20px;
		margin-right: 20px;
	}
	.autorisiert_logo {
		margin-left: 20px;
		margin-right: 20px;
	}

	.mobile_selector {
		width: 60px;
		position: absolute;
		left: 80vw;
	}
	.go_to_start {
		position: fixed;
		transition-duration: 200ms;
		right: 30px;
		bottom: -10%;
	}
	.desktop {
		visibility: hidden;
	}
	.main_navbar {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: left;
		margin: 0;
	}

	:root {
		--top_bar_size: max(min(calc(230px - 11vw), 180px), 100px);
	}

	.header_center_alignment {
		padding-top: 15px;
		padding-top: calc(var(--top_bar_size) / 2 - 35px);
		display: flex;
		align-items: center;
	}
	.header_blue_bar {
		background: linear-gradient(to right, #49358d, #027fc7);
		min-height: 100px;
		min-height: var(--top_bar_size);
		min-width: 100vw;
	}
	.selectable_element {
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
		margin-right: 10px;
		margin-left: 10px;
	}
	.selectable_element_vert {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		text-align: center;
	}
	.nav_element {
		--pad: 5px;
		padding-left: var(--pad);
		padding-top: var(--pad);
		padding-right: var(--pad);
		padding-bottom: var(--pad);
		border: 1px solid transparent;
		margin-top: 0;
		margin-bottom: 0;
		color: white;
	}
	.nav_element_mobile {
		text-align: left;
		--pad: 1vh;
		padding-top: var(--pad);
		padding-bottom: var(--pad);
		font-size: 2vh;
		border-bottom: 1px solid white;
		width: 80vw;
		color: white;
	}
	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.nav_element_hover:hover,
	.current_route {
		/* background-color: rgb(42, 29, 87); */
		border: 1px solid white;
	}
	.nav_element_hover_mobile:hover {
		background-color: rgb(42, 29, 87);
	}

	a:active {
		text-decoration: underline;
	}

	.side_image {
		width: 15px;
		transition-duration: 200ms;
	}

	.desktop {
		visibility: hidden;
	}
	.phone_box {
		padding-left: 20px;
		padding-right: 20px;
	}
	@media screen and (min-width: 1300px) {
		.desktop {
			visibility: visible;
		}
		.mobile_sidebar {
			transition-duration: 0ms;
		}
		.mobile_selector {
			visibility: hidden;
		}
		.top_header_container_items {
			justify-content: center;
		}
	}
</style>
