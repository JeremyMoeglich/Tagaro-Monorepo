<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	let mobile_slider_style = 'right:0vw';
	let selected;

	const navbar_elements = {
		"Startseite": "/",
		'Sky Angebote': {
			"index":'/sky_angebote',
			"Sky Sport": "/sky_angebote/sport",
			"Sky Fußball-Bundesliga": "/sky_angebote/bundesliga",
			"Sky Cinema": "/sky_angebote/cinema",
			"Sky Entertainment": "/sky_angebote/entertainment",
			"2 Sky Wunschpakete": "/sky_angebote/2_pakete",
			"3 Sky Wunschpakete": "/sky_angebote/3_pakete",
			"Alle 4 Sky Pakete": "/sky_angebote/alle_pakete"
		},
		"Sky Q": '/sky_q',
		'Sky übers Internet': '/sky_q_internet',
		Shops: {
			'Ebay Shop': 'https://stores.ebay.de/TAGARO-Medienshop'
		},
		Kontakt: {
			"index": '/kontakt'
		}
	};

	function open_sidebar() {
		mobile_slider_style = 'right:80vw';
		console.log('open');
	}
	function close_sidebar() {
		mobile_slider_style = 'right:0vw';
		console.log('close');
	}
	import PageTransition from '$lib/internal_components/PageTransition.svelte';
	export let key;
</script>

<body>
	<div class="mobile_slider" style={mobile_slider_style}>
		<img on:click={open_sidebar} class="mobile_selector" src="/images/mobile_open.svg" alt="" />
		<div class="main_content" on:click={close_sidebar}>
			<div class="top_header_container">
				<div class="top_header_container_items">
					<div class="header_logo">
						<img src="/images/tagaro-logo.png" alt="" />
					</div>
					<nav class="desktop">
						<dir class="main_navbar">
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
										<div
											on:click={function selector() {
												if (selected === pair[0]) {
													selected = undefined;
												} else {
													selected = pair[0];
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
									{/if}
								</div>
							{/each}
						</dir>
						{#if selected}
							<div class="sub_navbar">
								{#each Object.entries(navbar_elements[selected]) as subtab}
									{#if subtab[0] !== 'index'}
										<div>
											<a class="nav_element nav_element_hover" href={subtab[1]}>{subtab[0]}</a>
										</div>
									{/if}
								{/each}
							</div>
						{/if}
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
		<div class="mobile_sidebar">
			<div class="selectable_element_vert">
				<div class="nav_element_mobile no_margin">
					<p class="no_margin" style="text-align: center;">Tagaro</p>
				</div>
			</div>
			{#each Object.entries(navbar_elements) as pair}
				<div class="selectable_element_vert">
					{#if pair[1] instanceof Object}
						{#if 'index' in pair[1]}
							<a class="nav_element_mobile nav_element_hover no_margin" href={pair[1]['index']}>
								<p class="no_margin small_start_margin">{pair[0]}</p>
							</a>
						{:else}
							<div class="nav_element_mobile no_margin">
								<p class="no_margin small_start_margin">{pair[0]}</p>
							</div>
						{/if}
						{#each Object.entries(pair[1]) as subpair}
							{#if subpair[0] !== 'index'}
								<a class="nav_element_mobile nav_element_hover" href={subpair[1]}>
									<p class="no_margin" style="padding-left:40px;">{subpair[0]}</p>
								</a>
							{/if}
						{/each}
					{:else}
						<a class="nav_element_mobile nav_element_hover" href={pair[1]}>
							<p class="no_margin small_start_margin">{pair[0]}</p>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

	* {
		font-family: 'Oxygen', sans-serif;
	}

	body {
		margin-top: 0;
		margin-bottom: 0;
		margin-right: 0;
		margin-left: 0;
		overflow-x: hidden;
	}
	.top_header_container {
		background: linear-gradient(to right, #49358d, #027fc7);
		min-height: min(calc(30vh - 5vw), 23vh);
		--side_padding: calc(20vw - 100px);
		padding-left: var(--side_padding);
		padding-right: var(--side_padding);
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
		float: left;
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
	}
	.small_start_margin {
		padding-left: 20px;
	}
	.mobile_sidebar {
		float: right;
		min-width: 80vw;
		max-width: 80vw;
		min-height: 100vh;
		background: linear-gradient(to right, rgb(57, 42, 109), rgb(0, 90, 143));
	}
	.header_logo {
		margin-right: 50px;
	}

	.mobile_selector {
		width:60px;
		position: absolute;
		left: 80vw;
	}

	.desktop {
		visibility: hidden;
	}
	.main_navbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0;
	}
	.sub_navbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.selectable_element {
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
	}
	.selectable_element_vert {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		text-align: center;
	}
	.nav_element {
		display: flex;
		align-items: center;
		--pad: 5px;
		padding-left: var(--pad);
		padding-top: var(--pad);
		padding-right: var(--pad);
		padding-bottom: var(--pad);
		min-height: 30px;
		color: white;
	}
	.nav_element_mobile {
		text-align: left;
		--pad: 15px;
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
		background-color: rgb(42, 29, 87);
	}

	a:active {
		text-decoration: underline;
	}

	.side_image {
		width: 15px;
	}

	@media screen and (min-width: 900px) {
		.desktop {
			visibility: visible;
		}
		.mobile_selector {
			visibility: hidden;
		}
		.top_header_container_items {
			justify-content: center;
		}
	}
</style>
