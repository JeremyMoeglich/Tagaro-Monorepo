<script lang="ts">
	import { browser } from '$app/env';
	import Button from '../layout_components/button.svelte';

	export let title;
	export let components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
		route: string;
	}>;

	let indexed_components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
		id: number;
		route: string;
	}> = [];

	for (const [index, element] of components.entries()) {
		indexed_components.push({
			...element,
			id: index
		});
	}

	let center_index = Math.floor(indexed_components.length * (0.5 + 0 ** 10));
	let current_x_pos = center_index;

	export let css_vars: {
		element_spacing: string;
		box_width: string;
		x_padding: string;
		actual_width: string;
		background_color: string;
	} = {
		element_spacing: '10px',
		box_width: 'calc(5vw + 200px)',
		x_padding: '50px',
		actual_width: 'calc(var(--box_width) + var(--x_padding) * 2)',
		background_color: '#f2f2f2'
	};

	function wrap(index) {
		return mod_floor(index, indexed_components.length);
	}
	function element_wrap(index) {
		const l = indexed_components.length;
		const hl = Math.floor(l / 2);
		return ((((index + hl) % l) - hl * 2) % l) + hl;
	}

	function get_x_pos(index, x_index) {
		return `left: calc(${element_wrap(index - wrap(x_index))} * (${css_vars.actual_width} + ${
			css_vars.element_spacing
		}) - ${css_vars.actual_width} / 2);`;
	}
	function mod_floor(a, n) {
		return ((a % n) + n) % n;
	}
	function lerp(v1, v2, f) {
		if (f < 0 || f > 1) {
			throw `Value must be between 0 and 1 value was: ${f}`;
		}
		return v1 * (1 - f) + v2 * f;
	}
	let frames = 0;
	let stop_id = undefined;
	let last = 0;
	function animate(now) {
		frames++;
		if (!(Math.abs(current_x_pos - center_index) < 0.001)) {
			let dt = Math.max(Math.min(((now - last) / 200) * 2, 1), 0);
			last = now;
			current_x_pos = lerp(current_x_pos, center_index, dt);
			stop_id = requestAnimationFrame(animate);
		} else {
			current_x_pos = center_index;
		}
	}

	let slide_timeout_id;
	const delay = 5000;
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

	function select(id) {
		center_index = id;
		slide(0);
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
		<h2 class="gradient_text" style="text-align: center;">{title}</h2>
		<div class="alignment">
			{#each indexed_components as item}
				<a
					class="package_alignment {item.id == wrap(center_index) ? 'middle_element' : ''}"
					style={get_x_pos(item.id, current_x_pos)}
					href={item.route}
				>
					<h3>{@html item.title}</h3>
					<img src={item.image} alt="" />
					<ul>
						{#each item.points as point}
							<li>{@html point}</li>
						{/each}
					</ul>
					<h3>{@html item.subtitle}</h3>
					<p>{@html item.info_text}</p>
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
	</div>
	<div class="controll_align">
		<div class="line_control_container">
			{#each indexed_components as item}
				<div
					class={item.id == wrap(center_index) ? 'selected' : ''}
					on:click={function () {
						select(item.id);
					}}
				>
					&nbsp;
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	:root {
		--background_height: calc((830px - 5vw) * 1.2);
		--outer_padding: 70px;
	}
	.btn {
		margin-top: 50px;
	}
	.controll_align {
		display: flex;
		min-height: calc(var(--outer_padding) * 2.5);
		background-color: var(--background_color);
		justify-content: center;
		align-items: center;
	}
	.line_control_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 13px;
		min-width: calc(var(--actual_width) * 0.8);
	}
	.line_control_container > div {
		background-color: rgb(219, 219, 219);
		width: 100%;
		height: 7px;
	}
	.line_control_container > .selected {
		background: linear-gradient(to right, #49358d, #027fc7);
		width: 100%;
		height: 16px;
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
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	h2 {
		margin-bottom: 60px;
		font-size: 35px;
	}
	.gradient_text {
		background: linear-gradient(to right, rgb(0, 15, 245) 0%, rgb(0, 150, 255) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	p {
		margin: 0px;
	}
	.cover {
		background-color: var(--background_color);
		min-width: 100%;
	}
	.t {
		min-width: calc(var(--actual_width) * 3 + var(--element_spacing) * 3);
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
		background-color: var(--background_color);
		padding-top: var(--outer_padding);
		padding-bottom: var(--outer_padding);
		min-height: var(--background_height);
	}
</style>
