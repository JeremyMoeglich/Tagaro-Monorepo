<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	// @ts-nocheck

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
		Shops: {
			index: '/test',
			'Ebay Shop': 'https://stores.ebay.de/TAGARO-Medienshop'
		},
		Kontakt: '/kontakt'
	};

	function open_sidebar() {
		mobile_slider_value = 80;
		console.log('open');
	}
	function close_sidebar() {
		mobile_slider_value = 0;
		console.log('close');
	}
	function deselect() {
		selected = undefined;
		console.log('deselected');
	}

	import PageTransition from '$lib/components/PageTransition.svelte';
	export let key;
</script>

<body>
	<div class="mobile_slider" style={'right: ' + mobile_slider_value + 'vw'}>
		<div class="main_content" on:click={close_sidebar}>
			<div class="header_blue_bar" />
			<div class="top_header_container">
				
				<div class="top_header_container_items">
					<div class="header_logo_container">
						<img class="header_logo" src="/images/tagaro-logo.png" alt="" />
					</div>
					<nav class="desktop">
						<div class="main_navbar">
							{#each Object.entries(navbar_elements) as pair}
								<div class="selectable_element">
									{#if pair[1] instanceof Object}
										{#if 'index' in pair[1]}
											<a class="nav_element nav_element_hover" href={pair[1]['index']}>
												{pair[0]}
											</a>
										{:else}
											<p class="nav_element">
												{pair[0]}
											</p>
										{/if}
									{:else}
										<a class="nav_element nav_element_hover" href={pair[1]}>
											{pair[0]}
										</a>
									{/if}

									{#if pair[1] instanceof Object}
										<div class="sub_selectable_container">
											<div
												on:click={async function selector() {
													if (selected !== pair[0]) {
														selected = pair[0];
													} else {
														await deselect();
													}
												}}
												class="side_image_container nav_element nav_element_hover"
											>
												{#if selected == pair[0]}
													<img src="/images/arrow.svg" alt="" class="side_image" />
												{:else}
													<img
														style="transform: rotate(-90deg);"
														src="/images/arrow.svg"
														alt=""
														class="side_image"
													/>
												{/if}
											</div>
											<div>
												{#if selected == pair[0]}
													<div class="context_menu" use:clickOutside on:click_outside={deselect}>
														<b>{pair[0]}</b>
														{#each Object.entries(pair[1]) as subtab}
															{#if subtab[0] != 'index'}
																<div class="selectable_element" on:click={deselect}>
																	<a class="context_menu_element nav_element_hover" href={subtab[1]}
																		>{subtab[0]}</a
																	>
																</div>
															{/if}
														{/each}
													</div>
												{/if}
											</div>
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</nav>
					<img
						class="desktop"
						style="margin-left: 30px;"
						src="/images/autorisiert_sky.png"
						alt=""
					/>
				</div>
			</div>

			<div class="page">
				<PageTransition refresh={key}>
					<slot />
				</PageTransition>
			</div>
		</div>
		<div class="mobile_sidebar" style="right: {'-' + (80 - mobile_slider_value)}vw;">
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
								>
									<p class="no_margin small_start_margin">{subpair[0]}</p>
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
		</div>
		<img on:click={open_sidebar} class="mobile_selector" src="/images/mobile_open.svg" alt="" />
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

	* {
		font-family: 'Oxygen', sans-serif;
	}

	.context_menu {
		position: absolute;
		background: linear-gradient(to right, rgb(197, 194, 206), rgb(212, 197, 207));
		left: 0px;
		top: 40px;
		border-radius: 10px;
	}
	.context_menu_element {
		color: black;
		padding: 8px;
		min-width: max-content;
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
	.header_blue_bar {
		background: linear-gradient(to right, #49358d, #027fc7);
		min-height: max(min(calc(40vh - 11vw), 23vh), 100px);
		min-width: 100vw;
	}
	.top_header_container_items {
		display: flex;
		align-items: center;
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
	.header_logo_container {
		position: relative;
		min-width: 140px;
		min-height: 5px;
	}
	.header_logo {
		position: absolute;
		left: 70px;
		bottom: -70px;
	}

	.mobile_selector {
		width: 60px;
		position: absolute;
		left: 80vw;
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
		padding-top: calc(max(min(calc(40vh - 11vw), 23vh), 100px) / 2 - 20px);
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
		--pad: 10px;
		padding-top: var(--pad);
		padding-bottom: var(--pad);
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

	.nav_element_hover:hover {
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
	}

	@media screen and (min-width: 800px) {
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
