<script lang="ts">
	import { browser } from '$app/env';
	import { indexed_package_assets } from '$lib/scripts/universal/asset_library/assets/packages';
	import type { package_id } from '$lib/scripts/universal/asset_library/assets/packages';

	import {
		bonus_string,
		get_offer_note,
		get_price_string
	} from '$lib/scripts/universal/asset_library/prices';
	import Button from '../layout_components/button.svelte';
	import MultiImageOverlay from './multi_image_overlay.svelte';

	export let title: string;
	export let components: ReadonlyArray<{
		title: string;
		package_ids: package_id[];
		route: string;
	}>;

	let center_index = Math.floor(components.length * (0.5 + 0 ** 10));
	let current_x_pos = center_index;
	export let css_vars: {
		element_spacing: string;
		box_width: string;
		x_padding: string;
		actual_width: string;
	} = {
		element_spacing: '10px',
		box_width: 'calc(5vw + 200px)',
		x_padding: '50px',
		actual_width: 'calc(var(--box_width) + var(--x_padding) * 2)'
	};
	function wrap(index: number): number {
		return mod_floor(index, components.length);
	}
	function element_wrap(index: number): number {
		const l = components.length;
		const hl = Math.floor(l / 2);
		return ((((index + hl) % l) - hl * 2) % l) + hl;
	}
	function get_x_pos(index: number, x_index: number): string {
		return `left: calc(${element_wrap(index - wrap(x_index))} * (${css_vars.actual_width} + ${
			css_vars.element_spacing
		}) - ${css_vars.actual_width} / 2);`;
	}
	function mod_floor(a: number, n: number): number {
		return ((a % n) + n) % n;
	}
	function lerp(v1: number, v2: number, f: number): number {
		if (f < 0 || f > 1) {
			throw `Value must be between 0 and 1 value was: ${f}`;
		}
		return v1 * (1 - f) + v2 * f;
	}
	let stop_id = undefined;
	let last = 0;
	function animate(now: number) {
		if (!(Math.abs(current_x_pos - center_index) < 0.001)) {
			let dt = Math.max(Math.min(((now - last) / 200) * 2, 1), 0);
			last = now;
			current_x_pos = lerp(current_x_pos, center_index, dt);
			stop_id = requestAnimationFrame(animate);
		} else {
			current_x_pos = center_index;
		}
	}
	let slide_timeout_id: ReturnType<typeof setTimeout>;
	const delay = 9000;
	let focused = true;
	function slide(amount = 1) {
		if (focused) {
			center_index += amount;
			last = performance.now();
			cancelAnimationFrame(stop_id);
			requestAnimationFrame(animate);
		}
		clearTimeout(slide_timeout_id);
		slide_timeout_id = setTimeout(slide, delay);
	}
	if (browser) {
		setTimeout(slide, delay);
		onfocus = function () {
			focused = true;
			cancelAnimationFrame(stop_id);
			requestAnimationFrame(animate);
		};
		onblur = function () {
			focused = false;
		};
	}
	$: css_vars_style = (function () {
		let combined_style = '';
		for (const [key, value] of Object.entries(css_vars)) {
			combined_style += '--' + key + ':' + value + ';';
		}
		return combined_style;
	})();
</script>

