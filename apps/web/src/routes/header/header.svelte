<script lang="ts">
	import SiteLogo from 'components/complete/site_logo.svelte';
	import { clickOutside } from 'svelte-use-click-outside';
	import PhoneBox from './phone_box.svelte';
	import { page } from '$app/stores';

	export let navbar_elements: Record<string, string | Record<string, string>>;
	let selected: undefined | string = undefined;

	function deselect() {
		selected = undefined;
	}
</script>


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
										$page.url.pathname === pair[1]['index'] ? 'current_route' : ''
									}`}
									href={pair[1]['index']}
									title={pair[0] + ' öffnen'}
								>
									{@html pair[0]}
								</a>
							{:else}
								<p class="nav_element">
									{@html pair[0]}
								</p>
							{/if}
						{:else}
							<a
								title={pair[0] + ' öffnen'}
								class={`nav_element nav_element_hover ${
									$page.url.pathname === pair[1] ? 'current_route' : ''
								}`}
								href={pair[1]}
								target={pair[1].includes('ebay') ? '_blank' : '_self'}
							>
								{pair[0]}
							</a>
						{/if}

						{#if pair[1] instanceof Object}
							<div class="sub_selectable_container">
								<button
									title={`Mehr zu ${pair[0]} anzeigen`}
									on:click={() => {
										if (selected !== pair[0]) {
											selected = pair[0];
										} else {
											deselect();
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
										<div class="context_menu" use:clickOutside={deselect}>
											<b>{pair[0]}</b>
											{#each Object.entries(pair[1]) as subtab}
												{#if subtab[0] != 'index'}
													<button class="selectable_element" on:click={deselect}>
														<a
															class="context_menu_element nav_element_hover"
															href={subtab[1]}
															title={subtab[0] + ' öffnen'}
														>
															{@html subtab[0]}
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
		</div>
	</div>
</div>

<style lang="scss">
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
	.header_center_alignment {
		padding-top: calc(var(--top_bar_size) / 2 - 35px);
		display: flex;
		align-items: center;
		height: 70px;
		box-sizing: content-box;
	}
	.header_blue_bar {
		background: linear-gradient(to right, #49358d, #027fc7);
		min-height: 100px;
		min-height: var(--top_bar_size);
		min-width: 100vw;
	}
	.header_logo {
		align-self: flex-start;
		margin-left: 20px;
		margin-right: 20px;
		width: 128px;
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
		gap: 20px;
	}
	.selectable_element {
		display: flex;
		position: relative;
		align-items: center;
		text-align: center;
		min-width: max-content;
		width: 100%;
	}
	.selectable_element_vert {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		text-align: center;
	}

	$nav_pad: 5px;
	.nav_element {
		padding-left: $nav_pad;
		padding-top: $nav_pad;
		padding-right: $nav_pad;
		padding-bottom: $nav_pad;
		border: 1px solid transparent;
		margin-top: 0;
		margin-bottom: 0;
		color: white;
	}
	$context-padding: 8px;
	.context_menu {
		position: absolute;
		background-color: white;
		left: 50%;
		transform: translateX(-50%);
		top: 40px;
		border-radius: 10px;
		box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.39);
	}
	.context_menu_element {
		color: black;
		padding: $context-padding;
		min-width: max-content;
		border: 1px solid transparent;
		width: 100%;
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

	.nav_element_hover {
		transition-duration: 200ms;
	}
	.nav_element_hover:hover,
	.current_route {
		/* background-color: rgb(42, 29, 87); */
		border: 1px solid white;
	}
	.desktop {
		visibility: hidden;
	}
	.phone_box {
		padding-left: 20px;
		padding-right: 20px;
	}
	.nav_element_hover:hover,
	.current_route {
		/* background-color: rgb(42, 29, 87); */
		border: 1px solid white;
	}
	.side_image {
		width: 15px;
		transition-duration: 200ms;
	}

	@media screen and (min-width: 1300px) {
		.desktop {
			visibility: visible;
		}
		.top_header_container_items {
			justify-content: center;
		}
		.header_logo {
			position: relative;
			right: 100px;
		}
	}
</style>
