<script lang="ts">
	import { browser } from '$app/env';

	export let components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
	}>;

	let indexed_components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
		id: number;
	}> = [];
	for (const [index, element] of components.entries()) {
		indexed_components.push({
			...element,
			id: index
		});
	}

	let center_index = Math.floor(indexed_components.length * (0.5 + 0 ** 10));
	let current_x_pos = center_index;

	let css_vars = {
		element_spacing: '10px',
		box_width: 'calc(5vw + 200px)',
		x_padding: '20px',
		actual_width: 'calc(var(--box_width) + var(--x_padding) * 2)',
		background_color: '#f2f2f2',
		outer_padding: '100px'
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
		if (browser) {
			if (!(Math.abs(current_x_pos - center_index) < 0.001)) {
				let dt = Math.max(Math.min((now - last) / 200, 1), 0);
				last = now;
				current_x_pos = lerp(current_x_pos, center_index, dt);
				stop_id = window.requestAnimationFrame(animate);
			} else {
				current_x_pos = center_index;
			}
		}
	}

	let slide_timeout_id;
	const delay = 6000

	function slide(amount = 1) {
		center_index += amount;
		last = window.performance.now();
		window.clearTimeout(slide_timeout_id)
		slide_timeout_id = setTimeout(slide, delay)
		window.cancelAnimationFrame(stop_id);
		window.requestAnimationFrame(animate);
	}

	if (browser) {
		setTimeout(slide, delay)
	}

	$: css_vars_style = (function () {
		let combined_style = '';
		for (const [key, value] of Object.entries(css_vars)) {
			combined_style += '--' + key + ':' + value + ';';
		}
		return combined_style;
	})();
</script>

<div class="buttons">
	<div>{frames}</div>
	<div
		on:click={function () {
			slide(-1);
		}}
	>
		-
	</div>
	<div>{center_index}</div>
	<div
		on:click={function () {
			slide(1);
		}}
	>
		+
	</div>
</div>

<div class="main_container" style={css_vars_style}>
	<div class="alignment">
		{#each indexed_components as item}
			<div
				class="package_alignment {item.id == wrap(center_index) ? 'middle_element' : ''}"
				style={get_x_pos(item.id, current_x_pos)}
			>
				<h3>{item.title}</h3>
				<img src={item.image} alt="" />
				<ul>
					{#each item.points as point}
						<li>{@html point}</li>
					{/each}
				</ul>
				<h3>{item.subtitle}</h3>
				<p>{item.info_text}</p>
			</div>
		{/each}
	</div>
	<div class="cover_elements">
		<div class="cover cover_element" />
		<div class="t cover_element" />
		<div class="cover cover_element" />
	</div>
</div>

<style>
	.buttons {
		display: flex;
		justify-content: center;
	}
	.buttons div {
		padding: 50px;
	}
	ul {
		list-style: none;
		padding-left: 0px;
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
		padding: 30px var(--x_padding);
		border-radius: 2px;
		max-width: var(--box_width);
		min-width: var(--box_width);
	}
	.middle_element {
		box-shadow: 0 6px 20px 0 rgb(0 0 0 / 12%);
		background-color: white;
	}
	.cover {
		background-color: var(--background_color);
		min-width: 100%;
	}
	.t {
		min-width: calc(var(--actual_width) * 3 + var(--element_spacing) * 3);
	}
	img {
		width: 100%;
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
	}
	.main_container {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: var(--background_color);
		padding: var(--outer_padding) 0px;
		min-height: 500px;
	}
</style>