<div style={css_vars_style}>
	<div class="main_container">
		<h2 class="gradient-text" style="text-align: center;">{title}</h2>
		<div class="alignment">
			{#each components as item, id}
				<a
					class="package_alignment {id == wrap(center_index) ? 'middle_element' : ''}"
					style={get_x_pos(id, current_x_pos)}
					href={item.route}
				>
					<h3>{@html item.title}</h3>
					<MultiImageOverlay packages={item.package_ids} />
					<ul>
						<li>+ Für Internet, Sat- oder Kabel,</li>
						<li>+ Sky Q Receiver oder Sky Q IPTV Box gratis zum Abo dazu,</li>
						<li>+ 12 Monatsabo, danach mtl. kündbar,</li>
						<li>+ {bonus_string} Bonus on top</li>
						<!-- 
							<li><b>+ TVNOW PREMIUM Gutschein ab Ent+1 Paket über 12 Monate (Versand durch Sky)</b></li>
							<li><b>+ € 50 Amazon Gutschein bei Ent+1 Paket oder € 125 Amazon Gutschein bei Ent+2 Pakete oder Ent Plus+1 Paket (Versand durch Sky)</b></li>
							<li><b>+ Bis 31.12.21 keine Abogebühren durch Sky</b></li>
							<li><b>+ Sky Winteraktion: Bis zu 12 Monate Sky Sport gratis dazu</b></li>
							<li><b>+ Bis zu € 100 Gutschrift von Sky</b>`</li>
							<li><b>+ 50% Rabatt auf Cinema, Bundesliga und/oder Sport</b></li>
						-->
						<li><mark>{get_offer_note(item.package_ids, true)}</mark></li>
					</ul>
					<h3>
						ab {@html get_price_string(item.package_ids, `jahr`)} monatlich*
					</h3>
					<p>
						(im Jahres-Abo, danach flexibel monatlich kündbar, Preis bezieht sich auf {item.package_ids
							.map((id) => indexed_package_assets[id].name)
							.join(' + ')}) Optional Netflix, DAZN und UHD, + 500 PAYBACK Punkte
					</p>
					<div class="btn">
						<Button text={'Mehr erfahren'} route={item.route} />
					</div>
				</a>
			{/each}
		</div>
		<div class="cover_elements">
			<div class="cover cover_element" />
			<div class="t cover_element" />
			<div class="cover cover_element" />
		</div>
		<div class="controls">
			<div class="left_control" on:click={() => slide(-1)}>
				<img src="/images/icons/arrow.svg" alt="" />
			</div>
			<div class="right_control" on:click={() => slide(1)}>
				<img src="/images/icons/arrow.svg" alt="" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import 'lib/style/mixins.scss';
	$background_height: calc((900px - 6vw) * 1.3);
	$outer_padding: 70px;
	$background_color: #f2f2f2;
	$side_distance: max(25px, calc(15vw - 100px));
	.controls {
		& > * {
			position: absolute;
			padding: 20px;
			margin: 0px;
			background-color: rgba(0, 0, 0, 0.527);
			border-radius: 100%;
			user-select: none;
			img {
				width: 40px;
			}
			top: 550px;
			z-index: 20;
			&:hover {
				background-color: rgba(0, 0, 0, 0.827);
			}
		}
		.left_control {
			transform: rotate(90deg);
			left: $side_distance;
		}
		.right_control {
			transform: rotate(-90deg);
			right: $side_distance;
		}
	}
	.gradient-text {
		@include gradient-text;
	}
	.btn {
		margin-top: 30px;
	}

	ul {
		list-style: none;
		padding-left: 0px;
		line-height: 35px;
	}
	.alignment {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		gap: var(--element_spacing);
		margin-left: auto;
		margin-right: auto;
	}
	.package_alignment {
		position: absolute;
		display: flex;
		flex-direction: column;
		padding: 70px var(--x_padding);
		border-radius: 2px;
		max-width: var(--box_width);
		min-width: var(--box_width);
	}
	.middle_element {
		box-shadow: 0 6px 20px 0 rgb(0 0 0 / 12%);
		background-color: white;
	}
	h3 {
		min-height: 60px;
		margin: 0px;
		@include gradient-text;
	}
	h2 {
		margin-bottom: 60px;
		font-size: 35px;
	}
	p {
		margin: 0px;
	}
	.cover {
		background-color: $background_color;
		min-width: 100%;
		pointer-events: auto;
	}
	.t {
		min-width: calc(var(--actual_width) * 3 + var(--element_spacing) * 3);
		pointer-events: none;
	}
	img {
		align-self: center;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.cover_element {
		position: relative;
		min-height: 60px;
	}
	.cover_elements {
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		justify-content: center;
		min-width: 100%;
		min-height: 100%;
		z-index: 5;
		pointer-events: none;
	}
	.main_container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $background_color;
		padding-top: $outer_padding;
		padding-bottom: $outer_padding;
		min-height: $background_height;
	}
</style>
