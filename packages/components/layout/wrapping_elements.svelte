<script lang="ts">
	import { browser } from '$app/environment';
	import { indexed_package_assets } from 'asset_library/assets/packages';
	import type { package_id } from 'asset_library/assets/packages';
	import { minBy } from 'lodash-es';

	import {
		aktivierung,
		bonus,
		bonus_string,
		get_offer_note,
		get_price_string
	} from 'asset_library/prices';
	import MultiImageOverlay from '../generators/multi_image_overlay.svelte';
	import Button from '../elements/interactive/buttons/button.svelte';
	import { onMount } from 'svelte';
	import { enter_filter } from 'utils';
	import { panic } from 'functional-utilities';
	import { get_praemie, get_title } from 'asset_library/title';

	export let title: string;
	export let components: ReadonlyArray<{
		package_ids: package_id[];
		route: string;
	}>;

	let center_index = 0;
	let current_x_pos = center_index;

	const x_padding = '50px';

	export let css_vars: {
		element_spacing: string;
		box_width: string;
		x_padding: string;
		actual_width: string;
	} = {
		element_spacing: '10px',
		box_width: `calc(calc(5vw + 200px) + calc(2 * ${x_padding}))`,
		x_padding: '50px',
		actual_width: 'var(--box_width)'
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
	let stop_id: number | undefined = undefined;
	let last = 0;
	function animate(now: number) {
		if (!(Math.abs(current_x_pos - center_index) < 0.001)) {
			let dt = Math.max(Math.min(((now - last) / 400) * 2, 1), 0);
			last = now;
			current_x_pos = lerp(current_x_pos, center_index, dt);
			stop_id = requestAnimationFrame(animate);
		} else {
			current_x_pos = center_index;
		}
	}
	let slide_timeout_id: ReturnType<typeof setTimeout>;
	const delay = 9000;
	function slide(amount = 1) {
		slide_to(wrap(center_index) + amount);
		clearTimeout(slide_timeout_id);
		slide_timeout_id = setTimeout(slide, delay);
	}

	function slide_to(index: number) {
		const offset = wrap(center_index);
		const segment_index = center_index + (index - offset);
		const left_segment_index = segment_index - components.length;
		const right_segment_index = segment_index + components.length;

		center_index =
			minBy([segment_index, left_segment_index, right_segment_index], (i: number) =>
				Math.abs(i - center_index)
			) ?? panic('No min found');

		last = performance.now();
		if (stop_id !== undefined) {
			cancelAnimationFrame(stop_id);
		}
		reset_delay();
		requestAnimationFrame(animate);
	}
	function reset_delay() {
		clearTimeout(slide_timeout_id);
		slide_timeout_id = setTimeout(slide, delay);
	}
	onMount(() => {
		slide_timeout_id = setTimeout(slide, delay);
	});
	$: css_vars_style = (() => {
		let combined_style = '';
		for (const [key, value] of Object.entries(css_vars)) {
			combined_style += `--${key}:${value};`;
		}
		return combined_style;
	})();

	function slide_left() {
		slide(-1);
	}

	function slide_right() {
		slide(1);
	}
</script>

{#if browser}
	<div style={css_vars_style}>
		<div class="main_container">
			<h2 class="gradient_text">{title}</h2>
			<div class="navigation">
				{#each components as _, id}
					<button
						class="navigation_element"
						class:center_nav={id == wrap(center_index)}
						on:click={() => {
							slide_to(id);
						}}
					>
						{id + 1}
					</button>
				{/each}
			</div>
			<div class="alignment">
				{#each components as item, id}
					<a
						class="package_alignment {id == wrap(center_index) ? 'middle_element' : ''}"
						style={get_x_pos(id, current_x_pos)}
						href={item.route}
					>
						<div class="inner_alignment">
							<h3>
								<span class="gradient_text">{@html get_title(item.package_ids)}</span><br />
								<span class="red">
									+ {#if item.package_ids.includes('entertainmentplus')}
										€ 50 Gutschein &
									{/if}
									{@html bonus_string()} Bonus
								</span>
							</h3>
							<MultiImageOverlay
								packages={item.package_ids}
								offset_multiplier={1 - Math.abs(element_wrap(id - wrap(current_x_pos))) / 2}
							/>
							<ul>
								{#if item.package_ids.includes('entertainmentplus')}
									<li>✓ Entertainment Plus inkl. Netflix</li>
								{/if}
								{#if item.package_ids.includes('cinema')}
									<li>✓ Cinema inkl. Paramount+</li>
								{/if}
								{#if item.package_ids.includes('entertainmentplus')}
									<li>€ 50 Wunschgutschein* (z.B. für Amazon, Zalando, MediaMarkt u.v.m.)</li>
								{/if}
								{#if bonus !== 0}
									<li>✓ {@html bonus_string()} Bonus on top</li>
								{/if}
								<li>✓ Sky Q Receiver gratis zum Abo dazu</li>
								<li>✓ Nur im Web: € 0 statt € 29 einmalige Gebühr</li>
								<li>✓ Optional: 12 Monate Discovery+ geschenkt</li>
								<li>✓ 12 Monatsabo, danach mtl. kündbar</li>
								{#if aktivierung === 0}
									<li>✓ € 0 statt € 29 einmalige Gebühr</li>
								{/if}
								<li>✓ 500 PAYBACK Basis Punkte</li>
								<li>✓ Sofort losschauen mit Sky Go</li>
								<li class="preisvorteil">
									<mark>{@html get_offer_note(item.package_ids, true)}</mark>
								</li>
							</ul>
							<h3 class="price gradient_text">
								{@html get_price_string(item.package_ids, `jahr`)} mtl.*
							</h3>
							<p class="bottom_text">
								<!-- statt: {@html to_price_string(
									get_offer_price(empty_offer, item.package_ids).jahr,
									true
								)} mtl. <br /> -->
								(im Jahres-Abo, danach {@html get_price_string(item.package_ids, 'monat')} mtl., Preis
								bezieht sich auf {item.package_ids
									.map((id) => indexed_package_assets[id].name)
									.join(' + ')})
								<br />
								Optional DAZN Unlimited
							</p>
						</div>
						<div class="button">
							<Button text={'Mehr erfahren'} on_click={item.route} />
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
				<div class="left_control" on:click={slide_left} on:keypress={enter_filter(slide_left)}>
					<img src="/images/icons/arrow.svg" alt="" />
				</div>
				<div class="right_control" on:click={slide_right} on:keypress={enter_filter(slide_right)}>
					<img src="/images/icons/arrow.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	$background_height: calc((950px - 6vw) * 1.5);
	$outer_padding: 40px;
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
	.button {
		margin-top: 30px;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 9px;
		text-align: center;
		list-style: none;
		padding-left: 0px;
		line-height: 23px;
		margin-top: 15px;
		font-size: 15px;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		padding: 30px var(--x_padding);
		border-radius: 2px;
		max-width: var(--box_width);
		min-width: var(--box_width);
	}
	.inner_alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 670px;
	}
	.bottom_text {
		font-size: small;
		text-align: center;
		color: gray;
	}
	.price {
		padding-top: 20px;
		font-size: 30px;
	}
	.middle_element {
		box-shadow: 0 6px 20px 0 rgb(0 0 0 / 12%);
		background-color: white;
	}
	h3 {
		margin: 0px;
		text-align: center;
	}
	h2 {
		font-size: 35px;
		margin-bottom: 10px;
	}
	.navigation {
		display: flex;
		margin-bottom: 30px;
		border-radius: 15px;
		background-color: rgb(230, 230, 230);
		border: 1px solid rgba(207, 207, 207, 0.123);
		overflow: hidden;
	}

	.center_nav {
		background-color: rgb(255, 255, 255);
		color: blue;
		font-weight: bold;
	}

	.navigation_element {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		font-size: 14px;
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
	.preisvorteil {
		margin-top: 10px;
		font-size: 20px;
	}

	.red {
		color: red;
	}
</style>
